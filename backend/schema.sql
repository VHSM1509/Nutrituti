-- Este script define la estructura inicial de la base de datos para el proyecto Nutri-App.
-- Se recomienda usar PostgreSQL por su robustez y seguridad para datos de salud.

-- Tabla para los usuarios (pacientes y nutriólogos)
-- El 'role' nos permite diferenciar los permisos de cada uno.
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('nutriologo', 'paciente')), -- 'nutriologo' o 'paciente'
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabla para los datos de los pacientes
-- Se vincula con la tabla de usuarios a través de 'usuario_id'.
CREATE TABLE pacientes (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER UNIQUE NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    fecha_nacimiento DATE,
    telefono VARCHAR(20),
    direccion TEXT,
    datos_adicionales JSONB -- Campo flexible para guardar historial, alergias, etc.
);

-- Tabla para el historial clínico y mediciones del paciente
CREATE TABLE historial_clinico (
    id SERIAL PRIMARY KEY,
    paciente_id INTEGER NOT NULL REFERENCES pacientes(id) ON DELETE CASCADE,
    fecha_consulta DATE NOT NULL,
    peso_kg DECIMAL(5, 2),
    altura_cm DECIMAL(5, 2),
    medida_cintura_cm DECIMAL(5, 2),
    medida_cadera_cm DECIMAL(5, 2),
    porcentaje_grasa DECIMAL(4, 2),
    observaciones TEXT,
    creado_por INTEGER NOT NULL REFERENCES usuarios(id) -- ID del nutriólogo que hizo el registro
);

-- Tabla para los menús o planes de alimentación
-- El contenido del menú se guarda en formato JSONB para máxima flexibilidad.
-- Ejemplo de JSON: {"desayuno": ["..."], "almuerzo": ["..."], "cena": ["..."]}
CREATE TABLE menus (
    id SERIAL PRIMARY KEY,
    paciente_id INTEGER NOT NULL REFERENCES pacientes(id) ON DELETE CASCADE,
    nutriologo_id INTEGER NOT NULL REFERENCES usuarios(id),
    nombre_menu VARCHAR(150) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE,
    contenido JSONB NOT NULL, -- Aquí se guarda el detalle del menú
    activo BOOLEAN DEFAULT true, -- Para saber si es el menú actual del paciente
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Índices para mejorar el rendimiento de las búsquedas
CREATE INDEX idx_pacientes_usuario_id ON pacientes(usuario_id);
CREATE INDEX idx_historial_paciente_id ON historial_clinico(paciente_id);
CREATE INDEX idx_menus_paciente_id ON menus(paciente_id);

-- Insertar un usuario de ejemplo para el nutriólogo
INSERT INTO usuarios (nombre, email, password_hash, role)
VALUES ('Dra. Ana López', 'ana.lopez@nutri.com', 'hash_de_contraseña_segura', 'nutriologo');