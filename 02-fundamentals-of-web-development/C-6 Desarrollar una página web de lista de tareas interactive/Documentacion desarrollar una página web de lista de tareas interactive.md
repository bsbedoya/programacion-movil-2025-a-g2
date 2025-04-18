# Documentación del Módulo 6: Desarrollar una Página Web de Lista de Tareas Interactiva

## Resumen del Módulo

Durante el sexto módulo del curso **"Fundamentos del Desarrollo Web"** de IBM, adquirí conocimientos esenciales sobre cómo desarrollar una **página web de lista de tareas interactiva**. Esta experiencia incluyó la creación y organización de archivos HTML, CSS y JavaScript, y la implementación de funcionalidades dinámicas mediante simulaciones prácticas.

El desarrollo se enfocó en seguir especificaciones reales del cliente y diseñar una interfaz intuitiva, visualmente coherente, funcional y adaptable a distintos dispositivos.

---

## Herramientas y Tecnologías Utilizadas

- **Visual Studio Code (VS Code)**: Entorno de desarrollo principal.
- **HTML5**: Para definir la estructura semántica del documento.
- **CSS3**: Para aplicar estilos visuales consistentes con la marca.
- **JavaScript (ES6)**: Para añadir lógica e interactividad en tiempo real.

---

## Estructura de la Página Web

### HTML: Estructura Semántica

Se utilizó una estructura básica basada en los siguientes elementos:

- `<!DOCTYPE html>` para definir el tipo de documento.
- `<head>` para incluir metadatos, enlaces a hojas de estilo y scripts.
- `<body>` para contener la interfaz visible.

#### Elementos clave:

- `<div>` contenedores principales.
- `<input type="text">` para ingresar tareas.
- `<button>` para agregar tareas manualmente.
- `<ul><li>` para listar tareas de forma dinámica.

#### Atributos empleados:

- `id`: Para elementos únicos manipulados por JavaScript.
- `class`: Para estilos reutilizables y organización semántica.

---

## CSS: Diseño y Estilización

Se siguieron lineamientos específicos de marca:

- **Fuentes**: `sans-serif` para una apariencia limpia y moderna.
- **Colores corporativos**:
  - Azul principal: `#0F62FE`
  - Contraste: `#BAE6FF`
  - Blanco de fondo: `#FFFFFF`
- **Estética visual**:
  - `border-radius` para bordes redondeados amigables.
  - Uso de `flexbox` para alinear los elementos horizontal y verticalmente.
  - `margin` y `padding` para definir espacios internos y externos adecuados.

### Ejemplo de estilo aplicado:

button {
  background-color: #0F62FE;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
}

---

## JavaScript: Lógica e Interactividad

Se implementaron event listeners para manejar entradas del usuario:

keypress para detectar "Enter".
onclick para botones.

Funcionalidades desarrolladas:
Añadir tareas:
Validación de entrada no vacía.
Creación dinámica de elementos <li> usando document.createElement.
Inserción con appendChild.

Marcar tareas completadas:
Cambios visuales con text-decoration: line-through.

Gestión de errores:
Mostrar mensajes cuando el campo esté vacío.

Fragmento representativo:
document.querySelector("#addTaskBtn").addEventListener("click", () => {
  const taskInput = document.querySelector("#taskInput");
  if (taskInput.value === "") {
    alert("Por favor, ingrese una tarea.");
  } else {
    const li = document.createElement("li");
    li.textContent = taskInput.value;
    li.addEventListener("click", () => li.style.textDecoration = "line-through");
    document.querySelector("#taskList").appendChild(li);
    taskInput.value = "";
  }
});

---

## Pruebas y Validación

Se realizaron pruebas funcionales y visuales para garantizar calidad:

Pruebas realizadas:
Funcionales:
Añadir tareas con botón y tecla Enter.
Marcar tareas como completadas.
Validación de campos vacíos.

Visuales:
Comprobación de colores según la guía de estilo.
Alineación y espaciado correcto de elementos.
Visualización responsive en distintos dispositivos.

Errores comunes identificados:

| Error                           | Solución                                       |
| ------------------------------- | ---------------------------------------------- |
| Llaves sin cerrar en JavaScript | Verificación con el formateador de VS Code.    |
| Ruta incorrecta al enlazar CSS  | Uso de rutas relativas correctas (./style.css) |

---

## Mejoras Futuras

Durante la práctica, se identificaron oportunidades de mejora y ampliación:

 Guardar tareas con localStorage para mantener datos entre sesiones.  
 Eliminar tareas individualmente con un botón adicional.  
 Filtrar tareas por estado (completadas vs pendientes).  
 Categorizar tareas por prioridad o tipo.  

---

## Buenas Prácticas Aplicadas

- Código comentado para facilitar mantenimiento.  
- Nombres descriptivos en variables y funciones.  
- Separación de responsabilidades entre HTML (estructura), CSS (estilo) y JS (lógica).  
- Accesibilidad básica: contraste adecuado y botones accesibles por teclado.  

---

## Conclusión

Este módulo permitió consolidar los pilares fundamentales del desarrollo web front-end, integrando HTML, CSS y JavaScript en una sola experiencia práctica. Además, me brindó una comprensión más profunda del ciclo completo de desarrollo: desde la interpretación de requisitos y wireframes hasta la implementación, pruebas y propuestas de mejora.

Esta experiencia práctica fortalece habilidades clave requeridas en proyectos reales y sienta las bases para trabajar con frameworks modernos como React o Vue en el futuro.