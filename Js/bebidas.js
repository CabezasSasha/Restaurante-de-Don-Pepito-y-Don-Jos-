// Función para mostrar u ocultar las opciones de bebida
function mostrarBebida(idBebida) {
  var bebida = document.getElementById(idBebida);
  bebida.style.display = bebida.style.display === "block" ? "none" : "block";
}

// Función para actualizar los tamaños según el tipo de bebida seleccionado (compacta)
function actualizarTamaños(selectTipo, idSelectTamaño) {
  var tipo = selectTipo.value;
  var selectTamaño = document.getElementById(idSelectTamaño);
  var opciones = [];

  // Verifica si es bebida alcohólica o sin alcohol y obtiene las opciones de tamaños y precios
  if (opcionesTamañosAlcohol(tipo).length > 0) {
      opciones = opcionesTamañosAlcohol(tipo);
  } else {
      opciones = Object.values(opcionesTamañosSinAlcohol(tipo)).flat();
  }

  // Actualiza el select de tamaños con las opciones obtenidas
  selectTamaño.innerHTML = '<option value="">Seleccione tamaño</option>';
  opciones.forEach(function(opcion) {
      var opt = document.createElement('option');
      opt.value = opcion.nombre;
      opt.textContent = opcion.nombre + ' - $' + opcion.precio + ' ARS';
      opt.dataset.price = opcion.precio;
      selectTamaño.appendChild(opt);
  });

  selectTamaño.disabled = opciones.length === 0;
  actualizarPrecio(selectTamaño);
}
