function ocultarPeluchesSection() {
  const peluchesSection = document.getElementById("camisaProducts");
  if (peluchesSection) {
    peluchesSection.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  ocultarPeluchesSection();
});
