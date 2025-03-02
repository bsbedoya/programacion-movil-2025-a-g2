# 📌 🚀 Guía Básica de Git

| 🏷️ Sección | 📌 Comando | 📝 Descripción |
|------------|------------|---------------|
| **🛠️ Configuración Inicial** | `git config --global user.name "TuNombre"` | Configurar el nombre del usuario |
| | `git config --global user.email "tuemail@example.com"` | Configurar el correo del usuario |
| **📂 Inicializar un Repositorio** | `git init` | Crear un nuevo repositorio local |
| **🌎 Clonar un Repositorio** | `git clone https://github.com/usuario/repositorio.git` | Clonar un repositorio remoto |
| **📌 Estados Básicos en Git** | `git status` | Ver el estado actual de los archivos |
| | `git add archivo.txt` | Agregar un archivo al área de preparación |
| | `git add .` | Agregar todos los archivos modificados |
| **📜 Realizar un Commit** | `git commit -m "Descripción del cambio"` | Confirmar cambios con un mensaje descriptivo |
| **📤 Subir Cambios al Repositorio Remoto (Push)** | `git push origin main` | Subir cambios a la rama principal |
| | `git push --set-upstream origin nombre-rama` | Subir una nueva rama al remoto |
| **📥 Descargar Cambios del Repositorio (Pull)** | `git pull origin main` | Obtener cambios y fusionarlos automáticamente |
| **🌿 Manejo de Ramas** | `git branch` | Ver todas las ramas locales |
| | `git branch nombre-rama` | Crear una nueva rama |
| | `git checkout nombre-rama` | Cambiar a otra rama |
| | `git checkout -b nombre-rama` | Crear y cambiar a una nueva rama en un solo comando |
| **🔀 Fusionar Ramas** | `git checkout main` | Cambiar a la rama principal |
| | `git merge nombre-rama` | Fusionar cambios de otra rama |
| **🗑️ Eliminar Ramas** | `git branch -d nombre-rama` | Eliminar una rama local |
| | `git push origin --delete nombre-rama` | Eliminar una rama en el repositorio remoto |
| **🗑️ Eliminar Archivos** | `git rm archivo.txt` | Eliminar un archivo localmente |
| | `git commit -m "Archivo eliminado"` | Confirmar la eliminación del archivo |
| | `git push origin main` | Subir los cambios al repositorio remoto |
| | `git push origin --delete archivo.txt` | Eliminar un archivo en el repositorio remoto |
| **⚠️ Resolver Conflictos** | `git add archivo_resuelto.txt` | Marcar los archivos como resueltos |
| | `git commit -m "Conflictos resueltos"` | Crear un commit después de resolver conflictos |
| **📜 Ver el Historial de Cambios** | `git log --oneline --graph --all` | Ver el historial de commits en forma gráfica |

---
🚀 ¡Ahora estás listo para trabajar con Git! 🎉


