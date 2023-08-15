// Función para ocultar la sección de buzos
function ocultarBuzosSection() {
  const buzosSection = document.getElementById("sacoProducts");
  if (buzosSection) {
    buzosSection.style.display = "none";
  }
}

// Llamada a la función para ocultar los buzos al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  ocultarBuzosSection();
});
// Función para ocultar la sección de camisas
// Función para ocultar la sección de toallas
function ocultarToallasSection() {
  const toallasSection = document.getElementById("toallasProducts");
  if (toallasSection) {
    toallasSection.style.display = "none";
  }
}

// Llamada a la función para ocultar las toallas al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  ocultarToallasSection();
});
