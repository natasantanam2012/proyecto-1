# 🏥 MediMatch Chile - Plataforma de Reserva de Citas

MediMatch es una aplicación web moderna diseñada para conectar pacientes con especialistas médicos a lo largo de Chile. La plataforma permite realizar búsquedas inteligentes por especialidad, ciudad y fecha, ofreciendo una experiencia de usuario fluida y profesional.

## 🚀 Características Principales

* **Buscador Inteligente:** Filtros dinámicos por especialidad médica y ciudades de Chile.
* **Calendario Funcional:** Gestión de fechas integrada para la disponibilidad de consultas.
* **Diseño Premium:** Interfaz basada en *Plus Jakarta Sans* con estética médica limpia y adaptable (Responsive Design).
* **Arquitectura Desacoplada:** Datos gestionados a través de un archivo `data.json` para facilitar futuras integraciones con APIs.
* **Accesos Diferenciados:** Portales específicos para Pacientes (`mi-cuenta.html`) y Especialistas (`soy-medico.html`).

## 📁 Estructura del Proyecto

```text
├── README.md               # Documentación del proyecto
├── index.html              # Página principal y buscador
├── mi-cuenta.html          # Panel de gestión del paciente
├── soy-medico.html         # Portal de acceso para especialistas
└── assets                  # Recursos estáticos
    ├── css                 # Estilos personalizados
    ├── img                 # Imágenes y logotipos
    └── js
        ├── data.json       # Base de datos simulada de especialistas
        └── main.js         # Lógica de renderizado y filtros de búsqueda
