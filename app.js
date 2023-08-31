/* ******************************************************************************* */
//SECCION DE DESAYUNOS Y ANCHETAS  DONDE SE EXPORTAN IMAGENES Y PRECIOS
//Nota la seccion de saco es la seccion de desayunos y tambien anchetas
/* ******************************************************************************** */

const sacos = [
  { id: 101, name: "Desayuno Sorpresa", price: "21.000", image: "piñauno.jpg" },
  { id: 102, name: "Desayuno sorpresa", price: "0", image: "piñados.jpeg" },
  { id: 103, name: "Ancheta", price: "0", image: "piñatres.jpeg" },
  { id: 104, name: "Ancheta", price: "0", image: "piñacuatro.jpeg" },
  { id: 105, name: "Ancheta", price: "0", image: "piñacinco.jpeg" },
  { id: 106, name: "Ancheta", price: "0", image: "piñaseis.jpeg" },
  { id: 107, name: "Desayuno sorpresa", price: "0", image: "piñasiete.jpeg" },
  { id: 109, name: "Desayuno sorpresa", price: "0", image: "piñaocho.jpeg" },
  { id: 110, name: "Desayuno sorpresa", price: "0", image: "piñanueve.jpeg" },
  { id: 112, name: "Ancheta", price: "0", image: "piñadies.jpeg" },
  { id: 112, name: "Ancheta", price: "0", image: "piñaonce.jpeg" },
  { id: 113, name: "globo", price: "0", image: "piñadoce.jpeg" },
  { id: 114, name: "Desayuno", price: "0", image: "piñatrece.jpeg" },
  { id: 115, name: "Ancheta", price: "0", image: "piñacatorce.jpeg" },
  { id: 116, name: "Desayuno", price: "0", image: "piñaquince.jpeg" },
  { id: 117, name: "Ancheta", price: "0", image: "piñadieciceis.jpeg" },
  { id: 118, name: "Ancheta", price: "0", image: "piñadieciciete.jpeg" },
  { id: 119, name: "Ancheta", price: "0", image: "piñadieciocho.jpeg" },
  { id: 120, name: "Ancheta", price: "0", image: "piñadiecinueve.png" },
  { id: 121, name: "Ancheta", price: "0", image: "piñaveinte.png" },
  { id: 122, name: "Ancheta", price: "0", image: "piñaveintiuno.png" },
  { id: 123, name: "Ancheta", price: "0", image: "piñaveintidos.png" },
  { id: 124, name: "Ancheta", price: "0", image: "piñaventitres.png" },
  { id: 125, name: "Ancheta", price: "0", image: "ancheta.jpeg" },
  { id: 126, name: "Ancheta", price: "0", image: "ancheta2.jpeg" },

  // Agrega más sacos aquí
];

//SECCION DE PELUCHES  DONDE SE EXPORTAN IMAGENES Y PRECIOS
const camisas = [
  { id: 200, name: "Peluche", price: "0", image: "peluuno.jpg" },
  { id: 201, name: "Peluche", price: "0", image: "peludos.jpg" },
  { id: 202, name: "Peluche", price: "0", image: "pelutres.jpg" },
  { id: 203, name: "Peluche", price: "0", image: "pelucuaatro.jpg" },
  { id: 204, name: "Peluche", price: "0", image: "pelucinco.jpg" },
  { id: 205, name: "Peluche", price: "0", image: "peluseis.jpg" },
  { id: 206, name: "Peluche", price: "0", image: "pelusiete.jpg" },
  { id: 207, name: "Peluche", price: "0", image: "peluocho.jpg" },
  { id: 208, name: "Peluche", price: "0", image: "pelunueve.jpg" },
  { id: 209, name: "Peluche", price: "0", image: "peludies.jpg" },
  { id: 210, name: "Peluche", price: "0", image: "peluonce.jpg" },
  { id: 211, name: "Peluche", price: "0", image: "peludoce.jpg" },
  { id: 212, name: "Peluche", price: "0", image: "pelutrece.jpg" },
  { id: 213, name: "Peluche", price: "0", image: "pelucatorce.jpg" },
  { id: 214, name: "Peluche", price: "0", image: "peluquince.jpg" },
  { id: 215, name: "Peluche", price: "0", image: "peludiecicite.jpg" },
  { id: 216, name: "Peluche", price: "0", image: "peludieciocho.jpg" },
  { id: 217, name: "Peluche", price: "0", image: "peludiecinueve.jpg" },
  { id: 218, name: "Peluche", price: "0", image: "peluveintiuno.jpg" },
  { id: 219, name: "Peluche", price: "0", image: "peluveintidos.jpg" },
  { id: 220, name: "Peluche", price: "0", image: "peluveintitres.jpg" },
  { id: 221, name: "Peluche", price: "0", image: "peluveinticuatro.jpg" },
  { id: 222, name: "Peluche", price: "0", image: "peluveinticinco.jpg" },
  { id: 223, name: "Peluche", price: "0", image: "peluveintinueve.jpg" },
  { id: 224, name: "Peluche", price: "0", image: "pelutreintatres.jpg" },
  { id: 225, name: "Peluche", price: "0", image: "pelutreintaicuatro.jpg" },
  // Agrega más camisas aquí
];

// SECCION PIÑATERIA DONDE SE EXPORTAN IMAGENES Y PRECIOS
const mugs = [
  { id: 300, name: "Caja decoración", price: "20.000", image: "puno.jpg" },
  { id: 301, name: "Caja decoración", price: "0", image: "pdos.jpg" },
  { id: 302, name: "Velas", price: "0", image: "ptres.jpg" },
  { id: 303, name: "Velas", price: "0", image: "pcuatro.jpg" },
  { id: 304, name: "Globos", price: "0", image: "pcinco.jpg" },
  { id: 202, name: "Producto", price: "0", image: "pseis.jpg" },
  { id: 201, name: "LLuvia  sobres", price: "0", image: "psiete.jpg" },
  { id: 202, name: "Flores de  tela", price: "0", image: "pocho.jpg" },
  { id: 201, name: "Lanza confetis", price: "0", image: "pnueve.jpg" },
  { id: 202, name: "Velas volcan", price: "0", image: "pdies.jpg" },
  { id: 202, name: "Espuma fiesta", price: "0", image: "ponce.jpg" },
  { id: 202, name: "Globo  ocasión", price: "0", image: "pdoce.jpg" },
  { id: 202, name: "Posillo mugs", price: "0", image: "ptrece.jpg" },
  { id: 202, name: "velas emojis", price: "0", image: "pcatorce.jpg" },
  { id: 202, name: "velas emojis", price: "0", image: "pquince.jpg" },
  { id: 202, name: "velas magicas", price: "0", image: "pdieciceis.jpg" },
  { id: 202, name: "Cortina surtida", price: "0", image: "pveinte.jpg" },
  { id: 202, name: "Velas cervezas", price: "0", image: "pdieciocho.jpg" },
  { id: 202, name: "Velas de  números", price: "0", image: "pdiecinueve.jpg" },
  { id: 202, name: "Bouquest ocación", price: "0", image: "p21.jpg" },
  { id: 202, name: "Bouquest baby shawer", price: "0", image: "p22.jpg" },
  { id: 201, name: "Manteles surtidos", price: "0", image: "p73.jpg" },
  { id: 202, name: "Globos numero 32", price: "0", image: "p24.jpg" },
  { id: 201, name: "Velas para adultos", price: "0", image: "p25.jpg" },
  { id: 202, name: "Bouquest animes", price: "0", image: "p26.jpg" },
  { id: 201, name: "Bouquest animes", price: "0", image: "p27.jpg" },
  { id: 202, name: "Bouquest súper heroes", price: "0", image: "p28.jpg" },
  { id: 202, name: "Globos mil figuras", price: "0", image: "p29.jpg" },
  { id: 202, name: "Globos 32 corazón", price: "0", image: "p30.jpg" },
  { id: 202, name: "Globos love decoración", price: "0", image: "p31.jpg" },
  { id: 202, name: "Globos Happy birthday", price: "0", image: "p32.jpg" },
  { id: 202, name: "Diademas fiesta", price: "0", image: "p33.jpg" },
  { id: 202, name: "Infladores globos", price: "0", image: "p34.jpg" },
  { id: 202, name: "Bombas R9", price: "0", image: "p35.jpg" },
  { id: 202, name: "Serpentinas", price: "0", image: "p36.jpg" },
  { id: 202, name: "Globos R9", price: "0", image: "p37.jpg" },
  { id: 202, name: "Antifaces", price: "0", image: "p38.jpg" },
  { id: 202, name: "Globos R9", price: "0", image: "p40.jpg" },
  { id: 201, name: "Velas", price: "0", image: "p41.jpg" },
  { id: 202, name: "Cuadro especial", price: "0", image: "p42.jpg" },
  { id: 201, name: "Velas cumpleaños", price: "0", image: "p43.jpg" },
  { id: 202, name: "Caja decoración", price: "0", image: "p44.jpg" },
  { id: 201, name: "Velas", price: "0", image: "p45.jpg" },
  { id: 202, name: "Cuadro", price: "0", image: "p46.jpg" },
  { id: 202, name: "Decoración", price: "0", image: "p47.jpg" },
  { id: 202, name: "Decoración", price: "0", image: "p48.jpg" },
  { id: 202, name: "Decoración", price: "0", image: "p49.jpg" },
  { id: 202, name: "Decoración", price: "0", image: "p50.jpg" },
  { id: 202, name: "Caja decoración", price: "0", image: "p51.jpg" },
  { id: 202, name: "Caja decoración", price: "0", image: "p52.jpg" },
  { id: 202, name: "Caja decoración", price: "0", image: "p53.jpg" },
  { id: 202, name: "Caja", price: "0", image: "p55.jpg" },
  { id: 202, name: "Decoración", price: "0", image: "p56.jpg" },
  { id: 202, name: "Bombas R12", price: "0", image: "p57.jpg" },
  { id: 202, name: "Decoración", price: "0", image: "p58.jpg" },
  { id: 201, name: "Decoración", price: "0", image: "p59.jpg" },
  { id: 202, name: "Decoración", price: "0", image: "p60.jpg" },
  { id: 201, name: "Decoración", price: "0", image: "p61.jpg" },
  { id: 202, name: "Decoración", price: "0", image: "p62.jpg" },
  { id: 201, name: "Decoración", price: "0", image: "p63.jpg" },
  { id: 202, name: "Decoración", price: "0", image: "p64.jpg" },
  { id: 202, name: "Decoración", price: "0", image: "p65.jpg" },
  { id: 202, name: "Decoración", price: "0", image: "p66.jpg" },
  { id: 202, name: "Decoración", price: "0", image: "p67.jpg" },
  { id: 202, name: "Decoración", price: "0", image: "p68.jpg" },
  { id: 202, name: "Decoración", price: "0", image: "p69.jpg" },
  { id: 202, name: "Manteles", price: "0", image: "p73.jpg" },
  { id: 202, name: "Cuadros", price: "0", image: "p74.jpg" },
  { id: 202, name: "Llaveros", price: "0", image: "p75.jpg" },
  { id: 202, name: "Decoración", price: "0", image: "p76.jpg" },
  { id: 202, name: "Caja", price: "0", image: "p77.jpg" },

  // Agrega más camisas aquí
];

//SECCION DE PAPELERIA, DONDE SE IMPORTAN IMAGENES Y PRECIOS
const papeleria = [
  { id: 101, name: "Carpeta yute ", price: "8.000", image: "pa2.jpeg" },
  { id: 102, name: "Carpeta colgante", price: "0", image: "pa3.jpeg" },
  { id: 101, name: "Carpeta color cafe", price: "0", image: "pa4.jpeg" },
  { id: 101, name: "Carpeta Blanca", price: "0", image: "pa5.jpeg" },
  { id: 101, name: "Carpeta plastica con fuelle", price: 0, image: "pa6.jpeg" },
  { id: 101, name: "Carpeta grande", price: "0", image: "pa7.jpeg" },
  { id: 101, name: "Carpeta plastica", price: "0", image: "pa8.jpeg" },
  { id: 101, name: "Carpeta plastica", price: "0", image: "pa9.jpeg" },
  { id: 101, name: "Carpeta plastica", price: "0", image: "pa22.jpeg" },
  { id: 101, name: "Resma carta blanca", price: "0", image: "pa23.jpeg" },
  { id: 101, name: "Resma blanca oficio", price: "0", image: "pa24.jpeg" },
  { id: 101, name: "Acetatos", price: "0", image: "pa25.jpeg" },
  { id: 101, name: "80 hojas cuadriculado", price: "0", image: "pa27.jpeg" },
  { id: 101, name: "Cuaderno argollado 100", price: "0", image: "pa28.jpeg" },
  { id: 101, name: "Blog milimetrado zeppeling", price: 0, image: "pa33.jpeg" },
  { id: 101, name: "Resma papel", price: "0", image: "pa34.jpeg" },
  { id: 101, name: "Cuaderno argollado 100", price: "0", image: "pa35.jpeg" },
  { id: 101, name: "Cuaderno grapados 50 ", price: "0", image: "pa36.jpeg" },
  { id: 101, name: "Agendas", price: "0", image: "pa39.jpeg" },
  { id: 101, name: "Block carta", price: "0", image: "pa40.jpeg" },
  { id: 101, name: "Stiquers", price: "0", image: "pa42.jpeg" },
  { id: 101, name: "Cuaderno argollado", price: "0", image: "pa43.jpeg" },
  { id: 101, name: "Cuaderno cocido", price: "0", image: "pa44.jpeg" },
  { id: 101, name: "Block tamaño oficio", price: "0", image: "pa45.jpeg" },
  { id: 101, name: "Cuaderno 7 materias", price: "0", image: "pa46.jpeg" },
  { id: 101, name: "Cuaderno 5 materias", price: "0", image: "pa47.jpeg" },
  { id: 101, name: "Tabla legajadora", price: "0", image: "pa48.jpeg" },
  { id: 101, name: "Plancha para dibujo", price: "0", image: "pa49.jpeg" },
  { id: 101, name: "Papel mantequilla", price: "0", image: "pa50.jpeg" },
  { id: 101, name: "Carpeta sobre plastica", price: "0", image: "pa56.jpeg" },
  { id: 101, name: "Carpeta plastica", price: "0", image: "pa54.jpeg" },
  { id: 101, name: "Marcador pelikan ", price: "0", image: "la3.jpg" },
  { id: 101, name: "Carayones 12 ", price: "0", image: "la4.jpg" },
  { id: 101, name: "Tizas escolar ", price: "0", image: "la5.jpg" },
  { id: 101, name: "Lapicero detector ", price: "0", image: "la6.jpg" },
  { id: 101, name: "Marcador liquida ", price: "0", image: "la7.jpg" },
  { id: 101, name: "Marcador cafe ", price: "0", image: "la8.jpg" },
  { id: 101, name: "Corrector brocha ", price: "0", image: "la9.jpg" },
  { id: 101, name: "Corrector liquido ", price: "0", image: "la22.jpg" },
  { id: 101, name: "Corrector lapiz ", price: "0", image: "la23.jpg" },
  { id: 101, name: "Corrector cinta ", price: "0", image: "la24.jpg" },
  { id: 101, name: "Minas 2.0 ", price: "0", image: "la25.jpg" },
  { id: 101, name: "Minas 0.5 ", price: "0", image: "la26.jpg" },
  { id: 101, name: "Minas 0.7 ", price: "0", image: "la27.jpg" },
  { id: 101, name: "Lapiz carboncillo ", price: "0", image: "la28.jpg" },
  { id: 101, name: "Lapiz", price: "0", image: "la29.jpg" },
  { id: 101, name: "Portaminas ", price: "0", image: "la30.jpg" },
  { id: 101, name: "Micropunta ", price: "0", image: "la32.jpg" },
  { id: 101, name: "Lápiz presto azul ", price: "0", image: "la33.jpg" },
  { id: 101, name: "Lápiz mirado 2 ", price: "0", image: "la34.jpg" },
  { id: 101, name: "Sacapuntas depósito ", price: "0", image: "la35.jpg" },
  { id: 101, name: "Sacapuntas lapicito ", price: "0", image: "la36.jpg" },
  { id: 101, name: "Sacapuntas metalico ", price: "0", image: "la37.jpg" },
  { id: 101, name: "Sacapuntas deposito ", price: "0", image: "la38.jpg" },
  { id: 101, name: "Lapicero neon ", price: "0", image: "la39.jpg" },
  { id: 101, name: "Lapicero injoy ", price: "0", image: "la42.jpg" },
  { id: 101, name: "Lapicero retractil ", price: "0", image: "la43.jpg" },
  { id: 101, name: "Lapicero en gel ", price: "0", image: "la44.jpg" },
  { id: 101, name: "Tinta para marcadores ", price: "0", image: "la45.jpg" },
  { id: 101, name: "Marcadores punta fina ", price: "0", image: "la46.jpg" },
  { id: 101, name: "Lapiceros en gel ", price: "0", image: "la47.jpg" },
  { id: 101, name: "Marcadores surtidos ", price: "0", image: "la48.jpg" },
  { id: 101, name: "Marcador borrables ", price: "0", image: "la49.jpg" },
  { id: 101, name: "Marcadores eterna ", price: "0", image: "la50.jpg" },
  { id: 101, name: "Marcadores borrable ", price: "0", image: "la52.jpg" },
  { id: 101, name: "Marcador borrable ", price: "0", image: "la53.jpg" },
  { id: 101, name: "Marcadores sharpie ", price: "0", image: "la54.jpg" },
  { id: 101, name: "Marcadores metalizados ", price: "0", image: "la55.jpg" },
  { id: 101, name: "Cinta 200 yardas ", price: "0", image: "la56.jpg" },
  { id: 101, name: "Borrador negro ", price: "0", image: "la57.jpg" },
  { id: 101, name: "Cinta 50 metros ", price: "0", image: "la58.jpg" },
  { id: 101, name: "Cinta aislante ", price: "0", image: "la59.jpg" },
  { id: 101, name: "Cinta 40 metros ", price: "0", image: "la60.jpg" },
  { id: 101, name: "Borrador rotal ", price: "0", image: "la62.jpg" },
  { id: 101, name: "Cinta trasparente ", price: "0", image: "la63.jpg" },
  { id: 101, name: "Cinta pequeña ", price: "0", image: "la64.jpg" },
  { id: 101, name: "Plumones pincel ", price: "0", image: "la65.jpg" },
  { id: 101, name: "Cinta mediana ", price: "0", image: "la66.jpg" },
  { id: 101, name: "Cinta papel ", price: "0", image: "la67.jpg" },
  { id: 101, name: "Plumones surtidos ", price: "0", image: "la68.jpg" },
  { id: 101, name: "Cinta trasparente ", price: "0", image: "la69.jpg" },
  { id: 101, name: "Cinta tesa cafe ", price: "0", image: "la72.jpg" },
  { id: 101, name: "Cinta doble faz ", price: "0", image: "la73.jpg" },
  { id: 101, name: "Resaltadores pastel ", price: "0", image: "la74.jpg" },
  { id: 101, name: "Marcadores vinilo ", price: "0", image: "la75.jpg" },
  { id: 101, name: "Plumones rombo ", price: "0", image: "la76.jpg" },
  { id: 101, name: "Cinta papel medio ", price: "0", image: "la77.jpg" },
  { id: 101, name: "Marcadores economicos ", price: "0", image: "la78.jpg" },
  { id: 101, name: "Cinta papel medio ", price: "0", image: "la80.jpg" },
  { id: 101, name: "Cinta papel 3/4 ", price: "0", image: "la82.jpg" },
  { id: 101, name: "Tacos periódico ", price: "0", image: "la83.jpg" },
  { id: 101, name: " Tacos adesivas", price: "0", image: "la84.jpg" },
  { id: 101, name: "Vinilo grande ", price: "0", image: "la85.jpg" },
  { id: 101, name: "Vinilo pequeño ", price: "0", image: "la86.jpg" },
  { id: 101, name: "Lápices colores ", price: "0", image: "la87.jpg" },
  { id: 101, name: "Pates parchesitos ", price: "0", image: "la88.jpg" },
  { id: 101, name: "Parchesitos colores ", price: "0", image: "la89.jpg" },
  { id: 101, name: "Parchesitos colores ", price: "0", image: "la92.jpg" },
  { id: 101, name: "Parchesitos colores ", price: "0", image: "la94.jpg" },
  { id: 101, name: "Colores ", price: "0", image: "la96.jpg" },
  { id: 101, name: "Colores ", price: "0", image: "la96.jpg" },
  { id: 101, name: "Colores ", price: "0", image: "la97.jpg" },
  { id: 101, name: "Colores ", price: "0", image: "la99.jpg" },
  { id: 101, name: "Colores ", price: "0", image: "la200.jpg" },
  { id: 101, name: "Colores ", price: "0", image: "la202.jpg" },
  { id: 101, name: "Colores Norma ", price: "0", image: "la203.jpg" },
  { id: 101, name: "Resaltadores de colores ", price: "0", image: "la204.jpg" },
  { id: 101, name: "Plastilina ", price: "0", image: "c1.jpeg" },
  { id: 101, name: "Foamy moldeable ", price: "0", image: "c2.jpeg" },
  { id: 101, name: "Plastilina ", price: "0", image: "c3.jpeg" },
  { id: 101, name: "Plastilina ", price: "0", image: "c4.jpeg" },
  { id: 101, name: "Vasos ", price: "0", image: "c5.jpeg" },
  { id: 101, name: "Pegamento ", price: 0, image: "c6.jpeg" },
  { id: 101, name: "Pintura ", price: 0, image: "c7.jpeg" },
  { id: 101, name: "vinilo ", price: 0, image: "c8.jpeg" },
  { id: 101, name: "Tizas ", price: 0, image: "c9.jpeg" },
  { id: 101, name: "Ega ", price: 0, image: "c10.jpeg" },
  { id: 101, name: "Resaltadores ", price: 0, image: "c11.jpeg" },
  { id: 101, name: "Marcadores ", price: 0, image: "c12.jpeg" },
  { id: 101, name: "Marcadores ", price: 0, image: "c13.jpeg" },
  { id: 101, name: "Marcadores ", price: 0, image: "c14.jpeg" },
  { id: 101, name: "Corrector ", price: 0, image: "c15.jpeg" },
  { id: 101, name: "Crayones ", price: 0, image: "c16.jpeg" },
  { id: 101, name: "Corrector liquido ", price: 0, image: "c17.jpeg" },
  { id: 101, name: "Corrector lapiz ", price: 0, image: "c18.jpeg" },
  { id: 101, name: "Corrector brocha", price: 0, image: "c19.jpeg" },
  { id: 101, name: "Mina ", price: 0, image: "c20.jpeg" },
  { id: 101, name: "Portamina ", price: 0, image: "c21.jpeg" },
  { id: 101, name: "Micropunta ", price: 0, image: "c22.jpeg" },
  { id: 101, name: "Lápiz dibujo ", price: 0, image: "c23.jpeg" },
  { id: 101, name: "Lápiz presto  ", price: 0, image: "c24.jpeg" },
  { id: 101, name: "Lápiz car ", price: 0, image: "c25.jpeg" },
  { id: 101, name: "Lápiceros neon ", price: 0, image: "c26.jpeg" },
  { id: 101, name: "Lapiz mirado 2 ", price: 0, image: "c27.jpeg" },
  { id: 101, name: "Lapiceros Retractil ", price: 0, image: "c28.jpeg" },
  { id: 101, name: "Lápiceros en gel ", price: 0, image: "c29.jpeg" },
  { id: 101, name: "Lapiceros injoy ", price: 0, image: "c30.jpeg" },
  { id: 101, name: "Marcadores punta ", price: 0, image: "c31.jpeg" },
  { id: 101, name: "Lapiceros ", price: 0, image: "c32.jpeg" },
  { id: 101, name: "Marcadores ", price: 0, image: "c33.jpeg" },
  { id: 101, name: "Marcadores ", price: 0, image: "c34.jpeg" },
  { id: 101, name: "Marcadores borrable ", price: 0, image: "c35.jpeg" },
  { id: 101, name: "Marcadores eterna ", price: 0, image: "c36.jpeg" },
  { id: 101, name: "Marcadores sharpie ", price: 0, image: "c37.jpeg" },
  { id: 101, name: "Marcadores sharpie ", price: 0, image: "c38.jpeg" },
  { id: 101, name: "Marcadores offiplus ", price: 0, image: "c39.jpeg" },
  { id: 101, name: "Cinta doble faz ", price: 0, image: "c40.jpeg" },
  { id: 101, name: "Resaltadores pastel ", price: 0, image: "c41.jpeg" },
  { id: 101, name: "Marcadores vinilo ", price: 0, image: "c42.jpeg" },
  { id: 101, name: "Marcadores económicos ", price: 0, image: "c43.jpeg" },
  { id: 101, name: "Cinta papel 1/2 ", price: 0, image: "c44.jpeg" },
  { id: 101, name: "Vinilo pequeño ", price: 0, image: "c45.jpeg" },
  { id: 101, name: "Plumones punta ", price: 0, image: "c46.jpeg" },
  { id: 101, name: "Témperas ", price: 0, image: "c47.jpeg" },
  { id: 101, name: "Témperas ", price: 0, image: "c48.jpeg" },
  { id: 101, name: "Témperas ", price: 0, image: "c49.jpeg" },
  { id: 101, name: "Témperas parchesitos ", price: 0, image: "c50.jpeg" },
  { id: 101, name: "Vinilo grande ", price: 0, image: "c51.jpeg" },
  { id: 101, name: "Lápices colores ", price: 0, image: "c52.jpeg" },
  { id: 101, name: "Lápices colores ", price: 0, image: "c53.jpeg" },
  { id: 101, name: "Lápices colores ", price: 0, image: "c54.jpeg" },
  { id: 101, name: "Lápices colores ", price: 0, image: "c55.jpeg" },
  { id: 101, name: "Lápices colores ", price: 0, image: "c56.jpeg" },
  { id: 101, name: "Lápices colores ", price: 0, image: "c57.jpeg" },
  { id: 101, name: "Lápices colores ", price: 0, image: "c58.jpeg" },
  { id: 101, name: "Lápices colores ", price: 0, image: "c59.jpeg" },
  { id: 101, name: "Lápices colores ", price: 0, image: "c60.jpeg" },
  { id: 101, name: "Emvase vidrio ", price: 0, image: "V1.jpeg" },
  { id: 101, name: "Emvase vidrio redondo ", price: 0, image: "V2.jpeg" },
  { id: 101, name: "Emvase vidrio plano ", price: 0, image: "V3.jpeg" },
  { id: 101, name: "Emvase de vidrio mini  ", price: 0, image: "V4.jpeg" },
  { id: 101, name: "Rollo termico  ", price: 0, image: "V5.jpeg" },
  { id: 101, name: "Facturero mediano  ", price: 0, image: "v6.jpeg" },
  { id: 101, name: "Talonario mediano  ", price: 0, image: "v7.jpeg" },
  { id: 101, name: "Talonario mini  ", price: 0, image: "v8.jpeg" },
  { id: 101, name: "Botella pequeña  ", price: 0, image: "v9.jpeg" },
  { id: 101, name: "Grapadora pequeña  ", price: 0, image: "v10.jpeg" },
  { id: 101, name: "Grapadora mediana  ", price: 0, image: "v11.jpeg" },
  { id: 101, name: "Perforadora 1 hueco  ", price: 0, image: "v12.jpeg" },
  { id: 101, name: "Perforadora 2 huecos  ", price: 0, image: "v13.jpeg" },
  { id: 101, name: "Talonario egreso  ", price: 0, image: "v14.jpeg" },
  { id: 101, name: "Grapa standar  ", price: 0, image: "v15.jpeg" },
  { id: 101, name: "Clip mariposa  ", price: 0, image: "v16.jpeg" },
  { id: 101, name: "Barra plastica  ", price: 0, image: "v17.jpeg" },
  { id: 101, name: "Porta cinta  ", price: 0, image: "v18.jpeg" },
  { id: 101, name: "Almohadilla sellos  ", price: 0, image: "v19.jpeg" },
  { id: 101, name: "Sellos  ", price: 0, image: "v20.jpeg" },
  { id: 101, name: "Cartuchera  ", price: 0, image: "v21.jpeg" },
  { id: 101, name: "Cartuchera  ", price: 0, image: "v22.jpeg" },
  { id: 101, name: "Cartuchera  ", price: 0, image: "v23.jpeg" },
  { id: 101, name: "Agenda  ", price: 0, image: "v24.jpeg" },
  { id: 101, name: "Bateria D  ", price: 0, image: "v25.jpeg" },
  { id: 101, name: "Pegante  ", price: 0, image: "v26.jpeg" },
  { id: 101, name: "Bateria AA  ", price: 0, image: "v27.jpeg" },
  { id: 101, name: "Bateria AA  ", price: 0, image: "v28.jpeg" },
  { id: 101, name: "Regla  ", price: 0, image: "v34.jpeg" },
  { id: 101, name: "Bateria  ", price: 0, image: "v32.jpeg" },
  { id: 101, name: "Transportador  ", price: 0, image: "v33.jpeg" },
  { id: 101, name: "Escuadra 60   ", price: 0, image: "v35.jpeg" },
  { id: 101, name: "Escuadra 45  ", price: 0, image: "v36.jpeg" },
  { id: 101, name: "Trasportador 180  ", price: 0, image: "v37.jpeg" },
  { id: 101, name: "Juego jenga  ", price: 0, image: "v38.jpeg" },
  { id: 101, name: "Ajedrez pequeño  ", price: 0, image: "v39.jpeg" },
  { id: 101, name: "Baraja poquer", price: 0, image: "v40.jpeg" },
  { id: 101, name: "Domino mediano  ", price: 0, image: "v41.jpeg" },
  { id: 101, name: "Set escuadras  ", price: 0, image: "v42.jpeg" },
  { id: 101, name: "Tabla didáctica  ", price: 0, image: "v43.jpeg" },
  { id: 101, name: "Parques  ", price: 0, image: "v44.jpeg" },
  { id: 101, name: "Producto  ", price: 0, image: "v45.jpeg" },
  { id: 101, name: "Abacos  ", price: 0, image: "v46.jpeg" },
  { id: 101, name: "Foamy 1/8  ", price: 0, image: "v47.jpeg" },
  { id: 101, name: "Foamy 1/8  ", price: 0, image: "v48.jpeg" },
  { id: 101, name: "Limpapipas  ", price: 0, image: "v49.jpeg" },
  { id: 101, name: "Cartulina 1/8  ", price: 0, image: "v50.jpeg" },
  { id: 101, name: "Rollos papel  ", price: 0, image: "v51.jpeg" },
  { id: 101, name: "Libro colorear  ", price: 0, image: "v52.jpeg" },
  { id: 101, name: "Tigeras punta roma  ", price: 0, image: "v53.jpeg" },
  { id: 101, name: "Tigeras zig zag", price: 0, image: "v54.jpeg" },
  { id: 101, name: "Bisturí metálico", price: 0, image: "v55.jpeg" },
  { id: 101, name: "Bisturí mediano", price: 0, image: "v56.jpeg" },
  { id: 101, name: "Tigera pequeña", price: 0, image: "v57.jpeg" },
  { id: 101, name: "Tigera oficina", price: 0, image: "v58.jpeg" },
  { id: 101, name: "Bisturí pequeño", price: 0, image: "v59.jpeg" },
  { id: 101, name: "Bisturí precisión", price: 0, image: "v60.jpeg" },
  { id: 101, name: "Cuchilla bisturí", price: 0, image: "v61.jpeg" },
  { id: 101, name: "Tigeras", price: 0, image: "v62.jpeg" },
  { id: 101, name: "Bandas elásticas", price: 0, image: "v63.jpeg" },
  { id: 101, name: "Cauchos * 20", price: 0, image: "v64.jpeg" },
  { id: 101, name: "Humectador dactilar", price: 0, image: "v65.jpeg" },
  { id: 101, name: "Huellero", price: 0, image: "v66.jpeg" },
  { id: 101, name: "Metros costura", price: 0, image: "v67.jpeg" },
  { id: 101, name: "Cuchilla bisturí pequeña", price: 0, image: "v68.jpeg" },
  { id: 101, name: "Calculadora cientifica", price: 0, image: "v69.jpeg" },
  { id: 101, name: "Calculadora mediana", price: 0, image: "v70.jpeg" },
  { id: 101, name: "Nailon 10 libras", price: 0, image: "v71.jpeg" },
  { id: 101, name: "Compás", price: 0, image: "v72.jpeg" },
  { id: 101, name: "Lupa pequeña", price: 0, image: "v73.jpeg" },
  { id: 101, name: "Lupa grande", price: 0, image: "v74.jpeg" },
  { id: 101, name: "Lana colores", price: 0, image: "v75.jpeg" },
  { id: 101, name: "Calculadora 815", price: 0, image: "v76.jpeg" },
  { id: 101, name: "Cortaúñas mediano ", price: 0, image: "v77.jpeg" },
  { id: 101, name: "Extensión 5 metros", price: 0, image: "v78.jpeg" },
  { id: 101, name: "Extensión 3 metros", price: 0, image: "v79.jpeg" },
  { id: 101, name: "Fichas para parques", price: 0, image: "v80.jpeg" },
  { id: 101, name: "Canicas", price: 0, image: "v81.jpeg" },
  { id: 101, name: "Encendedor Linterna", price: 0, image: "v82.jpeg" },
  { id: 101, name: "Cortaúñas pequeño", price: 0, image: "v83.jpeg" },
  { id: 101, name: "Pistola silicona pequeña", price: 0, image: "v84.jpeg" },
  { id: 101, name: "Pistola silicona grande", price: 0, image: "v85.jpeg" },
  { id: 101, name: "Encendedor clipper", price: 0, image: "v86.jpeg" },
  { id: 101, name: "Grinder grande 2 pisos", price: 0, image: "v87.jpeg" },
  { id: 101, name: "Grinder grande 3 pisos", price: 0, image: "v88.jpeg" },
  { id: 101, name: "Grinder pequeño 3 pisos", price: 0, image: "v89.jpeg" },
  { id: 101, name: "Candela", price: 0, image: "v90.jpeg" },
  { id: 101, name: "Grinder pequeño", price: 0, image: "v91.jpeg" },
  { id: 101, name: "Smoking clasico", price: 0, image: "v92.jpeg" },
  { id: 101, name: "Smoking organico", price: 0, image: "v93.jpeg" },
  { id: 101, name: "Blunt sabores", price: 0, image: "v94.jpeg" },
  { id: 101, name: "Pipa vidrio", price: 0, image: "v95.jpeg" },
  { id: 101, name: "Smoking tradicional", price: 0, image: "v96.jpeg" },
  { id: 101, name: "Pipa cerámica", price: 0, image: "v97.jpeg" },
  { id: 101, name: "Pipa pequeña", price: 0, image: "v98.jpeg" },
  { id: 101, name: "Pipa tallada", price: 0, image: "v99.jpeg" },
  { id: 101, name: "Pipa turbina", price: 0, image: "v100.jpeg" },
  { id: 101, name: "Pipa curva", price: 0, image: "v101.jpeg" },
  { id: 101, name: "piercings", price: 0, image: "v102.jpeg" },
  { id: 101, name: "Vasos color 3.3", price: 0, image: "v103.jpeg" },
  { id: 101, name: "Vaos traslúcidos", price: 0, image: "v104.jpeg" },
  { id: 101, name: "Pipa matancera", price: 0, image: "v105.jpeg" },
  { id: 101, name: "Plato pando", price: 0, image: "v106.jpeg" },
  { id: 101, name: "Plato hondo 12 onz", price: 0, image: "v107.jpeg" },
  { id: 101, name: "Plato pando 23 cm", price: 0, image: "v108.jpeg" },
  { id: 101, name: "plato hondo 25 onz", price: 0, image: "v109.jpeg" },
  { id: 101, name: "Plato hondo 30 onz ", price: 0, image: "v110.jpeg" },
  { id: 101, name: "Vasos traslúcidos 90nz ", price: 0, image: "v111.jpeg" },
  { id: 101, name: "Tenedor grande desechable", price: 0, image: "v112.jpeg" },
  { id: 101, name: "Tenedor pequeño", price: 0, image: "v113.jpeg" },
  { id: 101, name: "Cuchara grande", price: 0, image: "v114.jpeg" },
  { id: 101, name: "Torteros fiesta", price: 0, image: "v115.jpeg" },
  { id: 101, name: "Copa flauta", price: 0, image: "v116.jpeg" },
  { id: 101, name: "Bolsa manija", price: 0, image: "v117.jpeg" },
  { id: 101, name: "Bolsa manija", price: 0, image: "v118.jpeg" },
  { id: 101, name: "Bolsa mainija t 20", price: 0, image: "v119.jpeg" },
  { id: 101, name: "Bolsa manija t 25", price: 0, image: "v120.jpeg" },
  { id: 101, name: "Vasos personajes", price: 0, image: "v121.jpeg" },
  { id: 101, name: "Rollo termico 80 * 60", price: 0, image: "v122.jpeg" },
  { id: 101, name: "Rollos precios", price: 0, image: "v123.jpeg" },
  { id: 101, name: "Palos balso", price: 0, image: "v124.jpeg" },
  { id: 101, name: "Laminas icopor", price: 0, image: "v125.jpeg" },
  { id: 101, name: "Velas inciencio", price: 0, image: "v126.jpeg" },
  { id: 101, name: "Batería AA", price: 0, image: "v27.jpeg" },
  { id: 101, name: "Joyas casuales", price: 0, image: "v128.jpeg" },
  { id: 101, name: "Joyas casuales", price: 0, image: "v129.jpeg" },
  { id: 101, name: "Joyas casuales", price: 0, image: "v130.jpeg" },
  { id: 101, name: "Joyas casuales", price: 0, image: "v131.jpeg" },
  { id: 101, name: "Reloj", price: 0, image: "v132.jpeg" },
  { id: 101, name: "Reloj", price: 0, image: "v133.jpeg" },
  { id: 101, name: "Joyas casuales", price: 0, image: "v134.jpeg" },
  { id: 101, name: "Joyas casuales", price: 0, image: "v135.jpeg" },
  { id: 101, name: "Peineta", price: 0, image: "v136.jpeg" },
  { id: 101, name: "Joyas casuales", price: 0, image: "v137.jpeg" },
  { id: 101, name: "Peineta", price: 0, image: "v138.jpeg" },
  { id: 101, name: "Peineta", price: 0, image: "v139.jpeg" },
  { id: 101, name: "Plantilla", price: 0, image: "v143.jpeg" },
  { id: 101, name: "Tigera", price: 0, image: "v141.jpeg" },
  { id: 101, name: "Peine", price: 0, image: "v142.jpeg" },
  { id: 101, name: "Regla plantilla", price: 0, image: "v144.jpeg" },
  { id: 101, name: "Diccionario ingles", price: 0, image: "v145.jpeg" },
  { id: 101, name: "Diccionario español", price: 0, image: "v146.jpeg" },
  { id: 101, name: "Legajador plastico", price: 0, image: "v147.jpeg" },
  { id: 101, name: "Sopa letras", price: 0, image: "v148.jpeg" },
  { id: 101, name: "Pony", price: 0, image: "v149.jpeg" },
  { id: 101, name: "Pony", price: 0, image: "v150.jpeg" },
  { id: 101, name: "Pony", price: 0, image: "v151.jpeg" },
  { id: 101, name: "Pony", price: 0, image: "v152.jpeg" },
  { id: 101, name: "Gancho legajador", price: 0, image: "v153.jpeg" },
  { id: 101, name: "Clip standar", price: 0, image: "v154.jpeg" },
  { id: 101, name: "Chinche", price: 0, image: "v155.jpeg" },
  { id: 101, name: "Talonario rifa", price: 0, image: "v156.jpeg" },
  { id: 101, name: "Talonario pedido", price: 0, image: "v159.jpeg" },
  { id: 101, name: "Push pins", price: 0, image: "v160.jpeg" },
  { id: 101, name: "Pegastic", price: 0, image: "v161.jpeg" },
  { id: 101, name: "Pegante", price: 0, image: "v162.jpeg" },
  { id: 101, name: "Escarcha ", price: 0, image: "v163.jpeg" },
  { id: 101, name: "Silicona barra gruesa", price: 0, image: "v164.jpeg" },
  { id: 101, name: "Recibo caja menor", price: 0, image: "v165.jpeg" },
  { id: 101, name: "Silicona barra delgada", price: 0, image: "v166.jpeg" },
  { id: 101, name: "Ega * 150g", price: 0, image: "v167.jpeg" },
  { id: 101, name: "Ega * 280g ", price: 0, image: "v168.jpeg" },
  { id: 101, name: "Lapicero billetes ", price: 0, image: "v169.jpeg" },
  { id: 101, name: "Minas 2.0 ", price: 0, image: "v170.jpeg" },
  { id: 101, name: "Minas 0.5 ", price: 0, image: "v171.jpeg" },
  { id: 101, name: "Sacapuntas ", price: 0, image: "v172.jpeg" },
  { id: 101, name: "Sacapuntas pequeño ", price: 0, image: "v173.jpeg" },
  { id: 101, name: "Sacapuntas lapicito", price: 0, image: "v174.jpeg" },
  { id: 101, name: "Sacapuntas metalico ", price: 0, image: "v175.jpeg" },
  { id: 101, name: "Tinta marcadores ", price: 0, image: "v176.jpeg" },
  { id: 101, name: "Borrador ", price: 0, image: "v177.jpeg" },
  { id: 101, name: "Cinta 200 yardas", price: 0, image: "v178.jpeg" },
  { id: 101, name: "Cinta 50 metros", price: 0, image: "v179.jpeg" },
  { id: 101, name: "Cinta 40 metros ", price: 0, image: "v180.jpeg" },
  { id: 101, name: "Borrador negro ", price: 0, image: "v182.jpeg" },
  { id: 101, name: "Cinta pequeña ", price: 0, image: "v183.jpeg" },
  { id: 101, name: "Cinta mediana", price: 0, image: "v184.jpeg" },
  { id: 101, name: "Plumones surtidos ", price: 0, image: "v185.jpeg" },
  { id: 101, name: "Plumones  ", price: 0, image: "v186.jpeg" },
  { id: 101, name: "Cinta 1/2 ", price: 0, image: "v187.jpeg" },
  { id: 101, name: "Cinta aislante ", price: 0, image: "v188.jpeg" },
  { id: 101, name: "Cinta transparente ", price: 0, image: "v189.jpeg" },
  { id: 101, name: "Cinta cafe ", price: 0, image: "v190.jpeg" },
  { id: 101, name: "Cinta papelel 1 ", price: 0, image: "v192.jpeg" },
  { id: 101, name: "Cinta papel 3/4 ", price: 0, image: "v193.jpeg" },
  { id: 101, name: "Taco periódico ", price: 0, image: "v194.jpeg" },
  { id: 101, name: "Taco notas ", price: 0, image: "v195.jpeg" },
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
