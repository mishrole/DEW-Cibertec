/*      Arreglo de imágenes | Slider    */
var sliderImages = new Array(3);
for(var i = 0; i < sliderImages.length; i++) {
    sliderImages[i] = "slider" + (i+1) + ".jpg";
}

/*      Función de movimiento automático | Slider   */
var contadorSlider = 0;
function slider() {
    $("#slider-images").attr("src", "resources/img/slider/" + sliderImages[contadorSlider]);
    contadorSlider++;
    if(contadorSlider >= sliderImages.length) {
        contadorSlider = 0;
    }
    setTimeout("slider()", 1500);
}

/*      Llamada jQuery      */
// Ecmascript 6 - Fat Arrow
$(document).ready(function() {
    // Llamada a la función
    slider();

    // Path almacena el nombre del archivo en el que nos encontramos
    var path = (location.pathname).split("/").pop();
    
    /* En caso no nos encontremos en la misma página, redirecciona
       Si estamos en la misma página, mueve el scroll hacia un contenedor */
    
    // Inicio > index.html
    $("#menu-list a").eq(0).click(function() {
        if(path != "index.html") {
            $(location).attr('href', 'index.html');
        }else {
           $([document.documentElement, document.body]).animate({
               scrollTop: $("#home").offset().top - 100
           }, 1000);
        }
        return false;
    });

    // Promociones > #promo
    $("#menu-list a").eq(1).click(function() {
        if(path != "index.html") {
            console.log("No existen los elementos necesarios");
        }else{
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#promo").offset().top - 100
            }, 1000);
        }
        return false;
    });

    // Taipá del día > #day
    $("#menu-list a ").eq(2).click(function() {
        if(path != "index.html") {
            console.log("No existen los elementos necesarios");
        }else {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#day").offset().top - 100
            }, 1000);
        }
        return false;
    });
    
    // Pide tu Taipá > menu.html
    $("#menu-list a").eq(3).click(function() {
        if(path != "menu.html") {
            $(location).attr('href', 'menu.html');
        }else {
            console.log("Ya estás en la página");
        }
        return false;
    });

});