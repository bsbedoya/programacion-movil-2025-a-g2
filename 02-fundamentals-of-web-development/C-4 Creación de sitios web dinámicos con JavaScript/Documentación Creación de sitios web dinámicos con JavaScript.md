# Documentación del Módulo 4: Creación de Sitios Web Dinámicos con JavaScript

En este módulo del curso "Fundamentos del Desarrollo Web", aprendí sobre JavaScript, un lenguaje de programación clave para el desarrollo de sitios web dinámicos e interactivos. JavaScript es capaz de ejecutarse tanto en el frontend (navegadores) como en el backend (servidores, usando Node.js). Es utilizado para modificar contenido HTML, manejar estilos CSS, gestionar datos y responder a interacciones de los usuarios, creando una experiencia web dinámica y atractiva.

## Integración de JavaScript en HTML

JavaScript se puede incluir en un documento HTML de varias maneras. Las tres formas principales son:

1. En el cuerpo del documento HTML: Usando la etiqueta <script> dentro del <body>. Aunque esta técnica es funcional, no es recomendada para producción, ya que el código JavaScript se carga con el contenido HTML, lo que puede retrasar el renderizado de la página.

2. En el encabezado del documento HTML: Usando <script> dentro del <head>. Este enfoque hace que el código JavaScript se cargue antes que el contenido del cuerpo, lo que puede ser útil para algunas situaciones, pero también puede retrasar la carga de la página si no se gestiona correctamente.

3. En un archivo externo: Usando <script src="archivo.js">. Esta es la mejor práctica para proyectos reales. Se coloca el código JavaScript en un archivo separado y se enlaza a través de la etiqueta <script>, lo que permite una gestión más limpia del código y facilita la colaboración entre desarrolladores.

## Manipulación del DOM

El DOM (Modelo de Objetos del Documento) es la estructura interna de un documento HTML representada como un conjunto de objetos que los desarrolladores pueden manipular mediante JavaScript. 

Métodos comunes:

- getElementById(): Permite seleccionar un elemento del documento HTML por su id.
- querySelector(): Permite seleccionar un elemento utilizando un selector CSS.
- Modificación de propiedades: Puedo cambiar propiedades como el estilo de los elementos, por ejemplo, modificando el color de texto de un párrafo.

Ejemplo práctico: Cambiar el color de texto de un párrafo al cargar la página.
document.getElementById("miParrafo").style.color = "red";

## Eventos en JavaScript

Los eventos son acciones que ocurren en la página web como clics, desplazamientos, envíos de formularios, etc. JavaScript permite manejar estos eventos para hacer que la página web responda de manera interactiva a las acciones del usuario.

Manejadores de eventos:

- Atributos HTML: Como onclick, onmouseover, onkeydown.
- Escuchadores de eventos (Event Listeners): Permiten manejar eventos de manera más flexible.

Ejemplo práctico: Cambiar el estilo de texto al hacer clic en un botón.
<button onclick="cambiarEstilo()">Haz clic</button>
function cambiarEstilo() {
    document.getElementById("miParrafo").style.fontWeight = "bold";
}

## Modelos de Programación en JavaScript

Programación Orientada a Objetos (POO)
JavaScript soporta características de la Programación Orientada a Objetos (POO), como la herencia, encapsulación y abstracción. Los objetos en JavaScript pueden tener propiedades (que almacenan datos) y métodos (funciones que manipulan esos datos). Además, JavaScript permite la creación de objetos a partir de prototipos, facilitando la reutilización del código.

Ejemplo de objeto en JavaScript:
const usuario = {
    nombre: "Juan",
    apellido: "Pérez",
    saludar: function() {
        return "Hola, " + this.nombre + " " + this.apellido;
    }
};

Programación Funcional
JavaScript también soporta la Programación Funcional, donde las funciones son tratadas como ciudadanos de primera clase. Esto significa que las funciones pueden ser asignadas a variables, pasadas como parámetros y retornadas desde otras funciones.

Ejemplo de función que retorna otra función:
function saludar(nombre) {
    return function() {
        console.log("Hola, " + nombre);
    };
}
const saludoJuan = saludar("Juan");
saludoJuan();  // "Hola, Juan"

Variables y Funciones en JavaScript
En JavaScript, las variables se declaran utilizando var, let o const, y no es necesario especificar el tipo de dato que contendrán, ya que JavaScript es débilmente tipado. Además, las funciones son bloques de código reutilizables que pueden recibir parámetros y retornar valores.

Ejemplo de función simple:
function sumar(a, b) {
    return a + b;
}
console.log(sumar(3, 5));  // 8

Expresiones y Operadores
Las expresiones en JavaScript producen valores. Por ejemplo, 2 + 2 es una expresión que produce el valor 4. Además, JavaScript tiene varios operadores como + (para concatenar cadenas o sumar números) y == (para comparación de valores).

Operadores comunes:
Aritméticos: +, -, *, /
De comparación: ==, !=, >, <
Lógicos: &&, ||, !

Trabajo con Datos
Tipos de Datos Comunes en JavaScript:
Booleanos: true o false
Números: Cualquier valor numérico, enteros o decimales.
Cadenas de texto (strings): Datos textuales.
Null: Representa la ausencia intencional de valor.
Undefined: Variable declarada pero no inicializada.

Operaciones CRUD en Bases de Datos
Las operaciones CRUD son fundamentales para la gestión de bases de datos:
Crear (Create)
Leer (Read)
Actualizar (Update)
Eliminar (Delete)

Introducción a SQL y las sentencias básicas para interactuar con bases de datos:
SELECT: Recuperar datos de la base de datos.
INSERT: Insertar nuevos registros en la base de datos.
UPDATE: Modificar datos existentes.
DELETE: Eliminar registros de la base de datos.

## Node.js y Backend

Node.js es un entorno de ejecución para JavaScript en el lado del servidor. Ofrece un modelo sin bloqueo que lo hace muy eficiente para manejar múltiples conexiones simultáneas.

Ventajas de Node.js:
Escrito en JavaScript, lo que permite usar el mismo lenguaje tanto en el frontend como en el backend.
NPM (Node Package Manager) permite instalar y gestionar bibliotecas y frameworks adicionales.

## Bibliotecas y Frameworks

Bibliotecas:
jQuery: Una biblioteca popular para facilitar la manipulación del DOM y realizar peticiones AJAX.

Frameworks:
React, Angular, Vue: Frameworks de JavaScript para desarrollar interfaces de usuario interactivas y dinámicas.

Ambas se instalan utilizando NPM y son de código abierto.

Ejemplo Manipulación de Estilos con JavaScript
Este ejemplo muestra cómo manejar eventos de clic y manipular estilos en el DOM usando JavaScript:

<html>
<head>
    <style>
        div {
            font-weight: bold;
            color: black;
            font-size: 30px;
        }
    </style>
    <script>
        function myClickFunction(){
            var elementName = document.getElementById("click-demo");
            if (elementName.style.fontStyle != "italic") {
                elementName.style.fontStyle = "italic";
            } else {
                elementName.style.fontStyle = "normal";
            }
        }
    </script>
</head>
<body>
<div id="click-demo" onclick="myClickFunction()">
    El atributo de suceso onclick reacciona cuando un usuario hace clic. Puede cambiar el color de fondo del recuadro, cambiar la fuente del texto, contabilizar cuántas veces el usuario hace clic, ¡y más! Pulse aquí en este recuadro para ver lo que puede hacer con el atributo onclick y un poco de JavaScript.
</div>
</body>
</html>

## Conclusión

Este módulo me proporcionó los fundamentos clave para trabajar con JavaScript en el desarrollo web. Desde la integración de JavaScript en HTML, pasando por la manipulación del DOM y el manejo de eventos, hasta la interacción con bases de datos y el uso de Node.js para el desarrollo backend. Además, comprendí los principios de la Programación Orientada a Objetos y la Programación Funcional, los cuales son esenciales para escribir código eficiente y reutilizable.
