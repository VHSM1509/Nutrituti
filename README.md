Nutrituti - Plataforma de Gestión para Nutriólogos 🍎
📝 Descripción del Proyecto
Nutrituti es una aplicación web diseñada para facilitar la gestión de pacientes y planes de alimentación por parte de profesionales de la nutrición. La plataforma permite a los nutriólogos llevar un registro detallado del historial de sus pacientes, crear y asignar menús personalizados, y monitorear su progreso.

A su vez, los pacientes pueden acceder a su información, consultar su menú actual y descargar sus planes de alimentación en formato PDF, creando un canal de comunicación directo y eficiente.

✨ Características Principales
Para el Nutriólogo (Rol Administrador)
🔐 Autenticación Segura: Acceso protegido a la plataforma.

👤 Gestión de Pacientes: Crear, editar y consultar la información personal y el historial clínico de cada paciente.

📈 Seguimiento de Progreso: Registrar mediciones como peso, altura, porcentaje de grasa, etc.

🍽️ Creador de Menús: Diseñar planes de alimentación personalizados para cada paciente.

🔄 Asignación de Menús: Vincular planes de alimentación a pacientes específicos.

Para el Paciente (Rol Usuario)
🔐 Acceso Personal: Ingreso con usuario y contraseña para ver su información privada.

📄 Visualización de Historial: Consultar su propio progreso y datos registrados por el nutriólogo.

🥗 Consulta de Menú Actual: Ver el plan de alimentación activo asignado.

📥 Descarga de PDF: Exportar y guardar el menú en formato PDF para fácil acceso.

🛠️ Tecnologías Utilizadas (Stack)
Este proyecto está construido con un enfoque en tecnologías de código abierto, robustas y escalables.

Frontend:

React.js: Para construir una interfaz de usuario moderna, rápida y reactiva.

TailwindCSS: Para un diseño estilizado y completamente responsivo (mobile-first).

Backend (API):

Node.js con Express: Para un servidor ligero, rápido y flexible que maneja toda la lógica de negocio.

Base de Datos:

PostgreSQL: Un sistema de base de datos relacional potente y seguro, ideal para manejar datos sensibles de salud.

Generación de PDF:

jsPDF (en el prototipo frontend) / pdfkit o Puppeteer (en el backend final): Para la creación dinámica de documentos PDF.

📁 Estructura del Proyecto

/

├── backend/              # API con Node.js + Express

│   ├── src/

│   └── server.js         # Lógica del servidor y rutas API

│

├── database/

│   └── schema.sql        # Script de creación de la base de datos PostgreSQL

│

└── index.html            # Prototipo funcional inicial (Frontend con React vía CDN)

└── README.md             # Este archivo

🚀 Cómo Empezar (Próximamente)
Esta sección detallará los pasos para configurar y ejecutar el proyecto en un entorno de desarrollo local.

Clonar el repositorio:

git clone [https://github.com/VHSM1509/Nutrituti.git](https://github.com/VHSM1509/Nutrituti.git)
cd Nutrituti

Configurar la Base de Datos:

Instalar PostgreSQL.

Crear la base de datos y ejecutar el script database/schema.sql.

Configurar el Backend:

Navegar a la carpeta backend.

Instalar dependencias: npm install.

Configurar variables de entorno (conexión a la DB, secretos JWT).

Iniciar el servidor: npm start.

Ejecutar el Frontend:

(Actualmente se ejecuta abriendo index.html, próximamente se migrará a un proyecto de React con Vite o Create React App).

🔮 Futuras Mejoras

[ ] Migrar el frontend a una estructura completa de React con Vite.

[ ] Implementar un sistema de autenticación completo con JWT (JSON Web Tokens).

[ ] Añadir gráficas para visualizar el progreso del paciente.

[ ] Módulo de subida de archivos (estudios de laboratorio, etc.).

[ ] Notificaciones para pacientes y nutriólogos.
