# 📚 StudyAtHome - Aplicación de Organización de Estudios

StudyAtHome es una aplicación móvil desarrollada con **Ionic + Angular**, pensada para ayudar a estudiantes a organizar sus evaluaciones, tareas y asignaturas.  
Su objetivo es facilitar la planificación y apoyar especialmente a niños y jóvenes que necesitan recordar fechas importantes o reforzar hábitos de estudio.

---

## 🚀 Tecnologías Utilizadas

| Tecnología | Uso |
|-----------|-----|
| **Ionic Framework** | Componentes UI y estructura de aplicación móvil |
| **Angular** | Lógica, enrutamiento y vinculación de datos (interpolación) |
| **LocalStorage** | Almacenamiento permanente de usuario y datos |
| **Angular Material** | Datepicker para seleccionar fechas de evaluaciones |
| **ngx-lottie** + **lottie-web** | Animaciones en formato JSON para interfaz atractiva |

---

## 🧭 Navegación (Pages Incluidas)

| Página | Descripción |
|--------|-------------|
| **Login** | Inicio de sesión y carga de usuario |
| **Menú principal** | Pantalla central con navegación hacia el resto |
| **Calendario** | Agregar recordatorios con fecha, asignatura y descripción |
| **Asignaturas** | Agregar o eliminar asignaturas personalizadas |
| **Resumen** | Muestra usuario + asignaturas + recordatorios almacenados |

---

## ✅ Funcionalidades Principales

- Guardar usuario y contraseña (de forma local).
- Registrar recordatorios con fecha y descripción.
- Administrar asignaturas personalizadas.
- Ver un resumen completo de tus datos guardados.
- Navegación fluida entre páginas con Angular Router.
- Interfaz visual con animaciones **Lottie** para mejorar la experiencia.

---

## 🏗 Instalación y Ejecución

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/studyathome.git

# Entrar al proyecto
cd studyathome

# Instalar dependencias
npm install

# Ejecutar en navegador
ionic serve
