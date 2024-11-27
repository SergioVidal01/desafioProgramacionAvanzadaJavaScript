export class Animal {
  // Constructor que inicializa las propiedades del animal
  constructor(nombre, edad, img, comentarios, sonido) {
    // Propiedades privadas usando closures
    let _nombre = nombre;
    let _edad = edad;
    let _img = img;
    let _comentarios = comentarios;
    let _sonido = sonido;

    // Métodos para obtener las propiedades
    this.getNombre = () => _nombre;
    this.getEdad = () => _edad;
    this.getImg = () => _img;
    this.getComentarios = () => _comentarios;

    // Método para actualizar los comentarios
    this.setComentarios = (nuevo_comentario) => {
      _comentarios = nuevo_comentario;
    };
    this.getSonido = () => _sonido;
  }

  // Getters para acceder a las propiedades
  get nombre() {
    return this.getNombre();
  }

  get edad() {
    return this.getEdad();
  }

  get img() {
    return this.getImg();
  }

  get comentarios() {
    return this.getComentarios();
  }

  set comentario(nuevo_comentario) {
    this.setComentarios(nuevo_comentario);
  }

  get sonido() {
    return this.getSonido();
  }
}
