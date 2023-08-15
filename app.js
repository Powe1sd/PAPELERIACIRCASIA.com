// Datos simulados de productos para sacos y camisas

//SECCION DE LA BARRA DE DESPLIEGUE DE PRODUCTOS

document.addEventListener("DOMContentLoaded", function () {
  var productosBtn = document.getElementById("productos-btn");
  var productosDesplegables = document.querySelector(".productos-desplegables");

  productosBtn.addEventListener("touchstart", function (event) {
    event.stopPropagation();
    if (productosDesplegables.style.display === "none") {
      productosDesplegables.style.display = "block";
    } else {
      productosDesplegables.style.display = "none";
    }
  });

  document.addEventListener("touchstart", function (event) {
    if (
      !productosDesplegables.contains(event.target) &&
      event.target !== productosBtn
    ) {
      productosDesplegables.style.display = "none";
    }
  });
});

//SECCION DE DESAYUNOS Y ANCHETAS
const sacos = [
  { id: 101, name: "Ancheta", price: 40000, image: "piñauno.jpg" },
  { id: 102, name: "Ancheta", price: 20000, image: "piñados.jpeg" },
  { id: 102, name: "Ancheta", price: 30000, image: "piñatres.jpeg" },
  { id: 102, name: "Ancheta", price: 20000, image: "piñacuatro.jpeg" },
  { id: 101, name: "Ancheta", price: 50000, image: "piñacinco.jpeg" },
  { id: 102, name: "Ancheta", price: 50000, image: "piñaseis.jpeg" },
  { id: 102, name: "Ancheta", price: 60000, image: "piñasiete.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñaocho.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñanueve.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñadies.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñaonce.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñadoce.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñatrece.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñacatorce.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñaquince.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñadieciceis.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñadieciciete.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñadieciocho.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñadiecinueve.png" },
  { id: 102, name: "Ancheta", price: 0, image: "piñaveinte.png" },
  { id: 102, name: "Ancheta", price: 0, image: "piñaveintiuno.png" },
  { id: 102, name: "Ancheta", price: 0, image: "piñaveintidos.png" },
  { id: 102, name: "PIÑATERIA", price: 0, image: "piñaventitres.png" },

  // Agrega más sacos aquí
];

//SECCION DE PELUCHES
const camisas = [
  { id: 201, name: "PELUCHE", price: 8000, image: "peludos.jpg" },
  { id: 202, name: "PELUCHE", price: 8000, image: "peluuno.jpg" },
  { id: 201, name: "PELUCHE", price: 8000, image: "pelutres.jpg" },
  { id: 202, name: "PELUCHE", price: 8000, image: "pelucuaatro.jpg" },
  { id: 201, name: "PELUCHE", price: 8000, image: "pelucinco.jpg" },
  { id: 202, name: "PELUCHE", price: 8000, image: "peluseis.jpg" },
  { id: 201, name: "PELUCHE", price: 8000, image: "pelusiete.jpg" },
  { id: 202, name: "PELUCHE", price: 8000, image: "peluocho.jpg" },
  { id: 201, name: "PELUCHE", price: 8000, image: "pelunueve.jpg" },
  { id: 202, name: "PELUCHE", price: 8000, image: "peludies.jpg" },
  { id: 202, name: "PELUCHE", price: 8000, image: "peluonce.jpg" },
  { id: 202, name: "PELUCHE", price: 8000, image: "peludoce.jpg" },
  { id: 202, name: "PELUCHE", price: 8000, image: "pelutrece.jpg" },
  { id: 202, name: "PELUCHE", price: 8000, image: "pelucatorce.jpg" },
  { id: 202, name: "PELUCHE", price: 8000, image: "peluquince.jpg" },
  { id: 202, name: "PELUCHE", price: 8000, image: "peludiecicite.jpg" },
  { id: 202, name: "PELUCHE", price: 8000, image: "peludieciocho.jpg" },
  { id: 202, name: "PELUCHE", price: 8000, image: "peludiecinueve.jpg" },
  { id: 202, name: "PELUCHE", price: 8000, image: "peluveintiuno.jpg" },
  { id: 202, name: "PELUCHE", price: 8000, image: "peluveintidos.jpg" },
  { id: 202, name: "PELUCHE", price: 8000, image: "peluveintitres.jpg" },
  {
    id: 202,
    name: "PELUCHE",
    price: 8000,
    image: "peluveinticuatro.jpg",
  },
  {
    id: 202,
    name: "PELUCHE",
    price: 8000000,
    image: "peluveinticinco.jpg",
  },
  {
    id: 202,
    name: "PELUCHE",
    price: 8000,
    image: "peluveintinueve.jpg",
  },
  { id: 202, name: "PELUCHE", price: 8000, image: "pelutreintados.jpg" },
  {
    id: 202,
    name: "PELUCHE",
    price: 8000,
    image: "pelutreintatres.jpg",
  },
  {
    id: 202,
    name: "PELUCHE",
    price: 8000,
    image: "pelutreintaicuatro.jpg",
  },

  // Agrega más camisas aquí
];

// SECCION PIÑATERIA
const mugs = [
  { id: 201, name: "PIÑATERIA", price: 8000, image: "puno.jpg" },
  { id: 202, name: "PIÑATERIA", price: 8000, image: "pdos.jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: "ptres.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "pcuatro.jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: "pcinco.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "pseis.jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: "psiete.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "pocho.jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: "pnueve.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "pdies.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "ponce.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "pdoce.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "ptrece.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "pcatorce.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "pquince.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "pdieciceis.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "pveinte.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 800000, image: "pdieciocho.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "pdiecinueve.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p21.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p22.jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: "p75.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p24.jpg" },
  { id: 201, name: "PIÑATERIA", price: 800000, image: "p25.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: ".jpg" },

  // Agrega más camisas aquí
];

const toallas = [
  { id: 201, name: "Toallas Blanca", price: 8000, image: "toallas.jpg" },
  { id: 202, name: "Toalla a Rayas", price: 8000, image: "toallaocho.jpg" },
  { id: 201, name: "Toalla", price: 8000, image: "toallacuatro.jpg" },
  { id: 202, name: "Toalla  ", price: 9000, image: "toallas.jpg" },
  { id: 201, name: "Toalla ", price: 7000, image: "toallas.jpg" },
  { id: 202, name: "Toalla", price: 8000, image: "toallas.jpg" },
  { id: 201, name: "Toalla ", price: 8000, image: "toallacinco.jpg" },
  { id: 202, name: "Toalla ", price: 8000, image: "toallados.jpg" },
  { id: 201, name: "Toalla", price: 8000, image: "toallas.jpg" },
  { id: 202, name: "Toalla ", price: 8000, image: "toallatres.jpg" },

  // Agrega más camisas aquí
];

const indumentaria = [
  { id: 201, name: "Camisa Blanca", price: 8000, image: "camisa.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "camisados.jpeg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "camisa.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "camisados.jpeg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "camisa.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "" },

  // Agrega más camisas aquí
];

const chaleco = [
  { id: 201, name: "Camisa Blanca", price: 8000, image: "chaquetatres.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "chaquetados.jpg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "chaquetauno.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "chaqueta.jpg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "chaquetatres.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "chaquetauno.jpg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "chaqueta.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "chaquetados.jpg" },
  { id: 201, name: "Camisa Blanca", price: 8000, image: "chaqueta.jpg" },
  { id: 202, name: "Camisa a Rayas", price: 8000, image: "chaquetauno.jpg" },

  // Agrega más camisas aquí
];

const sacoProductsContainer = document.getElementById("sacoProducts");
const camisaProductsContainer = document.getElementById("camisaProducts");
const mugsProductsContainer = document.getElementById("mugsProducts");
const toallasProductsContainer = document.getElementById("toallasProducts");
const indumentariaProductsContainer = document.getElementById(
  "indumentariaProducts"
);
const chalecoProductsContainer = document.getElementById("chalecoProducts");

// Función para mostrar los productos de sacos
function showSacos() {
  sacoProductsContainer.innerHTML = "";
  sacos.forEach((product) => {
    const productCard = createProductCard(product);
    sacoProductsContainer.appendChild(productCard);
  });
}

function showCamisas() {
  camisaProductsContainer.innerHTML = "";
  camisas.forEach((product) => {
    const productCard = createProductCard(product);
    camisaProductsContainer.appendChild(productCard);
  });
}

function showMugs() {
  mugsProductsContainer.innerHTML = "";
  mugs.forEach((product) => {
    const productCard = createProductCard(product);
    mugsProductsContainer.appendChild(productCard);
  });
}

function showToallas() {
  toallasProductsContainer.innerHTML = "";
  toallas.forEach((product) => {
    const productCard = createProductCard(product);
    toallasProductsContainer.appendChild(productCard);
  });
}
function showIndumentaria() {
  indumentariaProductsContainer.innerHTML = "";
  indumentaria.forEach((product) => {
    const productCard = createProductCard(product);
    indumentariaProductsContainer.appendChild(productCard);
  });
}

function showChaleco() {
  chalecoProductsContainer.innerHTML = "";
  chaleco.forEach((product) => {
    const productCard = createProductCard(product);
    chalecoProductsContainer.appendChild(productCard);
  });
}

//RUTA DE LAS IMAGENES
function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.className = "productCard";
  productCard.innerHTML = `
      <img src="imagenes/papeleria/${product.image}"alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Precio: $${product.price}</p>
     
      <div class="productDetails" id="details-${product.id}">
      </div>
    `;
  return productCard;
}

// Mostrar los productos al cargar la página
showSacos();
showCamisas();
showMugs();
showToallas();
showIndumentaria();
showChaleco();
