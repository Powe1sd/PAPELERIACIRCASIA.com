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
  { id: 101, name: "Ancheta", price: 70000, image: "piñauno.jpg" },
  { id: 102, name: "Ancheta", price: 300000, image: "piñados.jpeg" },
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

  {
    id: 202,
    name: "PELUCHE",
    price: 8000,
    image: "pelutreintatres.jpg",
  },

  {
    id: 202,
    name: "PELUCHE",
    price: 8000000,
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
  { id: 201, name: "PIÑATERIA", price: 800000000, image: "p73.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p24.jpg" },
  { id: 201, name: "PIÑATERIA", price: 800000, image: "p25.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p26.jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: "p27.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p28.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p29.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p30.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p31.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p32.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p33.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p34.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p35.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p36.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p37.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p38.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p40.jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: "p41.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p42.jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: "p43.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p44.jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: "p45.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p46.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p47.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p48.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p49.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p50.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p51.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p52.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p53.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p55.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p56.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p57.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p58.jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: "p59.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p60.jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: "p61.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p62.jpg" },
  { id: 201, name: "PIÑATERIA", price: 8000, image: "p63.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p64.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p65.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p66.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p67.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p68.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p69.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p73.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p74.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p75.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p76.jpg" },
  { id: 202, name: "CPIÑATERIA", price: 8000, image: "p77.jpg" },

  // Agrega más camisas aquí
];

//SECCION DE PAPELERIA
const papeleria = [
  { id: 101, name: "Ancheta", price: 70000, image: "pa2.jpeg" },
  { id: 102, name: "Ancheta", price: 300000, image: "pa3.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa4.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa5.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa6.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa7.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa8.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa9.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa22.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa23.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa24.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa25.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa26.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa27.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa28.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa29.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa30.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa32.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa33.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa34.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa35.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa36.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa37.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa38.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa39.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa40.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa42.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa43.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa44.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa45.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa46.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa47.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa48.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa49.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa50.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa52.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa53.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa54.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa55.jpeg" },
  { id: 101, name: "Ancheta", price: 70000, image: "pa56.jpeg" },
];

const sacoProductsContainer = document.getElementById("sacoProducts");
const camisaProductsContainer = document.getElementById("camisaProducts");
const mugsProductsContainer = document.getElementById("mugsProducts");
const toallasProductsContainer = document.getElementById("toallasProducts");
const indumentariaProductsContainer = document.getElementById(
  "indumentariaProducts"
);
const chalecoProductsContainer = document.getElementById("chalecoProducts");
const papeleriaProductsContainer = document.getElementById("papeleriaProducts");

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

function showPapeleria() {
  papeleriaProductsContainer.innerHTML = "";
  papeleria.forEach((product) => {
    const productCard = createProductCard(product);
    papeleriaProductsContainer.appendChild(productCard);
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
showPapeleria();
