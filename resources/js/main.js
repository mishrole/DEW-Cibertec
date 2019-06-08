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

        // Redirección a menu.html al hacer click en 'Pide tu Taipá'
        $("#menu-list a").eq(3).click(function() {
            $(location).attr('href', 'menu.html');
            return false;
        });
});