export const mandarDatos = (() => {
  // Función principal que maneja la obtención de datos
  const obtenerDatos = async () => {
    try {
      const url = "./animales.json";
      const respuesta = await fetch(url);

      // Verifica si la respuesta fue exitosa
      if (!respuesta.ok) {
        throw new Error(
          `Error en la red: ${respuesta.status} ${respuesta.statusText}`
        );
      }

      // Retorna los datos en formato JSON
      return await respuesta.json();
    } catch (error) {
      // Muestra un mensaje de error en caso de que ocurra
      alert(`Error al obtener datos: ${error.message}`);
      return null; // Devuelve null si hay un error
    }
  };

  // Retorna una función que se puede llamar para obtener los datos
  return {
    mostrar: obtenerDatos(),
  };
})();
