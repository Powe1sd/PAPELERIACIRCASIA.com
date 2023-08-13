const piñateria = [
  {
    id: 101,
    name: "PIÑATAS COLORIDA",
    price: 20000,
    image: "piñateriauno.JPEG",
  },
  { id: 101, name: "Piñata Colorida", price: 2000, image: "piñateriados.JPEG" },
  {
    id: 101,
    name: "Piñata Colorida",
    price: 2000,
    image: "piñateriatres.JPEG",
  },
  {
    id: 101,
    name: "Piñata Colorida",
    price: 2000,
    image: "piñateriacuatro.JPEG",
  },
  {
    id: 101,
    name: "Piñata Colorida",
    price: 2000,
    image: "piñateriacinco.JPEG",
  },
  { id: 101, name: "Piñata Colorida", price: 2000, image: "piñateriados.JPEG" },
  {
    id: 101,
    name: "Piñata Colorida",
    price: 2000,
    image: "piñateriatres.JPEG",
  },
  {
    id: 101,
    name: "Piñata Colorida",
    price: 2000,
    image: "piñateriacuatro.JPEG",
  },
  {
    id: 101,
    name: "Piñata Colorida",
    price: 2000,
    image: "piñateriacinco.JPEG",
  },
  { id: 101, name: "Piñata Colorida", price: 2000, image: "piñateriauno.JPEG" },

  // Agrega más productos de Piñatería aquí
];

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  const image = document.createElement("img");
  image.src = `/imagenes/${product.image}`;
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

//RUTA DE LAS IMAGENES

function showPiñateria() {
  const piñateriaProductsContainer = document.getElementById("piñaProducts");
  piñateriaProductsContainer.innerHTML = "";
  piñateria.forEach((product) => {
    const productCard = createProductCard(product);
    piñateriaProductsContainer.appendChild(productCard);
  });
}

showPiñateria();
