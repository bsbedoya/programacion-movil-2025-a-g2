# Git Cheat Sheet – 50 Git Commands You Should Know

## ¿Qué es un sistema de control de versiones distribuido?

Un sistema de control de versiones distribuido te ayuda a realizar un seguimiento de los cambios realizados en los archivos de tu proyecto.  
Este historial vive en tu máquina local y te permite revertir a una versión anterior del proyecto en caso de que algo salga mal.

Git facilita la colaboración. Cada miembro del equipo puede tener una copia completa del repositorio en su máquina local.  
Gracias a servidores externos como GitHub, GitLab o Bitbucket, todos pueden sincronizar sus cambios en un único lugar centralizado.

## Configuración inicial de Git

```bash
git config -l                                 # Ver la configuración actual de Git
git config --global user.name "Tu Nombre"     # Configurar nombre de usuario
git config --global user.email "tu@email.com" # Configurar correo electrónico
git config --global credential.helper cache   # Guardar credenciales temporalmente

## Inicializar repositorio

git init  # Inicializar repositorio Git local

## Agregar archivos al área de preparación (staging)

git add filename               # Agregar archivo específico
git add .                      # Agregar todos los archivos del proyecto
git add fil*                   # Agregar archivos que empiecen con "fil"
git add -p                     # Elegir interactivamente qué cambios añadir

## Ver el estado del repositorio

git status  # Ver estado de archivos (modificados, preparados, no rastreados)

## Realizar commits

git commit                     # Abrir editor para mensaje de commit
git commit -m "Mensaje"        # Commit con mensaje directamente
git commit -a -m "Mensaje"     # Agregar y commitear archivos rastreados
git commit --amend             # Modificar último commit (sin haberlo subido)

## Historial y diferencias

git log                        # Ver historial de commits
git log -p                     # Historial con diferencias por commit
git log --stat                 # Ver estadísticas por commit
git log --graph --oneline      # Ver historial en forma de gráfico
git log --graph --oneline --all # Ver historial de todos los branches
git show commit_id             # Ver información de un commit específico
git diff                       # Ver cambios no preparados
git diff nombre_archivo.py     # Ver diferencias en un archivo
git diff --staged              # Ver cambios preparados

## Manejo de archivos

git rm archivo                 # Eliminar archivo rastreado
git mv archivo1 archivo2       # Renombrar archivo

## Revertir cambios

git checkout archivo           # Revertir cambios no preparados
git reset HEAD archivo         # Deshacer cambios preparados
git reset HEAD -p              # Revertir cambios preparados de forma selectiva
git revert HEAD                # Revertir último commit
git revert commit_id           # Revertir un commit anterior

# Ignorar archivos

Crear un archivo .gitignore en el directorio raíz y listar allí los archivos/patrones que Git debe ignorar.

## Ramas (branches)

git branch nombre_rama           # Crear nueva rama
git checkout nombre_rama         # Cambiar a una rama existente
git branch                       # Listar ramas locales
git checkout -b nombre_rama      # Crear y cambiar a una nueva rama
git branch -d nombre_rama        # Eliminar una rama
git merge nombre_rama            # Fusionar rama a la rama actual

## Repositorios remotos

git remote add origin https://url_del_repo  # Agregar repositorio remoto
git remote -v                               # Ver URLs de repos remotos
git remote show origin                      # Ver info del repositorio remoto

## Sincronización con repositorio remoto

git push                                   # Subir cambios al remoto
git pull                                   # Obtener y fusionar cambios del remoto
git fetch                                  # Descargar cambios sin fusionar
git remote update                          # Actualizar referencias remotas
git merge origin/main                      # Fusionar cambios remotos a rama local
git log origin/main                        # Ver historial de la rama remota
git branch -r                              # Ver ramas remotas rastreadas

## Manejo de ramas remotas

git push -u origin nombre_rama             # Subir nueva rama y establecer upstream
git push --delete origin nombre_rama       # Eliminar rama remota

## Rebase

git rebase nombre_rama                     # Rebase de una rama
git rebase -i master                       # Rebase interactivo

# En el editor:

# p, pick     = usar el commit

# r, reword   = editar mensaje del commit

# e, edit     = pausar para editar el commit

# s, squash   = combinar commit con el anterior

# f, fixup    = combinar y descartar mensaje

# d, drop     = eliminar commit

## Fuerza de acciones

git push -f                                # Forzar push (uso con precaución)

## Conclusión

Este resumen incluye los 50 comandos de Git más usados. Son fundamentales para trabajar de manera eficiente con Git en entornos colaborativos y proyectos personales.
Recuerda siempre probar tus comandos en ramas seguras antes de ejecutarlos en entornos de producción.