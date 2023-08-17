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
  {
    id: 101,
    name: "Desayuno Sorpresa",
    price: "30.000",
    image: "piñauno.jpg",
  },
  { id: 102, name: "Desayuno sorpresa", price: 0, image: "piñados.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñatres.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñacuatro.jpeg" },
  { id: 101, name: "Ancheta", price: 0, image: "piñacinco.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñaseis.jpeg" },
  { id: 102, name: "Desayuno sorpresa", price: 0, image: "piñasiete.jpeg" },
  { id: 102, name: "Desayuno sorpresa", price: 0, image: "piñaocho.jpeg" },
  { id: 102, name: "Desayuno sorpresa", price: 0, image: "piñanueve.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñadies.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñaonce.jpeg" },
  { id: 102, name: "globo", price: 0, image: "piñadoce.jpeg" },
  { id: 102, name: "Desayuno", price: 0, image: "piñatrece.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñacatorce.jpeg" },
  { id: 102, name: "Desayuno", price: 0, image: "piñaquince.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñadieciceis.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñadieciciete.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñadieciocho.jpeg" },
  { id: 102, name: "Ancheta", price: 0, image: "piñadiecinueve.png" },
  { id: 102, name: "Ancheta", price: 0, image: "piñaveinte.png" },
  { id: 102, name: "Ancheta", price: 0, image: "piñaveintiuno.png" },
  { id: 102, name: "Ancheta", price: 0, image: "piñaveintidos.png" },
  { id: 102, name: "Ancheta", price: 0, image: "piñaventitres.png" },

  // Agrega más sacos aquí
];

//SECCION DE PELUCHES
const camisas = [
  { id: 201, name: "Peluche", price: 0, image: "peludos.jpg" },
  { id: 202, name: "Peluche", price: 0, image: "peluuno.jpg" },
  { id: 201, name: "Peluche", price: 0, image: "pelutres.jpg" },
  { id: 202, name: "Peluche", price: 0, image: "pelucuaatro.jpg" },
  { id: 201, name: "Peluche", price: 0, image: "pelucinco.jpg" },
  { id: 202, name: "Peluche", price: 0, image: "peluseis.jpg" },
  { id: 201, name: "Peluche", price: 0, image: "pelusiete.jpg" },
  { id: 202, name: "Peluche", price: 0, image: "peluocho.jpg" },
  { id: 201, name: "Peluche", price: 0, image: "pelunueve.jpg" },
  { id: 202, name: "Peluche", price: 0, image: "peludies.jpg" },
  { id: 202, name: "Peluche", price: 0, image: "peluonce.jpg" },
  { id: 202, name: "Peluche", price: 0, image: "peludoce.jpg" },
  { id: 202, name: "Peluche", price: 0, image: "pelutrece.jpg" },
  { id: 202, name: "Peluche", price: 0, image: "pelucatorce.jpg" },
  { id: 202, name: "Peluche", price: 0, image: "peluquince.jpg" },
  { id: 202, name: "Peluche", price: 0, image: "peludiecicite.jpg" },
  { id: 202, name: "Peluche", price: 0, image: "peludieciocho.jpg" },
  { id: 202, name: "Peluche", price: 0, image: "peludiecinueve.jpg" },
  { id: 202, name: "Peluche", price: 0, image: "peluveintiuno.jpg" },
  { id: 202, name: "Peluche", price: 0, image: "peluveintidos.jpg" },
  { id: 202, name: "Peluche", price: 0, image: "peluveintitres.jpg" },
  {
    id: 202,
    name: "Peluche",
    price: 0,
    image: "peluveinticuatro.jpg",
  },
  {
    id: 202,
    name: "Peluche",
    price: 0,
    image: "peluveinticinco.jpg",
  },
  {
    id: 202,
    name: "Peluche",
    price: 0,
    image: "peluveintinueve.jpg",
  },

  {
    id: 202,
    name: "Peluche",
    price: 0,
    image: "pelutreintatres.jpg",
  },

  {
    id: 202,
    name: "Peluche",
    price: 0,
    image: "pelutreintaicuatro.jpg",
  },

  // Agrega más camisas aquí
];

// SECCION PIÑATERIA
const mugs = [
  { id: 201, name: "PIÑATERIA", price: 0, image: "puno.jpg" },
  { id: 202, name: "PIÑATERIA", price: 0, image: "pdos.jpg" },
  { id: 201, name: "Velas", price: 0, image: "ptres.jpg" },
  { id: 202, name: "Velas", price: 0, image: "pcuatro.jpg" },
  { id: 201, name: "Globos", price: 0, image: "pcinco.jpg" },
  { id: 202, name: "PIÑATERIA", price: 0, image: "pseis.jpg" },
  { id: 201, name: "LLuvia  sobres", price: 0, image: "psiete.jpg" },
  { id: 202, name: "Flores de  tela", price: 0, image: "pocho.jpg" },
  { id: 201, name: "Lanza confetis", price: 0, image: "pnueve.jpg" },
  { id: 202, name: "Velas volcan", price: 0, image: "pdies.jpg" },
  { id: 202, name: "Espuma fiesta", price: 0, image: "ponce.jpg" },
  { id: 202, name: "Globo  ocasión", price: 0, image: "pdoce.jpg" },
  { id: 202, name: "Posillo mugs", price: 0, image: "ptrece.jpg" },
  { id: 202, name: "velas emojis", price: 0, image: "pcatorce.jpg" },
  { id: 202, name: "velas emojis", price: 0, image: "pquince.jpg" },
  { id: 202, name: "velas magicas", price: 0, image: "pdieciceis.jpg" },
  { id: 202, name: "Cortina surtida", price: 0, image: "pveinte.jpg" },
  { id: 202, name: "Velas cervezas", price: 0, image: "pdieciocho.jpg" },
  { id: 202, name: "Velas de  números", price: 0, image: "pdiecinueve.jpg" },
  { id: 202, name: "Bouquest ocación", price: 0, image: "p21.jpg" },
  { id: 202, name: "Bouquest baby shawer", price: 0, image: "p22.jpg" },
  { id: 201, name: "Manteles surtidos", price: 0, image: "p73.jpg" },
  { id: 202, name: "Globos numero 32", price: 0, image: "p24.jpg" },
  { id: 201, name: "Velas para adultos", price: 0, image: "p25.jpg" },
  { id: 202, name: "Bouquest animes", price: 0, image: "p26.jpg" },
  { id: 201, name: "Bouquest animes", price: 0, image: "p27.jpg" },
  { id: 202, name: "Bouquest súper heroes", price: 0, image: "p28.jpg" },
  { id: 202, name: "Globos mil figuras", price: 0, image: "p29.jpg" },
  { id: 202, name: "Globos 32 corazón", price: 0, image: "p30.jpg" },
  { id: 202, name: "Globos love decoración", price: 0, image: "p31.jpg" },
  { id: 202, name: "Globos Happy birthday", price: 0, image: "p32.jpg" },
  { id: 202, name: "Diademas fiesta", price: 0, image: "p33.jpg" },
  { id: 202, name: "Infladores globos", price: 0, image: "p34.jpg" },
  { id: 202, name: "Bombas R9", price: 0, image: "p35.jpg" },
  { id: 202, name: "Serpentinas", price: 0, image: "p36.jpg" },
  { id: 202, name: "Globos R9", price: 0, image: "p37.jpg" },
  { id: 202, name: "Antifaces", price: 0, image: "p38.jpg" },
  { id: 202, name: "Globos R9", price: 0, image: "p40.jpg" },
  { id: 201, name: "Velas", price: 0, image: "p41.jpg" },
  { id: 202, name: "Cuadro especial", price: 0, image: "p42.jpg" },
  { id: 201, name: "Velas cumpleaños", price: 0, image: "p43.jpg" },
  { id: 202, name: "Caja decoración", price: 0, image: "p44.jpg" },
  { id: 201, name: "Velas", price: 0, image: "p45.jpg" },
  { id: 202, name: "Cuadro", price: 0, image: "p46.jpg" },
  { id: 202, name: "Decoración", price: 0, image: "p47.jpg" },
  { id: 202, name: "Decoración", price: 0, image: "p48.jpg" },
  { id: 202, name: "Decoración", price: 0, image: "p49.jpg" },
  { id: 202, name: "Decoración", price: 0, image: "p50.jpg" },
  { id: 202, name: "Caja decoración", price: 0, image: "p51.jpg" },
  { id: 202, name: "Caja decoración", price: 0, image: "p52.jpg" },
  { id: 202, name: "Caja decoración", price: 0, image: "p53.jpg" },
  { id: 202, name: "Caja", price: 0, image: "p55.jpg" },
  { id: 202, name: "Decoración", price: 0, image: "p56.jpg" },
  { id: 202, name: "Bombas R12", price: 0, image: "p57.jpg" },
  { id: 202, name: "Decoración", price: 0, image: "p58.jpg" },
  { id: 201, name: "Decoración", price: 0, image: "p59.jpg" },
  { id: 202, name: "Decoración", price: 0, image: "p60.jpg" },
  { id: 201, name: "Decoración", price: 0, image: "p61.jpg" },
  { id: 202, name: "Decoración", price: 0, image: "p62.jpg" },
  { id: 201, name: "Decoración", price: 0, image: "p63.jpg" },
  { id: 202, name: "Decoración", price: 0, image: "p64.jpg" },
  { id: 202, name: "Decoración", price: 0, image: "p65.jpg" },
  { id: 202, name: "Decoración", price: 0, image: "p66.jpg" },
  { id: 202, name: "Decoración", price: 0, image: "p67.jpg" },
  { id: 202, name: "Decoración", price: 0, image: "p68.jpg" },
  { id: 202, name: "Decoración", price: 0, image: "p69.jpg" },
  { id: 202, name: "Manteles", price: 0, image: "p73.jpg" },
  { id: 202, name: "Cuadros", price: 0, image: "p74.jpg" },
  { id: 202, name: "Llaveros", price: 0, image: "p75.jpg" },
  { id: 202, name: "Decoración", price: 0, image: "p76.jpg" },
  { id: 202, name: "Caja", price: 0, image: "p77.jpg" },

  // Agrega más camisas aquí
];

//SECCION DE PAPELERIA
const papeleria = [
  {
    id: 101,
    name: "Carpeta yute legajadora",
    price: "20.000",
    image: "pa2.jpeg",
  },
  { id: 102, name: "Carpeta colgante", price: "40.000", image: "pa3.jpeg" },
  {
    id: 101,
    name: "Carpeta legajadora cafe",
    price: 40000,
    image: "pa4.jpeg",
  },
  { id: 101, name: "Carpeta precentación Blanca", price: 0, image: "pa5.jpeg" },
  { id: 101, name: "Carpeta plastica con fuelle", price: 0, image: "pa6.jpeg" },
  {
    id: 101,
    name: "Carpeta grande trece bolsillos fucsisa",
    price: 0,
    image: "pa7.jpeg",
  },
  { id: 101, name: "Carpeta plastica", price: 0, image: "pa8.jpeg" },
  { id: 101, name: "Carpeta plastica", price: 0, image: "pa9.jpeg" },
  { id: 101, name: "Carpeta plastica", price: 0, image: "pa22.jpeg" },
  { id: 101, name: "Resma carta blanca", price: 0, image: "pa23.jpeg" },
  { id: 101, name: "Resma blanca oficio", price: 0, image: "pa24.jpeg" },
  { id: 101, name: "Acetatos", price: 0, image: "pa25.jpeg" },
  {
    id: 101,
    name: "Repuesto 80 hojas cuadriculado",
    price: 0,
    image: "pa27.jpeg",
  },
  {
    id: 101,
    name: "Cuaderno argollado 100 hojas",
    price: 0,
    image: "pa28.jpeg",
  },

  { id: 101, name: "Blog milimetrado zeppeling", price: 0, image: "pa33.jpeg" },
  {
    id: 101,
    name: "Resma papel organico natural",
    price: 0,
    image: "pa34.jpeg",
  },
  {
    id: 101,
    name: "Cuaderno argollado 100 hojas  ",
    price: 0,
    image: "pa35.jpeg",
  },
  {
    id: 101,
    name: "Cuaderno grapados 50 hojas",
    price: 20.0,
    image: "pa36.jpeg",
  },
  { id: 101, name: "Agendas", price: 30.0, image: "pa39.jpeg" },
  { id: 101, name: "Block carta", price: 0, image: "pa40.jpeg" },
  { id: 101, name: "Stiquers", price: 0, image: "pa42.jpeg" },
  { id: 101, name: "Cuaderno argollado", price: 0, image: "pa43.jpeg" },
  { id: 101, name: "Cuaderno cocido", price: 0, image: "pa44.jpeg" },
  { id: 101, name: "Block tamaño oficio", price: 0, image: "pa45.jpeg" },
  { id: 101, name: "Cuaderno 7 materias", price: 0, image: "pa46.jpeg" },
  { id: 101, name: "Cuaderno 5 materias", price: 0, image: "pa47.jpeg" },
  { id: 101, name: "Tabla legajadora", price: 0, image: "pa48.jpeg" },
  { id: 101, name: "Plancha para dibujo", price: 0, image: "pa49.jpeg" },
  { id: 101, name: "Papel mantequilla", price: 0, image: "pa50.jpeg" },
  { id: 101, name: "Carpeta sobre plastica", price: 0, image: "pa56.jpeg" },
  { id: 101, name: "Carpeta plastica", price: 0, image: "pa54.jpeg" },
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

/* Formateando price de los precios para el . */

const productCard = document.createElement("div");
productCard.className = "productCard";
productCard.innerHTML = `
  <img src="imagenes/papeleria/${product.image}" alt="${product.name}">
  <h3>${product.name}</h3>
  <p>Precio: $${formatPrice(product.price)}</p>
  <div class="productDetails" id="details-${product.id}">
  </div>
`;

function formatPrice(priceInCents) {
  const priceInDollars = priceInCents / 100;
  // Formatear el precio con tres dígitos después del punto decimal
  return priceInDollars.toFixed(3);
}
