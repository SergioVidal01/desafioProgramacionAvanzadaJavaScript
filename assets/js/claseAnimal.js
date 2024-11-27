import { Animal } from "./constructorAnimal.js";

// Clase Aguila que extiende de Animal
class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  // Método específico para el sonido del águila
  chillar() {
    return this.sonido; // Devuelve el sonido
  }
}

// Clase Leon que extiende de Animal
class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  // Método específico para el sonido del león
  rugir() {
    return this.sonido; // Devuelve el sonido
  }
}

// Clase Lobo que extiende de Animal
class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  // Método específico para el sonido del lobo
  aullar() {
    return this.sonido; // Devuelve el sonido
  }
}

// Clase Oso que extiende de Animal
class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  // Método específico para el sonido del oso
  grunir() {
    return this.sonido; // Devuelve el sonido
  }
}

// Clase Serpiente que extiende de Animal
class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  // Método específico para el sonido de la serpiente
  sisear() {
    return this.sonido; // Devuelve el sonido
  }
}

// Exportación de las clases
export { Aguila, Serpiente, Lobo, Leon, Oso };
