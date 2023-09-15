document.addEventListener("DOMContentLoaded", function () {
  const sacos = [
    {
      id: 101,
      name: "Desayuno Sorpresa",
      price: "20.000",
      image: "piñauno.jpg",
    },
    {
      id: 102,
      name: "Desayuno sorpresa",
      price: "23.000",
      image: "piñados.jpeg",
    },
    // ... (otros productos)
  ];

  // Obtén el contenedor de productos
  const productContainer = document.getElementById("sacoProducts");

  // Recorre el arreglo de sacos y genera el HTML para cada producto
  sacos.forEach((producto) => {
    const productCard = document.createElement("div");
    productCard.classList.add("productCard");

    // Agrega la imagen
    const img = document.createElement("img");
    img.src = "imagenes/papeleria/" + producto.image;
    productCard.appendChild(img);

    // Agrega el nombre del producto
    const h3 = document.createElement("h3");
    h3.textContent = producto.name;
    productCard.appendChild(h3);

    // Agrega el precio actual
    const precioP = document.createElement("p");
    precioP.textContent = "Precio: ";
    precioP.dataset.id = producto.id; // Agrega un atributo 'data-id' para identificar el precio
    const precioSpan = document.createElement("span");
    precioSpan.classList.add("precio");
    precioSpan.textContent = producto.price;
    precioP.appendChild(precioSpan);
    productCard.appendChild(precioP);

    // Agrega el campo de entrada para el nuevo precio
    const inputPrecio = document.createElement("input");
    inputPrecio.type = "number";
    inputPrecio.classList.add("input_precio");
    inputPrecio.placeholder = "Nuevo precio";
    productCard.appendChild(inputPrecio);

    // Agrega el botón para agregar el precio
    const agregarBtn = document.createElement("button");
    agregarBtn.classList.add("agregar_btn");
    agregarBtn.textContent = "Agregar Precio";
    agregarBtn.onclick = function () {
      agregarPrecio(producto.id);
    };
    productCard.appendChild(agregarBtn);

    // Agrega la tarjeta del producto al contenedor
    productContainer.appendChild(productCard);
  });

  // Función para agregar precios de sacos
  function agregarPrecio(productoId) {
    // Obtén el nuevo precio del campo de entrada
    const nuevoPrecioInput = document.querySelector(
      `#sacoProducts [data-id="${productoId}"] + .input_precio`
    );
    const nuevoPrecio = nuevoPrecioInput.value;

    // Verifica si el nuevo precio es un número válido
    if (!isNaN(nuevoPrecio)) {
      // Realiza una solicitud Fetch para agregar el precio en el servidor
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
            // Inserción exitosa, muestra un mensaje
            const precioSpan = document.querySelector(
              `#sacoProducts [data-id="${productoId}"] .precio`
            );
            precioSpan.textContent = nuevoPrecio;
            alert(
              `Precio agregado con éxito para el producto con ID ${productoId}`
            );
          } else {
            // Error en la inserción, muestra un mensaje de error
            alert("Error al agregar el precio");
          }
        })
        .catch((error) => {
          console.error("Error de red:", error);
        });
    } else {
      alert("El nuevo precio no es válido");
    }
  }
});
