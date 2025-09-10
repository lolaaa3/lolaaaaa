// Listas de imágenes
const listaCabezas = [
  "../lolaaaaa/assets/img/cabeza1.jpg",
  "../lolaaaaa/assets/img/cabeza2.jpg",
  "../lolaaaaa/assets/img/cabeza4.jpg",
  "../lolaaaaa/assets/img/cabeza5.jpg",
  "../lolaaaaa/assets/img/cabeza6.png",
];
const listaTroncos = [
 "../lolaaaaa/assets/img/tronco1.jpg",
  "../lolaaaaa/assets/img/tronco2.jpg",
  "../lolaaaaa/assets/img/tronco3.jpg",
  "../lolaaaaa/assets/img/tronco4.png",
  "../lolaaaaa/assets/img/tronco5.png",
   "../lolaaaaa/assets/img/tronco6.png",
];
const listaPatas = [
  "../lolaaaaa/assets/img/patas1.jpg",
  "../lolaaaaa/assets/img/patas2.jpg",
  "../lolaaaaa/assets/img/patas3.png",
   "../lolaaaaa/assets/img/patas4.png",
];
const listaSombrero = [
  "../lolaaaaa/assets/img/sombrero.jpg",
  "../lolaaaaa/assets/img/sombrero2.jpg",
  "../lolaaaaa/assets/img/sombrero3.png",
  
];

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const cabeza = document.getElementById("cabeza");
const tronco = document.getElementById("tronco");
const patas = document.getElementById("patas");
const sombrero = document.getElementById("sombrero")
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let cabezaAleatorio = 0;
let troncoAleatorio = 0;
let patasAleatorio = 0;
let sombreroAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  cabezaAleatorio = numeroAleatorio(0, listaCabezas.length);
  troncoAleatorio = numeroAleatorio(0, listaTroncos.length);
  patasAleatorio = numeroAleatorio(0, listaPatas.length);
  sombreroAleatorio = numeroAleatorio(0, listaSombrero.length);

  // Asignamos la nueva fuente (source) a cada imagen
  cabeza.src = `${listaCabezas[cabezaAleatorio]}`; //ruta + listaCabezas[cabezaAleatorio];
  tronco.src = `${listaTroncos[troncoAleatorio]}`;
  patas.src = `${listaPatas[patasAleatorio]}`;
  sombrero.src = `${listaSombrero[sombreroAleatorio]}`;

  console.log(cabezaAleatorio, troncoAleatorio, patasAleatorio, sombreroAleatorio);
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();
