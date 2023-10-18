/* ******************************************************************************* */
//SECCION DE DESAYUNOS Y ANCHETAS  DONDE SE EXPORTAN IMAGENES Y PRECIOS

//Nota la seccion de saco es la seccion de desayunos y tambien anchetas
/* ******************************************************************************** */
const sacos = [
  { id: 101, name: "Desayuno Sorpresa", price: "45.000", image: "piñauno.jpg" },
  {
    id: 102,
    name: "vasito magico Dulcero",
    price: "7.500",
    image: "piñados.jpeg",
  },
  { id: 103, name: "posillo Mugs", price: "22.000", image: "piñatres.jpeg" },
  { id: 104, name: "Ancheta", price: "32.000", image: "piñacuatro.jpeg" },
  { id: 105, name: "Ancheta", price: "28.000", image: "piñacinco.jpeg" },
  { id: 106, name: "Ancheta", price: "45.000", image: "piñaseis.jpeg" },
  {
    id: 107,
    name: "Desayuno Sorpresa",
    price: "45.000",
    image: "piñasiete.jpeg",
  },
  {
    id: 109,
    name: "Desayuno Sorpresa",
    price: "62.000",
    image: "piñaocho.jpeg",
  },
  {
    id: 110,
    name: "Desayuno Sorpresa",
    price: "55.000",
    image: "piñanueve.jpeg",
  },
  { id: 112, name: "Ancheta", price: "72.000", image: "piñadies.jpeg" },
  { id: 113, name: "Globo", price: "12.000", image: "piñadoce.jpeg" },
  { id: 114, name: "Desayuno", price: "100.000", image: "piñatrece.jpeg" },
  { id: 115, name: "Ancheta", price: "24.000", image: "piñacatorce.jpeg" },
  { id: 116, name: "Desayuno", price: "22.000", image: "piñaquince.jpeg" },
  { id: 117, name: "Ancheta", price: "70.000", image: "piñate16.jpeg" },
  { id: 118, name: "Ancheta", price: "80.000", image: "piñate17.jpeg" },
  { id: 119, name: "Ancheta", price: "38.000", image: "piñadieciocho.jpeg" },
  { id: 120, name: "Ancheta", price: "120.000", image: "piñadiecinueve.png" },
  { id: 121, name: "Ancheta", price: "45.000", image: "piñaveinte.png" },
  { id: 122, name: "Ancheta", price: "37.000", image: "piñaveintiuno.png" },
  { id: 123, name: "Ancheta", price: "50.000", image: "piñaveintidos.png" },
  { id: 124, name: "Ancheta", price: "55.000", image: "piñaventitres.png" },
  { id: 125, name: "Ancheta", price: "45.000", image: "ancheta.jpeg" },
  { id: 126, name: "Ancheta", price: "50.000", image: "ancheta2.jpeg" },

  // Agrega más anchetas aquí
];

//SECCION DE PELUCHES  DONDE SE EXPORTAN IMAGENES Y PRECIOS
const camisas = [
  { id: 200, name: "llavero gato", price: "8.000", image: "peluuno.jpg" },
  { id: 201, name: "Stich mediano", price: "46.000", image: "peludos.jpg" },
  { id: 202, name: "Maywasaski", price: "35.000", image: "pelutres.jpg" },
  { id: 203, name: "mickey-mini", price: "17.000", image: "pelucuaatro.jpg" },
  { id: 204, name: "Pepa pig", price: "22.000", image: "pelucinco.jpg" },
  { id: 205, name: "Tortuga ninga", price: "26.000", image: "peluseis.jpg" },
  { id: 206, name: "Capitan America", price: "24.000", image: "pelusiete.jpg" },
  { id: 207, name: "Mario Broos", price: "28.000", image: "peluocho.jpg" },
  { id: 208, name: "Batman", price: "24.000", image: "pelunueve.jpg" },
  { id: 209, name: "Superman", price: "24.000", image: "peludies.jpg" },
  { id: 210, name: "Winnie pooh", price: "26.000", image: "peluonce.jpg" },
  { id: 211, name: "Gatica", price: "24.000", image: "peludoce.jpg" },
  { id: 212, name: "Tigger", price: "26.000", image: "pelutrece.jpg" },
  { id: 213, name: "Stich Rosado", price: "22.000", image: "pelucatorce.jpg" },
  { id: 214, name: "Stich Azul", price: "22.000", image: "peluquince.jpg" },
  { id: 215, name: "Gorilla", price: "30.000", image: "peludiecicite.jpg" },
  { id: 216, name: "Oso corazon", price: "18.000", image: "peludieciocho.jpg" },
  { id: 217, name: "Piolin", price: "30.000", image: "peludiecinueve.jpg" },
  { id: 218, name: "Lola Bunny ", price: "30.000", image: "peluveintiuno.jpg" },
  { id: 219, name: "Hello kitty", price: "42.000", image: "peluveintidos.jpg" },
  { id: 220, name: "Caballo", price: "30.000", image: "peluveintitres.jpg" },
  { id: 221, name: "Leon", price: "40.000", image: "peluveinticuatro.jpg" },
  { id: 222, name: "Aguacate", price: "18.000", image: "peluveinticinco.jpg" },
  {
    id: 223,
    name: "Ratona",
    price: "35.000",
    image: "peluveintinueve.jpg",
  },
  {
    id: 224,
    name: "Llavero Hello kitty",
    price: "15.000",
    image: "pelutreintatres.jpg",
  },
  {
    id: 225,
    name: "Llavero perro",
    price: "15.000",
    image: "pelutreintaicuatro.jpg",
  },
  { id: 510, name: "Caballo Rosado", price: "30.000", image: "v149.jpeg" },
  { id: 511, name: "Caballo Negro", price: "30.000", image: "v150.jpeg" },
  { id: 512, name: "Caballo Gris", price: "30.000", image: "v151.jpeg" },
  { id: 513, name: "Caballo Blanco", price: "30.000", image: "v152.jpeg" },

  // Agrega más camisas aquí
];

// SECCION PIÑATERIA DONDE SE EXPORTAN IMAGENES Y PRECIOS
const mugs = [
  { id: 300, name: "Caja decoración", price: "4.000", image: "puno.jpg" },
  { id: 301, name: "Caja decoración", price: "3.800", image: "pdos.jpg" },
  {
    id: 302,
    name: "Velas toda ocasión",
    price: "3.500-4.000",
    image: "ptres.jpg",
  },
  { id: 303, name: "Velas abuelitos", price: "3.000", image: "pcuatro.jpg" },
  { id: 304, name: "Globos toda ocasión", price: "2.000", image: "pcinco.jpg" },
  { id: 305, name: "Almohada", price: "14.000", image: "pseis.jpg" },
  { id: 306, name: "Lluvia de sobres", price: "1.500", image: "psiete.jpg" },
  { id: 307, name: "Flores de tela", price: "5.000", image: "pocho.jpg" },
  {
    id: 308,
    name: "Lanza confetis",
    price: "5.500-8.000",
    image: "pnueve.jpg",
  },
  { id: 309, name: "Velas volcán", price: "3.000", image: "pdies.jpg" },
  { id: 310, name: "Espuma fiesta", price: "12.000", image: "ponce.jpg" },
  {
    id: 311,
    name: "Globo 10 toda ocasión",
    price: "3.000",
    image: "pdoce.jpg",
  },
  { id: 312, name: "Posillos mugs", price: "9.000", image: "ptrece.jpg" },
  { id: 313, name: "Velas emojis", price: "2.500", image: "pcatorce.jpg" },
  { id: 314, name: "Velas emojis", price: "2.500", image: "pquince.jpg" },
  { id: 315, name: "Velas mágicas", price: "3.000", image: "pd16.jpg" },
  { id: 316, name: "Cortina surtida", price: "4.200", image: "pveinte.jpg" },
  { id: 317, name: "Velas cervezas", price: "1.600", image: "pdieciocho.jpg" },
  {
    id: 318,
    name: "Velas de números",
    price: "1.500",
    image: "pdiecinueve.jpg",
  },
  { id: 319, name: "Bouquets toda ocasión", price: "7.500", image: "p21.jpg" },
  { id: 320, name: "Bouquets baby shower", price: "10.000", image: "p22.jpg" },
  { id: 321, name: "Manteles surtidos", price: "5.000", image: "p73.jpg" },
  { id: 322, name: "Globos número 32", price: "2.000", image: "p24.jpg" },
  { id: 323, name: "Velas para adultos", price: "4.000", image: "p25.jpg" },
  { id: 324, name: "Bouquets anime", price: "10.000", image: "p26.jpg" },
  { id: 325, name: "Bouquets anime", price: "10.000", image: "p27.jpg" },
  { id: 326, name: "Bouquets súper héroes", price: "10.000", image: "p28.jpg" },
  { id: 327, name: "Globos mil figuras", price: "4.200", image: "p29.jpg" },
  { id: 328, name: "Globos 32 corazón", price: "5.000", image: "p30.jpg" },
  { id: 329, name: "Globos love decoración", price: "3.000", image: "p31.jpg" },
  { id: 330, name: "Globos Happy birthday", price: "5.000", image: "p32.jpg" },
  { id: 331, name: "Diademas fiesta", price: "8.000", image: "p33.jpg" },
  { id: 332, name: "Infladores globos", price: "5.600", image: "p34.jpg" },
  { id: 333, name: "Bombas R9", price: "3.500", image: "p35.jpg" },
  { id: 334, name: "Serpentinas", price: "2.600", image: "p36.jpg" },
  { id: 335, name: "Globos R9", price: "3.000", image: "p37.jpg" },
  { id: 336, name: "Antifaces", price: "4.000", image: "p38.jpg" },
  { id: 337, name: "Globos R9", price: "3.000", image: "p40.jpg" },
  { id: 338, name: "Velas", price: "2.000", image: "p41.jpg" },
  { id: 339, name: "Cuadro especial", price: "2.000", image: "p42.jpg" },
  { id: 340, name: "Velas cumpleaños", price: "7.000", image: "p43.jpg" },
  { id: 341, name: "Caja vino ", price: "14.000", image: "p44.jpg" },
  { id: 342, name: "Velas", price: "4.000", image: "p45.jpg" },
  { id: 343, name: "Esquela", price: "3.000", image: "p46.jpg" },
  { id: 344, name: "Banner Cumpleaños", price: "2.  500", image: "p47.jpg" },
  { id: 345, name: "Letra Cumpleaños", price: "5.000", image: "p48.jpg" },
  { id: 346, name: "Banderin Cumpleaños", price: "5.500", image: "p49.jpg" },
  { id: 347, name: "Caja Desayuno", price: "12.000", image: "p50.jpg" },
  { id: 348, name: "Caja Guacal", price: "14.000", image: "p51.jpg" },
  { id: 349, name: "Caja cervecera", price: "12.000", image: "p52.jpg" },
  { id: 350, name: "Caja mediana", price: "7.000", image: "p53.jpg" },
  { id: 350, name: "Caja mediana", price: "7.000", image: "p53.jpg" },
  { id: 351, name: "Bandeja pequeña", price: "8.000", image: "p55.jpg" },
  { id: 352, name: "cajita carton", price: "2.800", image: "p56.jpg" },
  { id: 353, name: "Bombas R12", price: "5.500", image: "p57.jpg" },
  { id: 354, name: "caja reloj", price: "4.000", image: "p58.jpg" },
  { id: 355, name: "cajita carton", price: "3.500", image: "p59.jpg" },
  { id: 356, name: "caja con tapa", price: "5.000", image: "p60.jpg" },
  { id: 357, name: "caja redonda carton", price: "8.000", image: "p61.jpg" },
  { id: 358, name: "caja con tapa", price: "5.000", image: "p62.jpg" },
  { id: 359, name: "caja ancheta mini", price: "3.000", image: "p63.jpg" },
  { id: 360, name: "bandeja carton", price: "3.500", image: "p64.jpg" },
  { id: 361, name: "caja ancheta pequeña", price: "3.200", image: "p65.jpg" },
  { id: 362, name: "caja crispetera", price: "3.500", image: "p66.jpg" },
  { id: 363, name: "bandeja mediana carton", price: "5.500", image: "p67.jpg" },
  { id: 364, name: "caja de flores", price: "6.000", image: "p68.jpg" },
  { id: 365, name: "caja carton tapa", price: "4.000", image: "p69.jpg" },
  { id: 366, name: "Manteles", price: "5.000", image: "p73.jpg" },
  { id: 367, name: "ezquelas", price: "3.500", image: "p74.jpg" },
  { id: 368, name: "Llaveros", price: "15.000", image: "p75.jpg" },
  { id: 369, name: "cajita pequeña", price: "2.500", image: "p76.jpg" },
  { id: 370, name: "bandeja madera", price: "12.000", image: "p77.jpg" },
  { id: 483, name: "Vasos personajes", price: "2.000", image: "v121.jpeg" },

];

//SECCION DE PAPELERIA, DONDE SE IMPORTAN IMAGENES Y PRECIOS
const papeleria = [
  //Seccion de carpetas
  { id: 400, name: "Carpeta yute", price: "2.000", image: "pa2.jpeg" },
  { id: 401, name: "Carpeta colgante", price: "2.200", image: "pa3.jpeg" },
  { id: 402, name: "Carpeta color café", price: "800", image: "pa4.jpeg" },
  { id: 403, name: "Carpeta Blanca", price: "800", image: "pa5.jpeg" },
  { id: 484, name: "Rollo térmico 80 * 60", price: "6.300", image: "v122.jpeg" },
  { id: 485, name: "Rollos precios", price: "1.600", image: "v123.jpeg" },
  { id: 486, name: "Palos balso", price: "1.200-2.000", image: "v124.jpeg" },
  { id: 487, name: "Láminas de icopor", price: "5.200-10.300", image: "v125.jpeg" },

  {
    id: 404,
    name: "Carpeta plastica con fuelle",
    price: "7.000",
    image: "pa6.jpeg",
  },
  { id: 405, name: "Carpeta grande", price: "25.000", image: "pa7.jpeg" },
  { id: 406, name: "Carpeta plastica", price: "4.600", image: "pa8.jpeg" },
  { id: 407, name: "Carpeta plastica", price: "3.000", image: "pa9.jpeg" },
  { id: 408, name: "Carpeta plastica", price: "3.800", image: "pa22.jpeg" },
  { id: 429, name: "Carpeta sobre plastica", price: "1.600", image: "pa56.jpeg" },
  { id: 430, name: "Carpeta plastica bisel", price: "1.800", image: "pa54.jpeg" },

  //Cuadernos
  
  { id: 416, name: "Cuaderno argollado 100", price: "5.500", image: "pa35.jpeg" },
  { id: 417, name: "Cuaderno grapados 50", price: "2.000", image: "pa36.jpeg" },
  { id: 421, name: "Cuaderno argollado", price: "7.500", image: "pa43.jpeg" },
  { id: 422, name: "Cuaderno cocido", price: "4.000", image: "pa44.jpeg" },
  { id: 424, name: "Cuaderno 7 materias", price: "20.000", image: "pa46.jpeg" },
  { id: 425, name: "Cuaderno 5 materias", price: "18.000", image: "pa47.jpeg" },
  {
    id: 412,
    name: "hojas repuesto 80 hojas cuadriculado",
    price: "6.800",
    image: "pa27.jpeg",
  },

  //Resmas
  { id: 409, name: "Resma carta blanca", price: "23.000", image: "pa23.jpeg" },
  { id: 410, name: "Resma blanca oficio", price: "30.000", image: "pa24.jpeg" },
  { id: 411, name: "Acetatos", price: "800-1.100", image: "pa25.jpeg" },
  { id: 415, name: "Resma papel ecologico", price: "23.000", image: "pa34.jpeg" },

  //Blogs
  {
    id: 414,
    name: "Blog milimetrado zeppeling",
    price: "3.800",
    image: "pa33.jpeg",
  },
  { id: 423, name: "Block tamaño oficio", price: "5.000", image: "pa45.jpeg" },
  { id: 419, name: "Block carta", price: "4.300", image: "pa40.jpeg" },
  { id: 418, name: "Agendas", price: "15.000", image: "pa39.jpeg" },
  { id: 420, name: "Cuadernos-Stickers", price: "6.000", image: "pa42.jpeg" },
  { id: 426, name: "Tabla legajadora", price: "7.000", image: "pa48.jpeg" },
  { id: 427, name: "Plancha para dibujo", price: "5.400", image: "pa49.jpeg" },
  { id: 428, name: "Papel mantequilla", price: "7.500", image: "pa50.jpeg" },

  //Marcadores
  { id: 431, name: "Marcador pelikan", price: "2.500", image: "la3.jpg" },
  { id: 435, name: "Marcador líquido", price: "2.700", image: "la7.jpg" },
  { id: 436, name: "Marcador café", price: "3.000", image: "la8.jpg" },
  { id: 461, name: "Marcadores surtidos", price: "2.000", image: "la48.jpg" },
  { id: 462, name: "Marcador borrable", price: "6.000", image: "la49.jpg" },
  { id: 463, name: "Marcadores eterna", price: "2.000", image: "la50.jpg" },
  { id: 464, name: "Marcador borrable", price: "4.000", image: "la52.jpg" },
  { id: 465, name: "Marcador borrable", price: "2.000", image: "la53.jpg" },
  { id: 459, name: "Marcadores punta fina", price: "3.300", image: "la46.jpg" },
  { id: 466, name: "Marcadores Sharpie", price: "2.000", image: "la54.jpg" },
  { id: 467, name: "Marcadores metalizados", price: "4.000", image: "la55.jpg" },
  { id: 458, name: "Tinta para marcadores", price: "10.000", image: "la45.jpg" },
  { id: 448, name: "Marcadores vinilo", price: "14.000", image: "c42.jpeg" },
  { id: 449, name: "Marcadores económicos", price: "3.500", image: "c43.jpeg" },

  //Corrector
  { id: 437, name: "Corrector brocha", price: "2.500", image: "la9.jpg" },
  { id: 438, name: "Corrector líquido", price: "5.000", image: "la22.jpg" },
  { id: 439, name: "Corrector lápiz", price: "2.000", image: "la23.jpg" },
  { id: 440, name: "Corrector cinta", price: "3.000", image: "la24.jpg" },

  //Minas
  { id: 441, name: "Minas 2.0", price: "2-000", image: "la25.jpg" },
  { id: 442, name: "Minas 0.5", price: "1.500", image: "la26.jpg" },
  { id: 443, name: "Minas 0.7", price: "1.500", image: "la27.jpg" },
  { id: 446, name: "Portaminas", price: "2.000", image: "la30.jpg" },

  //Lapiceros
  { id: 454, name: "Lapicero neón", price: "1.000", image: "la39.jpg" },
  {
    id: 434,
    name: "Lapicero detector billetes falsos",
    price: "3.000",
    image: "la6.jpg",
  },
  {
    id: 455,
    name: "Lapicero injoy kilometrico",
    price: "8.00",
    image: "la42.jpg",
  },
  { id: 456, name: "Lapicero retráctil", price: "1.000", image: "la43.jpg" },
  { id: 457, name: "Lapicero en gel", price: "1.500", image: "la44.jpg" },
  { id: 460, name: "Lapiceros en gel", price: "800", image: "la47.jpg" },

  //Lapices
  { id: 458, name: "Lápices colores", price: "4.000", image: "c52.jpeg" },
  { id: 459, name: "Lápices colores", price: "8.000", image: "c53.jpeg" },
  { id: 460, name: "Lápices colores", price: "6.600", image: "c54.jpeg" },
  { id: 461, name: "Lápices colores", price: "14.000", image: "c55.jpeg" },
  { id: 462, name: "Lápices colores", price: "10.000", image: "c56.jpeg" },
  { id: 464, name: "Lápices colores", price: "13.000", image: "c58.jpeg" },
  { id: 465, name: "Lápices colores", price: "17.000", image: "c59.jpeg" },
  { id: 444, name: "Lápiz carboncillo", price: "6.400", image: "la28.jpg" },
  { id: 445, name: "Lápiz", price: "2.000", image: "la29.jpg" },
  { id: 448, name: "Lápiz presto azul", price: "1.200", image: "la33.jpg" },
  { id: 449, name: "Lápiz mirado 2", price: "1.000", image: "la34.jpg" },

  //Colores
  { id: 504, name: "Colores jumbo", price: "18.000", image: "la202.jpg" },


  //Borrador
  { id: 469, name: "Borrador negro", price: "1.000", image: "la57.jpg" },
  { id: 473, name: "Borrador rotal", price: "800", image: "la62.jpg" },

  //Plumones
  { id: 476, name: "Plumones pincel", price: "17.000", image: "la65.jpg" },
  { id: 479, name: "Plumones surtidos", price: "11.000", image: "la68.jpg" },
  { id: 483, name: "Resaltadores pastel", price: "14.000", image: "la74.jpg" },

  //Embases
  { id: 466, name: "Embase vidrio", price: "4.000", image: "V1.jpeg" },
  { id: 467, name: "Embase vidrio redondo", price: "2.800", image: "V2.jpeg" },
  { id: 468, name: "Embase vidrio plano", price: "2.500", image: "V3.jpeg" },
  { id: 469, name: "Embase de vidrio mini", price: "4.000", image: "V4.jpeg" },

  //Baterias
  { id: 490, name: "Batería D", price: "6.800", image: "v25.jpeg" },
  { id: 491, name: "Pegante", price: "1.000", image: "v26.jpeg" },
  { id: 492, name: "Batería AA", price: "4.200", image: "v27.jpeg" },
  { id: 493, name: "Batería AA", price: "6.000", image: "v28.jpeg" },
  { id: 495, name: "Batería 9 v", price: "3.900", image: "v32.jpeg" },

  //Seccion de tigeras
  { id: 524, name: "Tijeras", price: "0", image: "v62.jpeg" },
  { id: 515, name: "Tijeras punta roma", price: "0", image: "v53.jpeg" },
  { id: 516, name: "Tijeras zig zag", price: "0", image: "v54.jpeg" },
  { id: 517, name: "Bisturí metálico", price: "0", image: "v55.jpeg" },
  { id: 518, name: "Bisturí mediano", price: "0", image: "v56.jpeg" },
  { id: 519, name: "Tijera pequeña", price: "0", image: "v57.jpeg" },
  { id: 520, name: "Tijera oficina", price: "0", image: "v58.jpeg" },
  { id: 521, name: "Bisturí pequeño", price: "0", image: "v59.jpeg" },
  { id: 522, name: "Bisturí precisión", price: "0", image: "v60.jpeg" },
  { id: 523, name: "Cuchilla bisturí", price: "0", image: "v61.jpeg" },

  //Cecsion de cintas
  { id: 468, name: "Cinta 200 yardas", price: "0", image: "la56.jpg" },
  { id: 470, name: "Cinta 50 metros", price: "0", image: "la58.jpg" },
  { id: 471, name: "Cinta aislante", price: "0", image: "la59.jpg" },
  { id: 472, name: "Cinta 40 metros", price: "0", image: "la60.jpg" },
  { id: 474, name: "Cinta transparente", price: "0", image: "la63.jpg" },
  { id: 475, name: "Cinta pequeña", price: "0", image: "la64.jpg" },
  { id: 477, name: "Cinta mediana", price: "0", image: "la66.jpg" },
  { id: 478, name: "Cinta papel", price: "0", image: "la67.jpg" },
  { id: 480, name: "Cinta transparente", price: "0", image: "la69.jpg" },
  { id: 481, name: "Cinta tesa café", price: "0", image: "la72.jpg" },
  { id: 482, name: "Cinta doble faz", price: "0", image: "la73.jpg" },
  { id: 450, name: "Cinta papel 1/2", price: "0", image: "c44.jpeg" },
  { id: 545, name: "Cinta 1/2", price: "0", image: "v187.jpeg" },
  { id: 546, name: "Cinta aislante", price: "0", image: "v188.jpeg" },
  { id: 547, name: "Cinta transparente", price: "0", image: "v189.jpeg" },
  { id: 548, name: "Cinta café", price: "0", image: "v190.jpeg" },
  { id: 549, name: "Cinta papel 1", price: "0", image: "v192.jpeg" },
  { id: 550, name: "Cinta papel 3/4", price: "0", image: "v193.jpeg" },
  { id: 541, name: "Cinta pequeña", price: "0", image: "v183.jpeg" },
  { id: 542, name: "Cinta mediana", price: "0", image: "v184.jpeg" },
  { id: 537, name: "Cinta 200 yardas", price: "0", image: "v178.jpeg" },
  { id: 538, name: "Cinta 50 metros", price: "0", image: "v179.jpeg" },
  { id: 539, name: "Cinta 40 metros", price: "0", image: "v180.jpeg" },
  { id: 488, name: "Cinta papel medio", price: "0", image: "la80.jpg" },
  { id: 489, name: "Cinta papel 3/4", price: "0", image: "la82.jpg" },
  { id: 483, name: "Porta cinta", price: "0", image: "v18.jpeg" },

  //Bolsas
  { id: 479, name: "Bolsa manija", price: "0", image: "v117.jpeg" },
  { id: 480, name: "Bolsa manija", price: "0", image: "v118.jpeg" },
  { id: 481, name: "Bolsa manija t 20", price: "0", image: "v119.jpeg" },
  { id: 482, name: "Bolsa manija t 25", price: "0", image: "v120.jpeg" },

  //otros
  { id: 470, name: "Rollo térmico", price: "0", image: "V5.jpeg" },
  { id: 471, name: "Facturero mediano", price: "0", image: "v6.jpeg" },
  { id: 472, name: "Talonario mediano", price: "0", image: "v7.jpeg" },
  { id: 473, name: "Talonario mini", price: "0", image: "v8.jpeg" },
  { id: 474, name: "Botella pequeña", price: "0", image: "v9.jpeg" },
  { id: 475, name: "Grapadora pequeña", price: "0", image: "v10.jpeg" },
  { id: 476, name: "Grapadora mediana", price: "0", image: "v11.jpeg" },
  { id: 477, name: "Perforadora 1 hueco", price: "0", image: "v12.jpeg" },
  { id: 478, name: "Perforadora 2 huecos", price: "0", image: "v13.jpeg" },
  { id: 479, name: "Talonario egreso", price: "0", image: "v14.jpeg" },
  { id: 480, name: "Grapa estándar", price: "0", image: "v15.jpeg" },
  { id: 481, name: "Clip mariposa", price: "0", image: "v16.jpeg" },
  { id: 482, name: "Barra plástica", price: "0", image: "v17.jpeg" },
  { id: 484, name: "Almohadilla sellos", price: "0", image: "v19.jpeg" },
  { id: 485, name: "Sellos", price: "0", image: "v20.jpeg" },
  { id: 486, name: "Cartuchera", price: "0", image: "v21.jpeg" },
  { id: 487, name: "Cartuchera", price: "0", image: "v22.jpeg" },
  { id: 488, name: "Cartuchera", price: "0", image: "v23.jpeg" },
  { id: 489, name: "Agenda", price: "0", image: "v24.jpeg" },
  { id: 494, name: "Regla", price: "0", image: "v34.jpeg" },
  { id: 496, name: "Transportador", price: "0", image: "v33.jpeg" },
  { id: 497, name: "Escuadra 60", price: "0", image: "v35.jpeg" },
  { id: 498, name: "Escuadra 45", price: "0", image: "v36.jpeg" },
  { id: 499, name: "Transportador 180", price: "0", image: "v37.jpeg" },
  { id: 500, name: "Juego jenga", price: "0", image: "v38.jpeg" },
  { id: 501, name: "Ajedrez pequeño", price: "0", image: "v39.jpeg" },
  { id: 502, name: "Baraja póquer", price: "0", image: "v40.jpeg" },
  { id: 503, name: "Dominó mediano", price: "0", image: "v41.jpeg" },
  { id: 504, name: "Set escuadras", price: "0", image: "v42.jpeg" },
  { id: 505, name: "Tabla didáctica", price: "0", image: "v43.jpeg" },
  { id: 506, name: "Parques", price: "0", image: "v44.jpeg" },
  { id: 507, name: "Producto", price: "0", image: "v45.jpeg" },
  { id: 508, name: "Ábacos", price: "0", image: "v46.jpeg" },
  { id: 509, name: "Foamy 1/8", price: "0", image: "v47.jpeg" },
  { id: 510, name: "Foamy 1/8", price: "0", image: "v48.jpeg" },
  { id: 511, name: "Limpia pipas", price: "0", image: "v49.jpeg" },
  { id: 512, name: "Cartulina 1/8", price: "0", image: "v50.jpeg" },
  { id: 513, name: "Rollos papel", price: "0", image: "v51.jpeg" },
  { id: 514, name: "Libro colorear", price: "0", image: "v52.jpeg" },
  { id: 525, name: "Bandas elásticas", price: "0", image: "v63.jpeg" },
  { id: 488, name: "Velas incienso", price: "0", image: "v126.jpeg" },
  { id: 433, name: "Tizas escolar", price: "0", image: "la5.jpg" },
  { id: 447, name: "Micropunta", price: "0", image: "la32.jpg" },
  { id: 450, name: "Sacapuntas depósito", price: "0", image: "la35.jpg" },
  { id: 432, name: "Carayones 12", price: "0", image: "la4.jpg" },
  { id: 451, name: "Sacapuntas lapicito", price: "0", image: "la36.jpg" },
  { id: 452, name: "Sacapuntas metálico", price: "0", image: "la37.jpg" },
  { id: 453, name: "Sacapuntas depósito", price: "0", image: "la38.jpg" },
  { id: 502, name: "Plantilla", price: "0", image: "v143.jpeg" },
  { id: 503, name: "Tigera", price: "0", image: "v141.jpeg" },
  { id: 505, name: "Regla plantilla", price: "0", image: "v144.jpeg" },
  { id: 506, name: "Diccionario inglés", price: "0", image: "v145.jpeg" },
  { id: 507, name: "Diccionario español", price: "0", image: "v146.jpeg" },
  { id: 508, name: "Legajador plástico", price: "0", image: "v147.jpeg" },
  { id: 509, name: "Sopa letras", price: "0", image: "v148.jpeg" },
  { id: 514, name: "Gancho legajador", price: "0", image: "v153.jpeg" },
  { id: 515, name: "Clip estándar", price: "0", image: "v154.jpeg" },
  { id: 516, name: "Chinche", price: "0", image: "v155.jpeg" },
  { id: 517, name: "Talonario rifa", price: "0", image: "v156.jpeg" },
  { id: 518, name: "Talonario pedido", price: "0", image: "v159.jpeg" },
  { id: 519, name: "Push pins", price: "0", image: "v160.jpeg" },
  { id: 520, name: "Pegastic", price: "0", image: "v161.jpeg" },
  { id: 521, name: "Pegante", price: "0", image: "v162.jpeg" },
  { id: 522, name: "Escarcha", price: "0", image: "v163.jpeg" },
  { id: 523, name: "Silicona barra gruesa", price: "0", image: "v164.jpeg" },
  { id: 524, name: "Recibo caja menor", price: "0", image: "v165.jpeg" },
  { id: 525, name: "Silicona barra delgada", price: "0", image: "v166.jpeg" },
  { id: 526, name: "Ega * 150g", price: "0", image: "v167.jpeg" },
  { id: 527, name: "Ega * 280g", price: "0", image: "v168.jpeg" },
  { id: 451, name: "Vinilo pequeño", price: "0", image: "c45.jpeg" },
  { id: 452, name: "Plumones punta", price: "0", image: "c46.jpeg" },
  { id: 453, name: "Témperas", price: "0", image: "c47.jpeg" },
  { id: 454, name: "Témperas", price: "0", image: "c48.jpeg" },
  { id: 455, name: "Témperas", price: "0", image: "c49.jpeg" },
  { id: 456, name: "Témperas parchesitos", price: "0", image: "c50.jpeg" },
  { id: 457, name: "Vinilo grande", price: "0", image: "c51.jpeg" },
  { id: 484, name: "Marcadores vinilo", price: "0", image: "la75.jpg" },
  { id: 485, name: "Plumones rombo", price: "0", image: "la76.jpg" },
  { id: 486, name: "Cinta papel medio", price: "0", image: "la77.jpg" },
  { id: 487, name: "Marcadores económicos", price: "0", image: "la78.jpg" },

  { id: 490, name: "Tacos periódico", price: "0", image: "la83.jpg" },
  { id: 491, name: "Tacos adhesivas", price: "0", image: "la84.jpg" },
  { id: 492, name: "Vinilo grande", price: "0", image: "la85.jpg" },
  { id: 493, name: "Vinilo pequeño", price: "0", image: "la86.jpg" },
  { id: 494, name: "Lápices colores", price: "0", image: "la87.jpg" },
  { id: 495, name: "Pates parchesitos", price: "0", image: "la88.jpg" },
  { id: 496, name: "Parchesitos colores", price: "0", image: "la89.jpg" },
  { id: 497, name: "Parchesitos colores", price: "0", image: "la92.jpg" },
  { id: 498, name: "Parchesitos colores", price: "0", image: "la94.jpg" },
  { id: 506, name: "Resaltadores de colores", price: "0", image: "la204.jpg" },
  { id: 507, name: "Plastilina", price: "0", image: "c1.jpeg" },
  { id: 508, name: "Foamy moldeable", price: "0", image: "c2.jpeg" },
  { id: 509, name: "Plastilina", price: "0", image: "c3.jpeg" },
  { id: 510, name: "Plastilina", price: "0", image: "c4.jpeg" },
  { id: 511, name: "Vasos", price: "0", image: "c5.jpeg" },
  { id: 512, name: "Pegamento", price: "0", image: "c6.jpeg" },
  { id: 513, name: "Pintura", price: "0", image: "c7.jpeg" },
  { id: 514, name: "Vinilo", price: "0", image: "c8.jpeg" },
  { id: 415, name: "Tizas", price: "0", image: "c9.jpeg" },
  { id: 416, name: "Ega", price: "0", image: "c10.jpeg" },
  { id: 417, name: "Resaltadores", price: "0", image: "c11.jpeg" },
  { id: 421, name: "Corrector", price: "0", image: "c15.jpeg" },
  { id: 422, name: "Crayones", price: "0", image: "c16.jpeg" },
  { id: 423, name: "Corrector líquido", price: "0", image: "c17.jpeg" },
  { id: 424, name: "Corrector lápiz", price: "0", image: "c18.jpeg" },
  { id: 425, name: "Corrector brocha", price: "0", image: "c19.jpeg" },
  { id: 428, name: "Micropunta", price: "0", image: "c22.jpeg" },
  { id: 446, name: "Cinta doble faz", price: "0", image: "c40.jpeg" },
  { id: 447, name: "Resaltadores pastel", price: "0", image: "c41.jpeg" },
  { id: 531, name: "Sacapuntas", price: "0", image: "v172.jpeg" },
  { id: 532, name: "Sacapuntas pequeño", price: "0", image: "v173.jpeg" },
  { id: 533, name: "Sacapuntas lapicito", price: "0", image: "v174.jpeg" },
  { id: 534, name: "Sacapuntas metálico", price: "0", image: "v175.jpeg" },
  { id: 535, name: "Tinta marcadores", price: "0", image: "v176.jpeg" },
  { id: 536, name: "Borrador", price: "0", image: "v177.jpeg" },
  { id: 540, name: "Borrador negro", price: "0", image: "v182.jpeg" },
  { id: 543, name: "Plumones surtidos", price: "0", image: "v185.jpeg" },
  { id: 544, name: "Plumones", price: "0", image: "v186.jpeg  " },
  { id: 551, name: "Taco periódico", price: "0", image: "v194.jpeg" },
  { id: 552, name: "Taco notas", price: "0", image: "v195.jpeg" },
  { id: 526, name: "Cauchos * 20", price: "0", image: "v64.jpeg" },
  { id: 527, name: "Humectador dactilar", price: "0", image: "v65.jpeg" },
  { id: 528, name: "Huellero", price: "0", image: "v66.jpeg" },
  { id: 529, name: "Metros costura", price: "0", image: "v67.jpeg" },
  { id: 530, name: "Cuchilla bisturí pequeña", price: "0", image: "v68.jpeg" },
  { id: 531, name: "Calculadora científica", price: "0", image: "v69.jpeg" },
  { id: 532, name: "Calculadora mediana", price: "0", image: "v70.jpeg" },
  { id: 533, name: "Nailon 10 libras", price: "0", image: "v71.jpeg" },
  { id: 534, name: "Compás", price: "0", image: "v72.jpeg" },
  { id: 535, name: "Lupa pequeña", price: "0", image: "v73.jpeg" },
  { id: 536, name: "Lupa grande", price: "0", image: "v74.jpeg" },
  { id: 537, name: "Lana colores", price: "0", image: "v75.jpeg" },
  { id: 538, name: "Calculadora 815", price: "0", image: "v76.jpeg" },
  { id: 539, name: "Cortaúñas mediano", price: "0", image: "v77.jpeg" },
  { id: 540, name: "Extensión 5 metros", price: "0", image: "v78.jpeg" },
  { id: 541, name: "Extensión 3 metros", price: "0", image: "v79.jpeg" },
  { id: 542, name: "Fichas para parques", price: "0", image: "v80.jpeg" },
  { id: 543, name: "Canicas", price: "0", image: "v81.jpeg" },
  { id: 544, name: "Encendedor Linterna", price: "0", image: "v82.jpeg" },
  { id: 545, name: "Cortaúñas pequeño", price: "0", image: "v83.jpeg" },
  { id: 546, name: "Pistola silicona pequeña", price: "0", image: "v84.jpeg" },
  { id: 547, name: "Pistola silicona grande", price: "0", image: "v85.jpeg" },
  { id: 548, name: "Encendedor clipper", price: "0", image: "v86.jpeg" },
  { id: 549, name: "Grinder grande 2 pisos", price: "0", image: "v87.jpeg" },
  { id: 550, name: "Grinder grande 3 pisos", price: "0", image: "v88.jpeg" },
  { id: 551, name: "Grinder pequeño 3 pisos", price: "0", image: "v89.jpeg" },
  { id: 552, name: "Candela", price: "0", image: "v90.jpeg" },
  { id: 553, name: "Grinder pequeño", price: "0", image: "v91.jpeg" },
  { id: 554, name: "Smoking clásico", price: "0", image: "v92.jpeg" },
  { id: 555, name: "Smoking orgánico", price: "0", image: "v93.jpeg" },
  { id: 556, name: "Blunt sabores", price: "0", image: "v94.jpeg" },
  { id: 557, name: "Pipa vidrio", price: "0", image: "v95.jpeg" },
  { id: 558, name: "Smoking tradicional", price: "0", image: "v96.jpeg" },
  { id: 559, name: "Pipa cerámica", price: "0", image: "v97.jpeg" },
  { id: 560, name: "Pipa pequeña", price: "0", image: "v98.jpeg" },
  { id: 561, name: "Pipa tallada", price: "0", image: "v99.jpeg" },
  { id: 562, name: "Pipa turbina", price: "0", image: "v100.jpeg" },
  { id: 563, name: "Pipa curva", price: "0", image: "v101.jpeg" },
  { id: 564, name: "Piercings", price: "0", image: "v102.jpeg" },
  { id: 565, name: "Vasos color 3.3", price: "0", image: "v103.jpeg" },
  { id: 566, name: "Vasos traslúcidos", price: "0", image: "v104.jpeg" },
  { id: 567, name: "Pipa matancera", price: "0", image: "v105.jpeg" },
  { id: 568, name: "Plato pando", price: "0", image: "v106.jpeg" },
  { id: 569, name: "Plato hondo 12 onzas", price: "0", image: "v107.jpeg" },
  { id: 570, name: "Plato pando 23 cm", price: "0", image: "v108.jpeg" },
  { id: 571, name: "Plato hondo 25 onzas", price: "0", image: "v109.jpeg" },
  { id: 572, name: "Plato hondo 30 onzas", price: "0", image: "v110.jpeg" },
  {
    id: 573,
    name: "Vasos traslúcidos 90 onzas",
    price: "0",
    image: "v111.jpeg",
  },
  {
    id: 574,
    name: "Tenedor grande desechable",
    price: "0",
    image: "v112.jpeg",
  },
  { id: 575, name: "Tenedor pequeño", price: "0", image: "v113.jpeg" },
  { id: 576, name: "Cuchara grande", price: "0", image: "v114.jpeg" },
  { id: 577, name: "Torteros fiesta", price: "0", image: "v115.jpeg" },
  { id: 578, name: "Copa flauta", price: "0", image: "v116.jpeg" },
];

const bisuteria = [
  { id: 497, name: "Joyas casuales", price: "0", image: "v135.jpeg" },
  { id: 490, name: "Joyas casuales", price: "0", image: "v128.jpeg" },
  { id: 491, name: "Joyas casuales", price: "0", image: "v129.jpeg" },
  { id: 492, name: "Joyas casuales", price: "0", image: "v130.jpeg" },
  { id: 493, name: "Joyas casuales", price: "0", image: "v131.jpeg" },
  { id: 494, name: "Reloj", price: "0", image: "v132.jpeg" },
  { id: 495, name: "Reloj", price: "0", image: "v133.jpeg" },
  { id: 496, name: "Joyas casuales", price: "0", image: "v134.jpeg" },
  { id: 498, name: "Peineta", price: "0", image: "v136.jpeg" },
  { id: 499, name: "Joyas casuales", price: "0", image: "v137.jpeg" },
  { id: 500, name: "Peineta", price: "0", image: "v138.jpeg" },
  { id: 504, name: "Peine", price: "0", image: "v142.jpeg" },
  { id: 501, name: "Peineta", price: "0", image: "v139.jpeg" },
];

//Termina la seccion de precios

//Agrega al contenedor
const sacoProductsContainer = document.getElementById("sacoProducts");
const camisaProductsContainer = document.getElementById("camisaProducts");
const mugsProductsContainer = document.getElementById("mugsProducts");
const toallasProductsContainer = document.getElementById("toallasProducts");
const indumentariaProductsContainer = document.getElementById(
  "indumentariaProducts"
);
const chalecoProductsContainer = document.getElementById("chalecoProducts");
const papeleriaProductsContainer = document.getElementById("papeleriaProducts");
const bisuteriaProductsContainer = document.getElementById("bisuteriaProducts");
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

function showbisueria() {
  bisuteriaProductsContainer.innerHTML = "";
  bisuteria.forEach((product) => {
    const productCard = createProductCard(product);
    bisuteriaProductsContainer.appendChild(productCard);
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
showbisueria();
// Función para cargar los productos en la sección de papelería

/*****************************************************************++++ */
function editarPrecio(indice) {
  // Obtener el nuevo precio ingresado por el usuario
  const nuevoPrecio = parseFloat(
    document.getElementsByClassName("input_precio")[indice].value
  );

  if (!isNaN(nuevoPrecio)) {
    // Verificar que el valor ingresado sea un número válido
    // Actualizar el precio en la página
    const precioElement = document.getElementsByClassName("precio")[indice];
    precioElement.textContent = nuevoPrecio.toFixed(3); // Mostrar el nuevo precio con tres dígitos decimales

    // También podrías considerar actualizar el precio en tu base de datos o sistema backend en este punto

    // Limpiar el campo de entrada
    document.getElementsByClassName("input_precio")[indice].value = "";
  } else {
    alert("Por favor ingresa un valor numérico válido.");
  }
}

//Aumentar la imagen tamaño completo no tocar
document.addEventListener("DOMContentLoaded", function () {
  const allProductImages = document.querySelectorAll(".productCard img");

  allProductImages.forEach((image) => {
    image.addEventListener("click", function () {
      // Crea un contenedor para la imagen ampliada y la "x" de cerrar
      const imageContainer = document.createElement("div");
      imageContainer.style.position = "fixed";
      imageContainer.style.top = "0";
      imageContainer.style.left = "0";
      imageContainer.style.width = "100%";
      imageContainer.style.height = "100%";
      imageContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      imageContainer.style.display = "flex";
      imageContainer.style.justifyContent = "center";
      imageContainer.style.alignItems = "center";
      imageContainer.style.zIndex = "9999";

      // Crea la imagen ampliada
      const zoomedImage = document.createElement("img");
      zoomedImage.src = image.src;
      zoomedImage.style.width = "65"; // Anchura al 100% del viewport
      zoomedImage.style.height = "65"; // Altura se ajustará proporcionalmente
      zoomedImage.style.maxHeight = "70vh"; // Altura máxima del 90% del viewport
      zoomedImage.style.objectFit = "auto";

      // Crea la "x" de cerrar
      const closeButton = document.createElement("span");
      closeButton.innerHTML = "X";
      closeButton.style.position = "absolute";
      closeButton.style.top = "30px";
      closeButton.style.right = "10px";
      closeButton.style.fontSize = "40px";
      closeButton.style.color = "red";
      closeButton.style.cursor = "pointer";

      // Agrega la imagen ampliada y la "x" de cerrar al contenedor
      imageContainer.appendChild(zoomedImage);
      imageContainer.appendChild(closeButton);

      // Agrega el contenedor al cuerpo del documento
      document.body.appendChild(imageContainer);

      // Cierra la imagen ampliada al hacer clic en la "x"
      closeButton.addEventListener("click", function () {
        document.body.removeChild(imageContainer);
      });
    });
  });
});

/* Para que la fecha se actualice cada año */
function getYear() {
  return new Date().getFullYear();
}

// Función para actualizar el año en la página
function updateYear() {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = `@ ${getYear()}`;
  }
}

// Llama a la función para actualizar el año cuando se carga la página
window.addEventListener("DOMContentLoaded", updateYear);

// Programa una actualización anual
setInterval(updateYear, 31536000000);
