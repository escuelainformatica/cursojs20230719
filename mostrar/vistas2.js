export default {
    /**
     * esta funcion permite mostrar un autor
     * @param {{nombre,apellido}} autor 
     */
    autorMostrar:function(autor) {
        console.log("-----------autor------------------");
        console.log("Nombre   :"+autor.nombre);
        console.log("Apellido :"+autor.apellido);
        console.log("----------------------------------");
    },
    /**
     * 
     * @param {{titulo,autor:{nombre,apellido,pais:{nombre,continente}}}} libro 
     */
    libroMostrar:function (libro) {
        console.log("-----------libro------------------");
        console.log("Titulo :"+libro.titulo);
        console.log("Autor  - Nombre :"+libro.autor.nombre);
        console.log("Autor  - Apellido :"+libro.autor.apellido);
        console.log("Autor  - Pais    - Nombre: "+libro.autor.pais.nombre);
        console.log("Autor  - Pais    - Continente: "+libro.autor.pais.continente);
        console.log("----------------------------------");
    },
    /**
     * esta funcion muestra los libros
     * @param {[{titulo,autor:{nombre,apellido}}]} libros el listado de libro
     */
    librosMostrar:function (libros) {        
        console.log("-----------libros------------------");
        console.log("Titulo\tNombre Autor\tApellido Autor");
        libros.forEach(function(libro) {
            console.log(libro.titulo+"\t"+libro.autor.nombre+"\t"+libro.autor.apellido);
        } );
        console.log("----------------------------------")
    }
}