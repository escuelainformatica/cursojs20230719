# cursojs20230719

* hay dos formas de importar.
   * importacion por "default", pero esta solo se puede hacer una vez por archivo
   * importacion con nombre, se puede importar uno o mas objetos.

* ¿Cual es la que usualmente queremos ocupar?
Usualmente se usa la importacion por default, ya que se puede traer un objeto con muchas variables.

## SRP Responsabilidad de Principio Simple (SRP)
* Separamos un proyecto complicado, en diferentes partes mas sencillas
* Y cada parte tiene su propio "tema" (su propio tipo).

Usualmente los proyectos se separan en
* **modelos** Se refiere a datos, o a la lectura de datos
* **servicios** Se refieren a funcionalidades.
  * **servicios de web services**  funcionalides de web services
  * **servicios de validacion** funcionalides de validacion
  * **vistas** funcionalidades para mostrar algo.
  
  