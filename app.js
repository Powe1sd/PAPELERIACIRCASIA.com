document.addEventListener("DOMContentLoaded", function () {
  var productosBtn = document.getElementById("productos-btn");
  var productosDesplegables = document.querySelector(".productos-desplegables");

  productosBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    if (productosDesplegables.style.display === "none") {
      productosDesplegables.style.display = "block";
    } else {
      productosDesplegables.style.display = "none";
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !productosDesplegables.contains(event.target) &&
      event.target !== productosBtn
    ) {
      productosDesplegables.style.display = "none";
    }
  });
});
