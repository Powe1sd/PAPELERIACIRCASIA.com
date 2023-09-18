// Función para editar precios de sacos
function editarPrecio(productoId, nuevoPrecio) {
  // Realiza una solicitud Fetch para actualizar el precio en el servidor
  fetch("editarprecio.php", {
    method: "POST",
    body: JSON.stringify({ id: productoId, precio: nuevoPrecio }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Actualización exitosa, muestra un mensaje
        const precioSpan = document.querySelector(
          `#sacoProducts [data-id="${productoId}"] .precio`
        );
        precioSpan.textContent = nuevoPrecio;
        alert(
          `Precio actualizado con éxito para el producto con ID ${productoId}`
        );
      } else {
        // Error en la actualización, muestra un mensaje de error
        alert("Error al actualizar el precio");
      }
    })
    .catch((error) => {
      console.error("Error de red:", error);
    });
}

// Agrega el botón para editar el precio
const editarBtn = document.createElement("button");
editarBtn.classList.add("editar_btn");
editarBtn.textContent = "Editar Precio";
editarBtn.onclick = function () {
  const nuevoPrecioInput = document.querySelector(
    `#sacoProducts [data-id="${producto.id}"] + .input_precio`
  );
  const nuevoPrecio = nuevoPrecioInput.value;
  editarPrecio(producto.id, nuevoPrecio);
};
productCard.appendChild(editarBtn);
