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

/* Efecto de zoom haciendo click */

const categoriasButton = document.getElementById("productos-btn3");
const categoriasDesplegable = document.querySelector(
  ".productos-desplegables2"
);

categoriasButton.addEventListener("click", (event) => {
  event.stopPropagation(); // Evita la propagación del evento a elementos padres
  categoriasDesplegable.classList.toggle("show");
});

// Código para abrir la imagen cuando se hace clic en cualquier imagen de producto
document.addEventListener("DOMContentLoaded", function () {
  const allProductImages = document.querySelectorAll(".productCard img");

  allProductImages.forEach((image) => {
    image.addEventListener("click", function () {
      const imageUrl = image.getAttribute("src");
      window.open(imageUrl, "_blank");
    });
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
  { id: 201, name: "PIÑATERIA", price: "20.000", image: "puno.jpg" },
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
    name: "Carpeta color cafe",
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
  { id: 101, name: "Marcador pelikan ", price: 0, image: "la3.jpg" },
  { id: 101, name: "Carayones 12 ", price: 0, image: "la4.jpg" },
  { id: 101, name: "Tizas escolar ", price: 0, image: "la5.jpg" },
  { id: 101, name: "Lapicero detector ", price: 0, image: "la6.jpg" },
  { id: 101, name: "Marcador liquida ", price: 0, image: "la7.jpg" },
  { id: 101, name: "Marcador cafe ", price: 0, image: "la8.jpg" },
  { id: 101, name: "Corrector brocha ", price: 0, image: "la9.jpg" },
  { id: 101, name: "Corrector liquido ", price: 0, image: "la22.jpg" },
  { id: 101, name: "Corrector lapiz ", price: 0, image: "la23.jpg" },
  { id: 101, name: "Corrector cinta ", price: 0, image: "la24.jpg" },
  { id: 101, name: "Minas 2.0 ", price: 0, image: "la25.jpg" },
  { id: 101, name: "Minas 0.5 ", price: 0, image: "la26.jpg" },
  { id: 101, name: "Minas 0.7 ", price: 0, image: "la27.jpg" },
  { id: 101, name: "Lapiz carboncillo ", price: 0, image: "la28.jpg" },
  { id: 101, name: "Lapiz", price: 0, image: "la29.jpg" },
  { id: 101, name: "Portaminas ", price: 0, image: "la30.jpg" },
  { id: 101, name: "Micropunta ", price: 0, image: "la32.jpg" },
  { id: 101, name: "Lápiz presto azul ", price: 0, image: "la33.jpg" },
  { id: 101, name: "Lápiz mirado 2 ", price: 0, image: "la34.jpg" },
  { id: 101, name: "Sacapuntas depósito ", price: 0, image: "la35.jpg" },
  { id: 101, name: "Sacapuntas lapicito ", price: 0, image: "la36.jpg" },
  { id: 101, name: "Sacapuntas metalico ", price: 0, image: "la37.jpg" },
  { id: 101, name: "Sacapuntas deposito ", price: 0, image: "la38.jpg" },
  { id: 101, name: "Lapicero neon ", price: 0, image: "la39.jpg" },
  { id: 101, name: "Lapicero injoy ", price: 0, image: "la42.jpg" },
  { id: 101, name: "Lapicero retractil ", price: 0, image: "la43.jpg" },
  { id: 101, name: "Lapicero en gel ", price: 0, image: "la44.jpg" },
  { id: 101, name: "Tinta para marcadores ", price: 0, image: "la45.jpg" },
  { id: 101, name: "Marcadores punta fina ", price: 0, image: "la46.jpg" },
  { id: 101, name: "Lapiceros en gel ", price: 0, image: "la47.jpg" },
  { id: 101, name: "Marcadores surtidos ", price: 0, image: "la48.jpg" },
  { id: 101, name: "Marcador borrables ", price: 0, image: "la49.jpg" },
  { id: 101, name: "Marcadores eterna ", price: 0, image: "la50.jpg" },
  { id: 101, name: "Marcadores borrable ", price: 0, image: "la52.jpg" },
  { id: 101, name: "Marcador borrable ", price: 0, image: "la53.jpg" },
  { id: 101, name: "Marcadores sharpie ", price: 0, image: "la54.jpg" },
  { id: 101, name: "Marcadores metalizados ", price: 0, image: "la55.jpg" },
  { id: 101, name: "Cinta 200 yardas ", price: 0, image: "la56.jpg" },
  { id: 101, name: "Borrador negro ", price: 0, image: "la57.jpg" },
  { id: 101, name: "Cinta 50 metros ", price: 0, image: "la58.jpg" },
  { id: 101, name: "Cinta aislante ", price: 0, image: "la59.jpg" },
  { id: 101, name: "Cinta 40 metros ", price: 0, image: "la60.jpg" },
  { id: 101, name: "Borrador rotal ", price: 0, image: "la62.jpg" },
  { id: 101, name: "Cinta trasparente ", price: 0, image: "la63.jpg" },
  { id: 101, name: "Cinta pequeña ", price: 0, image: "la64.jpg" },
  { id: 101, name: "Plumones pincel ", price: 0, image: "la65.jpg" },
  { id: 101, name: "Cinta mediana ", price: 0, image: "la66.jpg" },
  { id: 101, name: "Cinta papel ", price: 0, image: "la67.jpg" },
  { id: 101, name: "Plumones surtidos ", price: 0, image: "la68.jpg" },
  { id: 101, name: "Cinta trasparente ", price: 0, image: "la69.jpg" },
  { id: 101, name: "Cinta tesa cafe ", price: 0, image: "la72.jpg" },
  { id: 101, name: "Cinta doble faz ", price: 0, image: "la73.jpg" },
  { id: 101, name: "Resaltadores pastel ", price: 0, image: "la74.jpg" },
  { id: 101, name: "Marcadores vinilo ", price: 0, image: "la75.jpg" },
  { id: 101, name: "Plumones rombo ", price: 0, image: "la76.jpg" },
  { id: 101, name: "Cinta papel medio ", price: 0, image: "la77.jpg" },
  { id: 101, name: "Marcadores economicos ", price: 0, image: "la78.jpg" },
  { id: 101, name: "Cinta papel medio ", price: 0, image: "la80.jpg" },
  { id: 101, name: "Cinta papel 3/4 ", price: 0, image: "la82.jpg" },
  { id: 101, name: "Tacos periódico ", price: 0, image: "la83.jpg" },
  { id: 101, name: " Tacos adesivas", price: 0, image: "la84.jpg" },
  { id: 101, name: "Vinilo grande ", price: 0, image: "la85.jpg" },
  { id: 101, name: "Vinilo pequeño ", price: 0, image: "la86.jpg" },
  { id: 101, name: "Lápices colores ", price: 0, image: "la87.jpg" },
  { id: 101, name: "Pates parchesitos ", price: 0, image: "la88.jpg" },
  { id: 101, name: "Parchesitos colores ", price: 0, image: "la89.jpg" },
  { id: 101, name: "Parchesitos colores ", price: 0, image: "la92.jpg" },
  { id: 101, name: "Parchesitos colores ", price: 0, image: "la94.jpg" },
  { id: 101, name: "Colores ", price: 0, image: "la96.jpg" },
  { id: 101, name: "Colores ", price: 0, image: "la96.jpg" },
  { id: 101, name: "Colores ", price: 0, image: "la97.jpg" },
  { id: 101, name: "Colores ", price: 0, image: "la99.jpg" },
  { id: 101, name: "Colores ", price: 0, image: "la200.jpg" },
  { id: 101, name: "Colores ", price: 0, image: "la202.jpg" },
  { id: 101, name: "Colores Norma ", price: 0, image: "la203.jpg" },
  { id: 101, name: "Resaltadores de colores ", price: 0, image: "la204.jpg" },
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
