function ocultarPapeleriaSection() {
  const papeleriaSection = document.getElementById("papeleriaProducts");
  if (papeleriaSection) {
    papeleriaSection.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  ocultarPapeleriaSection();
});
