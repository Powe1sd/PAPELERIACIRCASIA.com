// Datos simulados de productos para sacos y camisas

const camisas = [
  { id: 201, name: "Camisa Blanca", price: 8000, image: "piñados.jpeg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "piñauno.jpg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },

  // Agrega más camisas aquí
];

const camisaProductsContainer = document.getElementById("camisaProducts");
("indumentariaProducts");

// Función para mostrar los productos de camisas
function showCamisas() {
  camisaProductsContainer.innerHTML = "";
  camisas.forEach((product) => {
    const productCard = createProductCard(product);
    camisaProductsContainer.appendChild(productCard);
  });
}

//RUTA DE LAS IMAGENES
function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.className = "productCard";
  productCard.innerHTML = `
      <img src="/imagenes/${product.image}"alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Precio: $${product.price}</p>
     
      <div class="productDetails" id="details-${product.id}">
      </div>
    `;
  return productCard;
}

// app.js

// Mostrar los productos al cargar la página
showCamisas();
