function ocultarPiñateriaSection() {
  const piñateriaSection = document.getElementById("mugsProducts");
  if (piñateriaSection) {
    piñateriaSection.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  ocultarPiñateriaSection();
});
