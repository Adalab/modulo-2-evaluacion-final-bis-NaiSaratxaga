# Hola 👋🏽, soy Naiara

**Y este es mi ejercicio de evaluación final (bis) de JavaScript**

- El ejercicio consiste en desarrollar una aplicación de red social que nos permita marcar usuarios como
  amigos.
- El ejercicio también tiene una parte de maquetación con HTML y Sass.

**Vamos a utilizar esta [API](https://randomuser.me/) que nos devuelve un listado de usuarios al azar.**

1. **Listado de usuarios:**

   - Cada vez que se arranca la página hay que obtener 10 usuarios al azar llamando a esta API:
     [API](https://randomuser.me/api/?results=10)
   - Limpiar los datos que nos vienen de la API y quedarnos solo con la información que nos interese.
   - Guardar los datos de los usuarios en un array.
   - Pintar el listado de usuarios con nombre, ciudad, foto y nombre de usuario en pantalla.

2. **Marcar como amigos**
   **_Cuándo se haga click en uno de los usuarios del listado hay que:_**

   - En el objeto del usuario clickado dentro del array, hay que añadir una propiedad para marcarlo como
     amigo, por ejemplo poniendo **isFriend: true.**
   - Volver a pintar el listado de usuarios en pantalla:

   1. Comprobar si cada usuario pintado es un amigo y en caso afirmativo pintar el color de fondo
      de otro color, por ejemplo rosa.

3. **Guardar / recuperar de local**
   Partiendo de los dos botones que hay en los diseños, hay que:

   1. Cuando la usuaria haga click en **Guardar usuarios** hay que guardar el listado de usuarios que se esté
      mostrando en ese momento en pantalla en el local storage.
   2. Cuando la usuaria haga click en Recuperar usuarios hay que:

   - Leer los datos que haya en el local storage.
   - Sobre escribir el array de datos.
   - Volver a pintar los datos de los usuarios en pantalla.

```bash
Nota: durante todo el ejercicio se debe trabajar con un array de datos, ya que así os resultará más
fácil todo el desarrollo.
```

# Donde se puede ver 👀

[Pulsar aquí](http://beta.adalab.es/modulo-2-evaluacion-final-bis-NaiSaratxaga/)

# Este proyecto ha sido desarrollado con:

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> </p>

También se ha utilizado el Starter Kit de Aadalab, el cual incluye un motor de plantillas HTML, el preprocesador SASS y un servidor local.

# Guía para arrancar el proyecto

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con este Starter Kit.

**Pasos a seguir :**

1. _Clonar este repositorio_
2. _Abrir una terminal en la carpeta raíz del repositorio_
3. _Instalar las dependencias locales ejecutando en la terminal el comando:_

```bash
npm install
```

**Arrancar el proyecto con el comando**

```bash
npm start
```

**Para generar la página**

```bash
npm run docs
```

**Autora:**
[Naiara Saratxaga](https://github.com/NaiSaratxaga)
