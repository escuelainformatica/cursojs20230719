import autor from './modelos/autor.js'; // importacion default
import libro from './modelos/libro.js';
import libros from './modelos/libros.js';
// import autorMostrar from './mostrar/autormostrar.js';
// import libroMostrar from './mostrar/libromostrar.js';
// import librosMostrar from './mostrar/librosmostrar.js';
import {autorMostrar,libroMostrar,librosMostrar} from './mostrar/vistas.js'; // importacion con nombre
import vistas2 from './mostrar/vistas2.js';


autorMostrar(autor);
libroMostrar(libro);
librosMostrar(libros);

vistas2.autorMostrar(autor);
vistas2.libroMostrar(libro);
vistas2.librosMostrar(libros);

