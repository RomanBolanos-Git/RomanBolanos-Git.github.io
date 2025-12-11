import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';
import './Lanyard.css';

export default function Lanyard({ 
  position = [0, 0, 20], 
  gravity = [0, -40, 0], 
  fov = 25 
}) {
  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <spotLight position={[0, 10, 5]} angle={0.3} intensity={1} castShadow />
        
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        </Environment>
        
        <InteractiveLanyard gravity={gravity} />
      </Canvas>
    </div>
  );
}

function InteractiveLanyard({ gravity }) {
  const cardRef = useRef();
  const groupRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { viewport, camera } = useThree();
  
  // Física simulada (sin Rapier)
  const physics = useRef({
    velocity: { x: 0, y: 0 },
    position: { x: 0, y: -0.5 },
    anchorY: 2,
    ropeLength: 2.5,
    damping: 0.92,
    gravityStrength: Math.abs(gravity[1]) / 100
  });

  // Cursor personalizado
  useState(() => {
    if (hovered) {
      document.body.style.cursor = isDragging ? 'grabbing' : 'grab';
    } else {
      document.body.style.cursor = 'auto';
    }
  }, [hovered, isDragging]);

  // Animación con física simulada
  useFrame((state, delta) => {
    if (!cardRef.current || !groupRef.current) return;

    const time = state.clock.elapsedTime;
    const phys = physics.current;

    if (isDragging) {
      // Seguir el mouse suavemente
      const targetX = mousePos.x * viewport.width / 3;
      const targetY = mousePos.y * viewport.height / 3;
      
      phys.position.x += (targetX - phys.position.x) * 0.15;
      phys.position.y += (targetY - 0.5 - phys.position.y) * 0.15;
      
      phys.velocity.x = (targetX - phys.position.x) * 3;
      phys.velocity.y = (targetY - 0.5 - phys.position.y) * 3;
    } else {
      // Física de péndulo
      const dx = phys.position.x;
      const dy = phys.position.y - phys.anchorY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Fuerzas: gravedad + tensión del cordón
      const tension = (distance - phys.ropeLength) * 0.05;
      const angle = Math.atan2(dx, -dy);
      
      phys.velocity.x -= Math.sin(angle) * tension;
      phys.velocity.y -= Math.cos(angle) * tension;
      phys.velocity.y -= phys.gravityStrength; // Gravedad
      
      // Fricción del aire
      phys.velocity.x *= phys.damping;
      phys.velocity.y *= phys.damping;
      
      // Actualizar posición
      phys.position.x += phys.velocity.x * delta * 10;
      phys.position.y += phys.velocity.y * delta * 10;
      
      // Restricción del cordón (no puede ser más largo)
      const currentDist = Math.sqrt(
        phys.position.x * phys.position.x +
        (phys.position.y - phys.anchorY) * (phys.position.y - phys.anchorY)
      );
      
      if (currentDist > phys.ropeLength) {
        const ratio = phys.ropeLength / currentDist;
        phys.position.x *= ratio;
        phys.position.y = phys.anchorY + (phys.position.y - phys.anchorY) * ratio;
      }
    }
    
    // Aplicar posición a la tarjeta
    cardRef.current.position.x = phys.position.x;
    cardRef.current.position.y = phys.position.y;
    
    // Rotación basada en velocidad
    const targetRotY = phys.velocity.x * 0.2;
    const targetRotX = phys.velocity.y * 0.15;
    cardRef.current.rotation.y += (targetRotY - cardRef.current.rotation.y) * 0.1;
    cardRef.current.rotation.x += (targetRotX - cardRef.current.rotation.x) * 0.1;
    
    // Efecto hover
    const targetScale = hovered ? 1.05 : 1;
    cardRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
    
    // Rotación suave del grupo
    groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.05;
  });

  // Manejo de mouse
  const handlePointerDown = (e) => {
    e.stopPropagation();
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    setMousePos({ x, y });
    setIsDragging(true);
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useState(() => {
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging]);

  return (
    <group ref={groupRef}>
      {/* Cordón dinámico */}
      <DynamicRope cardRef={cardRef} anchorY={physics.current.anchorY} />
      
      {/* Tarjeta */}
      <group 
        ref={cardRef} 
        position={[0, -0.5, 0]}
        onPointerDown={handlePointerDown}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = 'grab';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        {/* Cuerpo principal */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2, 2.8, 0.12]} />
          <meshPhysicalMaterial 
            color="#1a1a2e"
            metalness={0.6}
            roughness={0.2}
            clearcoat={0.5}
            clearcoatRoughness={0.2}
          />
        </mesh>

        {/* Marco brillante */}
        <mesh position={[0, 0, 0.061]} castShadow>
          <boxGeometry args={[2.05, 2.85, 0.02]} />
          <meshPhysicalMaterial 
            color="#667eea"
            emissive="#667eea"
            emissiveIntensity={0.8}
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Clip superior */}
        <group position={[0, 1.5, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.08, 0.08, 0.3, 16]} />
            <meshStandardMaterial 
              color="#c0c0c0" 
              metalness={1} 
              roughness={0.2}
            />
          </mesh>
          <mesh position={[0, 0.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.12, 0.03, 8, 16]} />
            <meshStandardMaterial 
              color="#a0a0a0" 
              metalness={1} 
              roughness={0.3}
            />
          </mesh>
        </group>

        {/* Texto */}
        <Text position={[0, 0.9, 0.07]} fontSize={0.24} color="#667eea" anchorX="center" fontWeight="bold">
          Román Bolaños
        </Text>
        <Text position={[0, 0.5, 0.07]} fontSize={0.14} color="#ffffff" anchorX="center">
          Software Developer
        </Text>
        <Text position={[0, 0.15, 0.07]} fontSize={0.11} color="#d0d0d0" anchorX="center">
          Python • SQL • React
        </Text>
        <Text position={[0, -0.25, 0.07]} fontSize={0.09} color="#a0a0a0" anchorX="center" maxWidth={1.8}>
          Universidad Surcolombiana
        </Text>
        <Text position={[0, -0.55, 0.07]} fontSize={0.10} color="#764ba2" anchorX="center">
          Graduación Mayo 2025
        </Text>
        <Text position={[0, -0.85, 0.07]} fontSize={0.12} color="#667eea" anchorX="center">
          Neiva, Colombia 🇨🇴
        </Text>

        {/* Líneas decorativas */}
        <mesh position={[0, 1.1, 0.07]}>
          <boxGeometry args={[1.4, 0.025, 0.01]} />
          <meshStandardMaterial color="#667eea" emissive="#667eea" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[0, -1.2, 0.07]}>
          <boxGeometry args={[1.4, 0.025, 0.01]} />
          <meshStandardMaterial color="#764ba2" emissive="#764ba2" emissiveIntensity={0.8} />
        </mesh>
        
        {/* Detalles en esquinas */}
        {[[-0.9, 1.3], [0.9, 1.3], [-0.9, -1.3], [0.9, -1.3]].map((pos, i) => (
          <mesh key={i} position={[pos[0], pos[1], 0.07]}>
            <circleGeometry args={[0.04, 16]} />
            <meshStandardMaterial color="#667eea" emissive="#667eea" emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

// Cordón dinámico
function DynamicRope({ cardRef, anchorY }) {
  const ropeRef = useRef();
  
  useFrame(() => {
    if (!ropeRef.current || !cardRef.current) return;
    
    const anchorTop = new THREE.Vector3(0, anchorY, 0);
    const cardTop = new THREE.Vector3(
      cardRef.current.position.x,
      cardRef.current.position.y + 1.65,
      cardRef.current.position.z
    );
    
    // Curva catenaria
    const points = [];
    const segments = 30;
    
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const catenary = Math.cosh(((t - 0.5) * 4)) - 1;
      const x = THREE.MathUtils.lerp(anchorTop.x, cardTop.x, t);
      const y = THREE.MathUtils.lerp(anchorTop.y, cardTop.y, t) - catenary * 0.15;
      const z = THREE.MathUtils.lerp(anchorTop.z, cardTop.z, t);
      
      points.push(new THREE.Vector3(x, y, z));
    }
    
    const curve = new THREE.CatmullRomCurve3(points);
    const curvePoints = curve.getPoints(50);
    
    ropeRef.current.geometry.setFromPoints(curvePoints);
  });
  
  return (
    <>
      <line ref={ropeRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#667eea" linewidth={4} />
      </line>
      
      <mesh position={[0, anchorY, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.1, 16]} />
        <meshStandardMaterial color="#888888" metalness={1} roughness={0.3} />
      </mesh>
    </>
  );
}

function CardWithLanyard() {
  const cardRef = useRef();
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  // Rotación suave automática
  useFrame((state) => {
    if (cardRef.current && groupRef.current) {
      const time = state.clock.elapsedTime;
      
      // Oscilación suave del péndulo
      cardRef.current.position.x = Math.sin(time * 0.5) * 0.3;
      cardRef.current.position.y = -0.5 + Math.cos(time * 0.5) * 0.1;
      
      // Rotación natural
      cardRef.current.rotation.y = Math.sin(time * 0.4) * 0.15;
      cardRef.current.rotation.x = Math.cos(time * 0.3) * 0.08;
      groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.05;
      
      // Efecto hover
      const targetScale = hovered ? 1.08 : 1;
      cardRef.current.scale.x += (targetScale - cardRef.current.scale.x) * 0.1;
      cardRef.current.scale.y += (targetScale - cardRef.current.scale.y) * 0.1;
      cardRef.current.scale.z += (targetScale - cardRef.current.scale.z) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cordón simple */}
      <SimpleRope cardRef={cardRef} />
      
      {/* Tarjeta */}
      <group 
        ref={cardRef} 
        position={[0, -0.5, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Cuerpo principal */}
        <mesh castShadow>
          <boxGeometry args={[2, 2.8, 0.12]} />
          <meshPhysicalMaterial 
            color="#1a1a2e"
            metalness={0.6}
            roughness={0.2}
            clearcoat={0.5}
            clearcoatRoughness={0.2}
          />
        </mesh>

        {/* Marco brillante */}
        <mesh position={[0, 0, 0.061]}>
          <boxGeometry args={[2.05, 2.85, 0.02]} />
          <meshPhysicalMaterial 
            color="#667eea"
            emissive="#667eea"
            emissiveIntensity={0.8}
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Clip superior mejorado */}
        <group position={[0, 1.5, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.08, 0.08, 0.3, 16]} />
            <meshStandardMaterial 
              color="#c0c0c0" 
              metalness={1} 
              roughness={0.2}
            />
          </mesh>
          <mesh position={[0, 0.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.12, 0.03, 8, 16]} />
            <meshStandardMaterial 
              color="#a0a0a0" 
              metalness={1} 
              roughness={0.3}
            />
          </mesh>
        </group>

        {/* Contenido de texto */}
        <Text
          position={[0, 0.9, 0.07]}
          fontSize={0.24}
          color="#667eea"
          anchorX="center"
          fontWeight="bold"
        >
          Román Bolaños
        </Text>

        <Text
          position={[0, 0.5, 0.07]}
          fontSize={0.14}
          color="#ffffff"
          anchorX="center"
        >
          Software Developer
        </Text>

        <Text
          position={[0, 0.15, 0.07]}
          fontSize={0.11}
          color="#d0d0d0"
          anchorX="center"
        >
          Python • SQL • React
        </Text>

        <Text
          position={[0, -0.25, 0.07]}
          fontSize={0.09}
          color="#a0a0a0"
          anchorX="center"
          maxWidth={1.8}
        >
          Universidad Surcolombiana
        </Text>

        <Text
          position={[0, -0.55, 0.07]}
          fontSize={0.10}
          color="#764ba2"
          anchorX="center"
        >
          Graduación Mayo 2025
        </Text>

        <Text
          position={[0, -0.85, 0.07]}
          fontSize={0.12}
          color="#667eea"
          anchorX="center"
        >
          Neiva, Colombia 🇨🇴
        </Text>

        {/* Líneas decorativas */}
        <mesh position={[0, 1.1, 0.07]}>
          <boxGeometry args={[1.4, 0.025, 0.01]} />
          <meshStandardMaterial 
            color="#667eea" 
            emissive="#667eea" 
            emissiveIntensity={0.8}
          />
        </mesh>

        <mesh position={[0, -1.2, 0.07]}>
          <boxGeometry args={[1.4, 0.025, 0.01]} />
          <meshStandardMaterial 
            color="#764ba2" 
            emissive="#764ba2" 
            emissiveIntensity={0.8}
          />
        </mesh>
        
        {/* Detalles en esquinas */}
        {[[-0.9, 1.3], [0.9, 1.3], [-0.9, -1.3], [0.9, -1.3]].map((pos, i) => (
          <mesh key={i} position={[pos[0], pos[1], 0.07]}>
            <circleGeometry args={[0.04, 16]} />
            <meshStandardMaterial 
              color="#667eea" 
              emissive="#667eea" 
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

// Cordón simple
function SimpleRope({ cardRef }) {
  const ropeRef = useRef();
  
  useFrame(() => {
    if (ropeRef.current && cardRef.current) {
      const start = new THREE.Vector3(0, 2, 0);
      const end = new THREE.Vector3(
        cardRef.current.position.x,
        cardRef.current.position.y + 1.65,
        cardRef.current.position.z
      );
      
      const mid1 = new THREE.Vector3(start.x, start.y - 0.5, start.z);
      const mid2 = new THREE.Vector3(end.x, end.y + 0.5, end.z);
      
      const curve = new THREE.CatmullRomCurve3([start, mid1, mid2, end]);
      const points = curve.getPoints(50);
      ropeRef.current.geometry.setFromPoints(points);
    }
  });
  
  return (
    <>
      <line ref={ropeRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#667eea" linewidth={3} />
      </line>
      
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.1, 16]} />
        <meshStandardMaterial color="#888888" metalness={1} roughness={0.3} />
      </mesh>
    </>
  );
}