/*
  Este archivo representa la estructura del servidor backend.
  No es ejecutable directamente en este entorno, pero sirve como una guía
  detallada de cómo construirías la API con Node.js, Express y PostgreSQL.

  Para ejecutarlo en un servidor real:
  1. Instala Node.js, npm y PostgreSQL.
  2. Ejecuta `npm init -y` y `npm install express pg cors jsonwebtoken bcrypt`.
  3. Adapta la configuración de la base de datos.
  4. Levanta el servidor con `node server.js`.
*/

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3001; // Puerto para la API

// --- Configuración ---
app.use(cors());
app.use(express.json()); // Middleware para parsear JSON

// Configuración de la base de datos (ajustar con tus credenciales)
const pool = new Pool({
  user: 'tu_usuario_db',
  host: 'localhost',
  database: 'nutri_app_db',
  password: 'tu_password_db',
  port: 5432,
});

const JWT_SECRET = 'tu_secreto_super_secreto_para_jwt';

// --- Middleware de Autenticación (Ejemplo) ---
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401); // No hay token

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Token inválido
    req.user = user;
    next();
  });
};

// --- Rutas de la API ---

// POST /api/login - Autenticar usuario y devolver token
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  // Lógica para buscar usuario en la DB y comparar contraseña con bcrypt
  // Si es válido, generar un token JWT
  // const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '8h' });
  // res.json({ token });
});

// GET /api/pacientes - Obtener lista de pacientes (solo para nutriólogo)
app.get('/api/pacientes', authenticateToken, async (req, res) => {
    if (req.user.role !== 'nutriologo') return res.sendStatus(403);
    // Lógica para consultar la base de datos y devolver todos los pacientes
});

// GET /api/pacientes/:id - Obtener datos de un paciente específico
app.get('/api/pacientes/:id', authenticateToken, async (req, res) => {
    // Lógica para verificar permisos y obtener datos del paciente, su historial y menús
});

// POST /api/pacientes - Crear un nuevo paciente
app.post('/api/pacientes', authenticateToken, async (req, res) => {
    if (req.user.role !== 'nutriologo') return res.sendStatus(403);
    // Lógica para crear un nuevo usuario y paciente en la base de datos
});

// POST /api/pacientes/:id/menus - Asignar un nuevo menú a un paciente
app.post('/api/pacientes/:id/menus', authenticateToken, async (req, res) => {
    if (req.user.role !== 'nutriologo') return res.sendStatus(403);
    // Lógica para guardar el nuevo menú en la base de datos
});

// GET /api/me/menu - Ruta para que un paciente obtenga su menú activo
app.get('/api/me/menu', authenticateToken, async (req, res) => {
    if (req.user.role !== 'paciente') return res.sendStatus(403);
    // Lógica para buscar el menú activo del paciente que está logueado (req.user.id)
});


// --- Iniciar Servidor ---
app.listen(port, () => {
  console.log(`Servidor API corriendo en http://localhost:${port}`);
});
