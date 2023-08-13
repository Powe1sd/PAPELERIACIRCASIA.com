// Ruta de las imágenes (cambia esto según la ubicación de tu archivo HTML)
const rutaImagenes = "/imagenes/";

// Datos de los productos de Piñatería
const piñateria = [
  {
    id: 101,
    name: "PIÑATAS COLORIDAs",
    price: 2000000,
    image: "piñateriauno.JPEG",
  },
  {
    id: 101,
    name: "PIÑATAS COLORIDAs",
    price: 2000000,
    image: "piñateriados.jpeg",
  },
  {
    id: 101,
    name: "PIÑATAS COLORIDAs",
    price: 2000000,
    image: "piñateriados.jpeg",
  },
  {
    id: 101,
    name: "PIÑATAS COLORIDAs",
    price: 2000000,
    image: "piñateriados.jpeg",
  },
  // Agrega más productos de Piñatería aquí
];

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  const image = document.createElement("img");
  image.src = rutaImagenes + product.image; // Utiliza la ruta de las imágenes
  image.alt = product.name;
  card.appendChild(image);

  const name = document.createElement("p");
  name.textContent = product.name;
  card.appendChild(name);

  const price = document.createElement("p");
  price.textContent = `$ ${product.price}`;
  card.appendChild(price);

  return card;
}

function showPiñateria() {
  const piñateriaProductsContainer = document.getElementById("piñaProducts");
  piñateriaProductsContainer.innerHTML = "";
  piñateria.forEach((product) => {
    const productCard = createProductCard(product);
    piñateriaProductsContainer.appendChild(productCard);
  });
}

showPiñateria();
