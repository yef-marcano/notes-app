# Aplicacion mobil para guardar notas

Cree y administre sus notas... Esta aplicación utiliza la memoria de su telefono para almacenarlas de manera local. Por lo tanto, su información no es enviada a ningún otro sitio externo.

### ¿Como se almacenan?

Utilizando **AsyncStorage** que viene implementada en tu telefono. En resumen, *es un sistema de almacenamiento de valor clave simple, no cifrado, asíncrono, persistente que es global para la aplicación.*. 

Las notas, no son enviadas a ningún sitio externo, ya que quedan solo y unicamente guardadas en su telefono, por lo tanto, si desintala, automaticamente perderá todas las notas almacenadas.

Para más informacion sobre AsyncStorage, [leer este articulo](https://runebook.dev/es/docs/react_native/asyncstorage#:~:text=AsyncStorage-,AsyncStorage%20es%20un%20sistema%20de%20almacenamiento%20de%20valor%20clave%20simple,usarse%20en%20lugar%20de%20LocalStorage.)

### ¿Que datos se almacenan de una nota?

Principalmente, la nota y la fecha. Que es requerido y tiene un limite de 10000 caracteres. Y claramente cuenta con el contenido como tal de la nota a almacenar. Y, ademas de esto, se obtienen a traves del mismo dispositivo, los datos como la fecha (dia/mes/año) y hora (hora:minuto:segundo) de ese momento, para mostrarselas al usuario y tambien poder organizar las notas (de la más actualizada, a la más antigua)...

### ¿Cuantas notas se pueden almacenar?

Recordando que un caracter, equivale a **1 byte**.

Cada contenido de una nota, puede almacenar hasta 10000 caracteres, es decir, que una nota ocupando ese limite, equivale (contando tambien fecha y hora de creacion y modificacion de la misma) aproximadamente **10kb**. Y, ya que **AsyncStorage** permite almacenar en memoria hasta 5mb o 10mb, segun sea el telefono celular, estamos hablando de un soporte hasta de más de +400 notas para poder almacenar.

### Desarrollo

Esta aplicacion esta desarrollada utilizando el framework [React Native](https://reactnative.dev/). Por lo tanto, HTML, CSS y JavaScript, van de la mano.

Tambien, se utilizan:

* [Expo](https://expo.dev/): Es un marco de trabajo que opera sobre React Native para facilitar el desarrollo con esta tecnología.
* [Font Awesome](http://fontawesome.com): Fabulosa fuente de iconos (edicion gratuita).

### Soporte IOS y Android

### Modo nocturno (Proximamente)

La aplicación contiene un boton para cambiar el aspecto de la misma, y es para cambiarlo a algo llamado **modo nocturno**. Permitirá que el color de fondo y colores de las letras, sean más perceptibles cuando estamos en la oscuridad. 

Si el usuario utiliza la configuracion **modo nocturno** de esta aplicación web, quedará guardado en la memoria del navegador, y asi, la proxima vez que el usuario ingrese, podrá obtener su última configuración. 

### Versiones

Actualmente solo cuenta con la version de lanzamiendo.

Versión 1.0.0 (Version de lanzamiento)

- Guardar contenido para una nota.
- Eliminar la nota que se seleccione.
- Ver datos de la nota seleccionada. Como fecha de creacion, modificacion, titulo y contenido
- Editar la nota que quiera.
- Busqueda de notas.
- Guardar en el portapapeles, el contenido de la nota seleccionada.
- Modo oscuro

### Vista Previa (Proximamente)



### Compatibilidad

- Soporte IOS y Android

### Instalacion local

Si por alguna razon, desea bajar este repositorio y correrlo en su computadora, siga las siguientes instrucciones:

```bash
# Instalacion de dependencias
$ npm install

# Servidor en el puerto localhost:19000
$ expo start

```

Para explicacion detallada, puede revisar [la documentacion de Expo](https://docs.expo.dev/).

### Licencia

Todo el codigo está disponible bajo los términos de la licencia MIT. [Leer sobre esta licencia](https://es.wikipedia.org/wiki/Licencia_MIT)

```
MIT License

Copyright (c) 2020 Brayan Durán Velásquez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
