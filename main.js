document.addEventListener('DOMContentLoaded', function(){

    //menu amburguesa
const nav2 = document.getElementById("boton-hamburguesa").addEventListener("click", function () {
    var menu = document.getElementById("menu-hamburguesa");
    var opacidad = document.getElementById("menu-hamburguesa");
    console.log(menu.style.display);
    if (menu.style.display === "none") {
      menu.style.display = "block";
      opacidad.style.animationPlayState = "running";
    } else {
      menu.style.display = "none";
    }
  });

  window.addEventListener("load", function () {
    var menu = document.getElementById("menu-hamburguesa");
    menu.style.display = "none";
    console.log("llegamos a la funcion");

  });


});



  //modal

let ilustraciones = 0;

function abrirModal(caminoImagen) {
    console.log('abrimos modal');
    console.log('este es el camino imagen ' + caminoImagen);
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('ilustraciones');
    const cerrarNav2 = document.getElementById('nav2');
    const scrollFondo = document.getElementById('contenedorgaleria');
    
    cerrarNav2.style.zIndex = '1';
    modal.style.display = 'block';
    modalImage.src = 'ilustraciones/'+caminoImagen;
    ilustraciones = cogerImagen(caminoImagen);
    scrollFondo.style.scrollbarGutter = 'none';
  }
  
  function cerrarModal() {
    console.log('cerramos modal');
    const cerrarNav2 = document.getElementById('nav2');
    let cerrar = document.getElementById('modal');

    cerrarNav2.style.zIndex = '2';
    cerrar.style.display = 'none';
  }
  window.onclick = function (event) {
    let modal = document.getElementById('modal');
    if (event.target == modal) { // si el elemento en el que hacemos click es la ventana modal, me la cierras
        modal.style.display = "none";
    }
};
  

function cambioImagen(n) {
    console.log('cambiamos imagen');
    ilustraciones += n;
    const images = document.querySelectorAll('.contenedorgaleria img');
    console.log(images + 'esta son las imagenes');
    if (ilustraciones >= images.length) {
      ilustraciones = 0;
    } else if (ilustraciones < 0) {
      ilustraciones = images.length - 1;
    }
  
    const caminoImagen = images[ilustraciones].src;
    console.log(caminoImagen+ 'este es el camino imagen');
    document.getElementById('ilustraciones').src = caminoImagen;
  }
  
  function cogerImagen(caminoImagen) {
    console.log('Cogemos imagen');
    const images = document.querySelectorAll('.contenedorgaleria img');
    console.log(images + 'esta son las imagenes');
    for (let i = 0; i < images.length; i++) {
      if (images[i].src === caminoImagen) {
        return i;
      }
    }
    return 0;
  }

