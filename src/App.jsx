import './App.css'

function App() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Roman_Bolanos.pdf';
    link.download = 'CV_Roman_Bolanos_2025.pdf';
    link.click();
  };

  return (
    <div className="portfolio">
      <header className="header">
        <nav>
          <h1>Román Bolaños</h1>
          <div className="nav-links">
            <a href="#about">Sobre mí</a>
            <a href="#services">Servicios</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto</a>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <img src="/foto-perfil.png" alt="Román Bolaños" className="hero-photo" />
          <div className="hero-text">
            <span className="hero-badge">Available for remote work • 10-20 hrs/week</span>
            <h1>Data Analyst & Software Developer</h1>
            <p className="hero-subtitle">
              <span style={{fontSize: '0.9em', color: '#888'}}>
                Ayudo a empresas a optimizar procesos con Excel, Python y automatizaciones IA
              </span>
            </p>
            <div className="hero-value">
              <div className="value-item">
                <strong>Ahorra tiempo</strong>
                <p>Automatiza tareas repetitivas</p>
              </div>
              <div className="value-item">
                <strong>Toma decisiones</strong>
                <p>Con datos organizados y claros</p>
              </div>
              <div className="value-item">
                <strong>Respuesta rápida</strong>
                <p>Menos de 24 horas</p>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Hablemos de tu proyecto</a>
              <button onClick={downloadCV} className="btn-secondary">
                <svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>download-cloud</title> <path d="M0 16q0 2.912 1.824 5.088t4.576 2.752q0.032 0 0.032-0.032v-0.064t0.032-0.032q0.544-1.344 1.344-2.176t2.208-1.184v-2.336q0-2.496 1.728-4.256t4.256-1.76 4.256 1.76 1.76 4.256v2.336q1.376 0.384 2.176 1.216t1.344 2.144l0.096 0.288h0.384q2.464 0 4.224-1.76t1.76-4.224v-2.016q0-2.464-1.76-4.224t-4.224-1.76q-0.096 0-0.32 0.032 0.32-1.152 0.32-2.048 0-3.296-2.368-5.632t-5.632-2.368q-2.88 0-5.056 1.824t-2.784 4.544q-1.152-0.352-2.176-0.352-3.296 0-5.664 2.336t-2.336 5.664v1.984zM10.016 25.824q-0.096 0.928 0.576 1.6l4 4q0.576 0.576 1.408 0.576t1.408-0.576l4-4q0.672-0.672 0.608-1.6-0.064-0.32-0.16-0.576-0.224-0.576-0.736-0.896t-1.12-0.352h-1.984v-5.984q0-0.832-0.608-1.408t-1.408-0.608-1.408 0.608-0.576 1.408v5.984h-2.016q-0.608 0-1.12 0.352t-0.736 0.896q-0.096 0.288-0.128 0.576z"></path> </g></svg> Descargar CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ PUEDO HACER POR TI */}
      <section id="services" className="services">
        <h2>¿En qué puedo ayudarte?</h2>
        <p className="section-subtitle">Servicios disponibles para trabajo remoto</p>
        <div className="services-grid">
          
          <div className="service-card featured">
            <div className="service-icon">
              <svg viewBox="0 0 32 32" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="excelGradientA" x1="4.494" y1="-2092.086" x2="13.832" y2="-2075.914" gradientTransform="translate(0 2100)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#18884f"></stop>
                    <stop offset="0.5" stopColor="#117e43"></stop>
                    <stop offset="1" stopColor="#0b6631"></stop>
                  </linearGradient>
                </defs>
                <path d="M19.581,15.35,8.512,13.4V27.809A1.192,1.192,0,0,0,9.705,29h19.1A1.192,1.192,0,0,0,30,27.809h0V22.5Z" fill="#185c37"></path>
                <path d="M19.581,3H9.705A1.192,1.192,0,0,0,8.512,4.191h0V9.5L19.581,16l5.861,1.95L30,16V9.5Z" fill="#21a366"></path>
                <path d="M8.512,9.5H19.581V16H8.512Z" fill="#107c41"></path>
                <path d="M16.434,8.2H8.512V24.45h7.922a1.2,1.2,0,0,0,1.194-1.191V9.391A1.2,1.2,0,0,0,16.434,8.2Z" opacity="0.1"></path>
                <path d="M15.783,8.85H8.512V25.1h7.271a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.783,8.85Z" opacity="0.2"></path>
                <path d="M15.783,8.85H8.512V23.8h7.271a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.783,8.85Z" opacity="0.2"></path>
                <path d="M15.132,8.85H8.512V23.8h6.62a1.2,1.2,0,0,0,1.194-1.191V10.041A1.2,1.2,0,0,0,15.132,8.85Z" opacity="0.2"></path>
                <path d="M3.194,8.85H15.132a1.193,1.193,0,0,1,1.194,1.191V21.959a1.193,1.193,0,0,1-1.194,1.191H3.194A1.192,1.192,0,0,1,2,21.959V10.041A1.192,1.192,0,0,1,3.194,8.85Z" fill="url(#excelGradientA)"></path>
                <path d="M5.7,19.873l2.511-3.884-2.3-3.862H7.758L9.013,14.6c.116.234.2.408.238.524h.017c.082-.188.169-.369.26-.546l1.342-2.447h1.7l-2.359,3.84,2.419,3.905H10.821l-1.45-2.711A2.355,2.355,0,0,1,9.2,16.8H9.176a1.688,1.688,0,0,1-.168.351L7.515,19.873Z" fill="#fff"></path>
                <path d="M28.806,3H19.581V9.5H30V4.191A1.192,1.192,0,0,0,28.806,3Z" fill="#33c481"></path>
                <path d="M19.581,16H30v6.5H19.581Z" fill="#107c41"></path>
              </svg>
            </div>
            <h3>Excel & Análisis de Datos</h3>
            <p>
              Organizo, analizo y visualizo tus datos en Excel para que puedas 
              tomar decisiones informadas sin perder tiempo en tareas manuales.
            </p>
            <div className="service-examples">
              <strong>Ejemplos de lo que puedo hacer:</strong>
              <ul>
                <li>✓ Dashboards visuales fáciles de entender</li>
                <li>✓ Limpieza y organización de bases de datos</li>
                <li>✓ Reportes automáticos que se actualizan solos</li>
                <li>✓ Análisis de ventas, inventarios o finanzas</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 256 256" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="autoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#667eea"/>
                    <stop offset="100%" stopColor="#764ba2"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M144.282 145.51A32.19 32.19 0 0 1 150 145c4.032 0 7.89.746 11.444 2.107L175.584 127l.54.306A31.88 31.88 0 0 1 168 106c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32-3.672 0-7.2-.619-10.485-1.757l-14.31 21.038A31.863 31.863 0 0 1 182 177c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-9.767 4.376-18.512 11.274-24.382l-20.764-41.28A32.14 32.14 0 0 1 102 112a32.05 32.05 0 0 1-8.16-1.05l-14.716 25.93C85.21 142.705 89 150.91 89 160c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32 2.655 0 5.234.323 7.7.932l14.809-26.17C73.638 96.963 70 88.907 70 80c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32 0 9.563-4.195 18.146-10.844 24.01l21.126 41.5zM200 122c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM57 176c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zm45-80c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zm48 97c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16z" 
                  fill="url(#autoGradient)"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <h3>Automatización de Procesos</h3>
            <p>
              Conecto tus herramientas (Google Sheets, WhatsApp, email) para 
              que trabajen solas mientras tú te enfocas en lo importante.
            </p>
            <div className="service-examples">
              <strong>Ejemplos de lo que puedo hacer:</strong>
              <ul>
                <li>✓ Chatbot que responde preguntas frecuentes 24/7</li>
                <li>✓ Formularios que guardan info automáticamente</li>
                <li>✓ Recordatorios y notificaciones automáticas</li>
                <li>✓ Integración entre tus herramientas favoritas</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 256 255" width="48" height="48">
                <defs>
                  <linearGradient id="pyBlue" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#387EB8" />
                    <stop offset="100%" stopColor="#366994" />
                  </linearGradient>
                  <linearGradient id="pyYellow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFE873" />
                    <stop offset="100%" stopColor="#FFD43B" />
                  </linearGradient>
                </defs>
                <path fill="url(#pyBlue)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"/>
                <path fill="url(#pyYellow)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"/>
              </svg>
            </div>
            <h3>Desarrollo de Software</h3>
            <p>
              Creo soluciones personalizadas cuando necesitas algo específico 
              que las herramientas comunes no pueden hacer.
            </p>
            <div className="service-examples">
              <strong>Ejemplos de lo que puedo hacer:</strong>
              <ul>
                <li>✓ Scripts para procesar datos automáticamente</li>
                <li>✓ Sistemas de gestión (inventario)</li>
                <li>✓ Conexión con bases de datos MySQL</li>
                <li>✓ Sitios web</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="services-note">
          <p>💡 <strong>¿No estás seguro de qué necesitas?</strong> Cuéntame tu problema y te propongo la mejor solución</p>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="about" className="about">
        <h2>Sobre mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              Soy Román, estudiante de último semestre en Desarrollo de Software, 
              y me especializo en hacer la vida más fácil a pequeñas y medianas empresas.
            </p>
            <p>
              No soy un experto con 10 años de experiencia, pero <strong>sí soy bueno resolviendo 
              problemas prácticos</strong> y aprendiendo rápido. Mis clientes valoran que:
            </p>
            <div className="about-benefits">
              <div className="benefit">
                <span>✓</span>
                <div>
                  <strong>Respondo rápido</strong>
                  <p>Menos de 24 horas, casi siempre el mismo día</p>
                </div>
              </div>
              <div className="benefit">
                <span>✓</span>
                <div>
                  <strong>Soy accesible</strong>
                  <p>Tarifas justas para pequeñas empresas y emprendedores</p>
                </div>
              </div>
              <div className="benefit">
                <span>✓</span>
                <div>
                  <strong>Trabajo remoto 100%</strong>
                  <p>Me adapto a tu zona horaria</p>
                </div>
              </div>
            </div>
            <p>
              Cuento con <strong>inglés nivel B1</strong>, lo que me permite trabajar con 
              empresas internacionales y entender documentación técnica sin problema.
            </p>
            <div className="about-cta">
              <p><strong>¿Tienes un proyecto pequeño o una tarea que te quita mucho tiempo?</strong></p>
              <a href="#contact" className="btn-primary">Cuéntame y vemos cómo ayudarte</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="projects" className="projects">
        <h2>Proyectos que he realizado</h2>
        <p className="section-subtitle">Algunos ejemplos de mi trabajo</p>
        <div className="project-grid">
          
          <div className="project-card featured">
            <div className="project-header">
              <span className="project-badge">⭐ Primer proyecto </span>
            </div>
            <h3>Sistema de Automatización Inteligente</h3>
            <p>
              Implementé un sistema que responde consultas automáticamente, 
              agenda citas y guarda pedidos en Google Sheets, eliminando 
              la necesidad de supervisión constante y ahorrando 15+ horas semanales.
            </p>
            <div className="project-tags">
              <span>N8N</span>
              <span>Make</span>
              <span>Google Sheets</span>
              <span>Chatbot</span>
            </div>
            <div className="project-impact">
              <strong>Impacto:</strong> 70% menos tiempo en gestión manual
            </div>
          </div>

          <div className="project-card">
            <h3>Sistema de Inventario con Python</h3>
            <p>
              Sistema completo con usuarios, roles (Admin/Cajero), gestión 
              de productos y reportes. Desarrollado con buenas prácticas 
              y arquitectura modular.
            </p>
            <div className="project-tags">
              <span>Python</span>
              <span>SQLite</span>
              <span>Tkinter</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/RomanBolanos-Git/sistema-inventario-profesional" target="_blank" rel="noopener noreferrer">
                Ver código en GitHub →
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>Análisis de Datos en Excel</h3>
            <p>
              Dashboards interactivos con tablas dinámicas, gráficos automatizados 
              y limpieza de datos. Reportes que se actualizan automáticamente 
              al agregar nueva información.
            </p>
            <div className="project-tags">
              <span>Excel</span>
              <span>Fórmulas</span>
              <span>Dashboards</span>
            </div>
          </div>

        </div>
      </section>

      {/* HABILIDADES */}
      <section id="skills" className="skills-compact">
        <h2>Tecnologías que manejo</h2>
        <div className="tech-tags">
          <span className="tech-tag primary">Excel Avanzado</span>
          <span className="tech-tag primary">Python</span>
          <span className="tech-tag primary">Lenguajes Frontend</span>
          <span className="tech-tag primary">SQL/MySQL</span>
          <span className="tech-tag">N8N</span>
          <span className="tech-tag">Make</span>
          <span className="tech-tag">Google Sheets</span>
          <span className="tech-tag">React</span>
          <span className="tech-tag">Git/GitHub</span>
          <span className="tech-tag">.NET</span>
          <span className="tech-tag">Inglés B1</span>
        </div>
      </section>

      {/* EDUCACIÓN */}
      <section id="education" className="education-compact">
        <h2>Formación</h2>
        <div className="education-grid">
          <div className="edu-item">
            <strong>Tecnología en Desarrollo de Software</strong>
            <p>Universidad Surcolombiana • Neiva - Huila • Colombia • Graduación Mayo 2026</p>
          </div>
          <div className="edu-item">
            <strong>ADSO - Análisis y Desarrollo de Software</strong>
            <p>SENA • CIES • Regional Neiva - Huila • 2025</p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="contact">
        <h2>¿Hablamos de tu proyecto?</h2>
        <p>Te respondo en menos de 24 horas • Disponible para empezar ya</p>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">
                <svg viewBox="0 0 32 32" width="40" height="40">
                  <svg viewBox="0 0 32 32" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z" fill="white"></path> <path d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z" fill="#EA4335"></path> <path d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z" fill="#FBBC05"></path> <path d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z" fill="#34A853"></path> <path d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z" fill="#C5221F"></path> <path d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z" fill="#C5221F"></path> <path d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z" fill="#C5221F"></path> <path d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z" fill="#4285F4"></path> </g></svg>
                </svg>
              </span>
              <div>
                <strong>Gmail</strong>
                <a href="mailto:romanbolanos42@gmail.com">romanbolanos42@gmail.com</a>
              </div>
            </div>
            <div className="contact-item whatsapp-item">
              <span className="contact-icon">
                <svg viewBox="0 0 32 32" width="40" height="40">
                  <circle cx="16" cy="16" r="14" fill="#25D366"/>
                  <svg fill="#ffffff" viewBox="0 0 32 32" version="1.1"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>whatsapp</title>                   <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path> </g></svg>
                </svg>
              </span>
              <div>
                <strong>WhatsApp</strong>
                <a href="https://wa.me/573218943533?text=Hola%20Román,%20vi%20tu%20portfolio%20y%20me%20gustaría%20hablar%20sobre%20un%20proyecto" target="_blank" rel="noopener noreferrer">
                  +57 321 894 3533
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <svg viewBox="0 0 32 32" width="40" height="40"></svg>
                <svg viewBox="0 0 32 32" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#ffffffclip0_901_1252)"> <path d="M31 16.001C31 24.285 24.284 31.001 16 31.001C7.716 31.001 1 24.285 1 16.001M31 16.001C31 7.717 24.284 1.001 16 1.001C7.716 1.001 1 7.717 1 16.001M31 16.001H1M11.834 1.5879C9.397 5.8329 8.004 10.7549 8.004 16.0009C8.004 21.2469 9.396 26.1689 11.834 30.4139M20.1699 30.4121C22.6079 26.1681 23.9999 21.2471 23.9999 16.0011C23.9999 10.7571 22.6069 5.8381 20.1719 1.5901M27.6543 25.4395C24.0883 23.8745 20.1473 23.0045 16.0043 23.0045C11.8573 23.0045 7.9143 23.8765 4.3453 25.4435M4.3486 6.5635C7.9146 8.1315 11.8576 9.0015 16.0036 9.0015C20.1486 9.0015 24.0896 8.1305 27.6586 6.5635M15.999 1V31" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_901_1252"> <rect width="32" height="32" fill="white"></rect> </clipPath> </defs> </g></svg>
              </span>
              <div>
                <strong>Disponibilidad</strong>
                <p>10-20 hrs/semana • 100% Remoto</p>
              </div>
            </div>
          </div>

          <div className="contact-social">
            <a href="https://github.com/RomanBolanos-Git" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/román-bolaños" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <button onClick={downloadCV} className="social-link download-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Descargar CV
            </button>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 Román Bolaños • Analista de Datos & Desarrollador de Software</p>
        <p>Disponible para trabajo remoto • Neiva, Colombia</p>
      </footer>
    </div>
  )
}

export default App