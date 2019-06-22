/*      Arreglo de imágenes | Slider    */
var sliderImages = new Array(4);
for(var i = 0; i < sliderImages.length; i++) {
    sliderImages[i] = "slider" + (i+1) + ".jpg";
}

/*      Arreglo de url | Social         */
var url = ["https://www.facebook.com/", "https://www.twitter.com/", "https://www.youtube.com/"];

/*      Arreglos bidimensionales de productos       */
var pEntradas = [["Guacamole especial", 7.00, "resources/img/products/entradas/p1-1.jpg"], ["Huevos en albahaca", 6.00, "resources/img/products/entradas/p1-2.jpg"], ["Sopa de Zapallo", 8.00, "resources/img/products/entradas/p1-3.jpg"], ["Palta fuerte rellena", 7.00, "resources/img/products/entradas/p1-4.jpg"]];
var pFondos = [["Tallarines al pesto", 15.00, "resources/img/products/fondos/p2-1.jpg"], ["Camarones en salsa", 16.00, "resources/img/products/fondos/p2-2.jpg"], ["Raviolis con adobo", 17.00, "resources/img/products/fondos/p2-3.jpg"], ["Salmón ahumado", 18.00, "resources/img/products/fondos/p2-4.jpg"]];
var pPostres = [["Rosquilla glaseada", 6.00, "resources/img/products/postres/p3-1.jpg"], ["Smooth con crema", 12.00, "resources/img/products/postres/p3-2.jpg"], ["Cupcake de fresa", 5.00, "resources/img/products/postres/p3-3.jpg"], ["Waffles con miel", 10.00, "resources/img/products/postres/p3-4.jpg"]];
var pBebidas = [["Limonada frozen", 3.00, "resources/img/products/bebidas/p4-1.jpg"], ["Jugo de Mango", 5.00, "resources/img/products/bebidas/p4-2.jpg"], ["Jugo de Granadilla", 4.50, "resources/img/products/bebidas/p4-3.jpg"], ["Jugo de Piña", 3.50, "resources/img/products/bebidas/p4-4.jpg"]];

/*     Consumo de arreglos bidimensionales   */
// Wrapper es un div donde se "pintarán" los elementos generados con la función createElements 
var wrapper = $(".wrapper");

var createElements = function(array) {

    var colS3 = $("<div class='col s12 m6 l3'></div>");
    var card = $("<div class='card'></div>");
    var cardImg = $("<div class='card-image'></div>");
    var img = $("<img src="+array[2]+">");

    var content = $("<div class='card-content'>");
    var title = $("<span class='card-title'>"+array[0]+"</span>");
    var price = $("<p>S/. "+array[1]+"</p>");

    cardImg.append(img);
    content.append(title, price);
    card.append(cardImg, content);
    colS3.append(card);
    return colS3;
}

/*      Función de movimiento automático | Slider   */
var contadorSlider = 0;
function slider() {
    $("#home").css({
        "background": "url(resources/img/slider/" + sliderImages[contadorSlider] + ")",
        "background-size": "cover",
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover",
        "-ms-background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "center bottom",
        "background-attachment": "fixed"
    });
    contadorSlider++;
    if(contadorSlider >= sliderImages.length) {
        contadorSlider = 0;
    }
    setTimeout("slider()", 2250);
}

/*      Almacenando el top de cada sección       */
var home = $("#home").offset().top
var promo = $("#promo").offset().top - 50;
var day = $("#day").offset().top - 50;
var cart = $("#cart").offset().top - 50;
var contact = $("#contact").offset().top - 50;

/*      Llamada jQuery      */
$(document).ready(function() {

    // Llamada a la función Slider
    slider();

    /****       Scroll hacia cada sección     ****/ 
    var menuOptionsList = $("#menu-options-list a");

   $(".scroll").on("click", function(e) {
       $("#hamburger").removeClass("hamburger-open");
       $("#menu-options-list").animate({left: "-100px"});
       $("#menu-options").animate({width: "0"});
       e.preventDefault();
       $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
        }, 900, "linear");
   });

   /****        Se "pintan" todas las pEntradas por defecto      ****/
   pEntradas.forEach(function(element) {
       wrapper.append(createElements(element))
    });

    /****      Según el botón seleccionado, se limpia el wrapper y se cargan los productos     *****/

    $(".cart-buttons").find("a").eq(0).click(function() {
        wrapper.empty();
        pEntradas.forEach(function(element) {
            wrapper.append(createElements(element))
        });
        return false;
    });

    $(".cart-buttons").find("a").eq(1).click(function() {
        wrapper.empty();
        pFondos.forEach(function(element) {
            wrapper.append(createElements(element))
        });
        return false;
    });

    $(".cart-buttons").find("a").eq(2).click(function() {
        wrapper.empty();
        pPostres.forEach(function(element) {
            wrapper.append(createElements(element))
        });
        return false;
    });

    $(".cart-buttons").find("a").eq(3).click(function() {
        wrapper.empty();
        pBebidas.forEach(function(element) {
            wrapper.append(createElements(element))
        });
        return false;
    });

    /****     Color de letra | Lista de opciones de Menu      ****/

    $("#menu-options-list").find("a").css({
        "color": "#ffffff"
    });

    /****     Font size | Social   ****/
    $("#menu-social-list").find("a").css({
        "font-size": "1.2rem"
    });

    /****       URL - Blank | Social : click            ****/
    $("#menu-social-list").find("a").eq(0).click(function() {
        window.open(url[0], "_blank");
        return false;
    });

    $("#menu-social-list").find("a").eq(1).click(function() {
        window.open(url[1], "_blank");
        return false;
    });

    $("#menu-social-list").find("a").eq(2).click(function() {
        window.open(url[2], "_blank");
        return false;
    });

    /****     Arrow Scroll Down     ****/
    $("#arrow-down-slider").click(function() {
        $("#hamburger").removeClass("hamburger-open");
        $("#menu-options-list").animate({left: "-100px"});
        $("#menu-options").animate({width: "0"});
        $("html, body").animate({
            scrollTop: $("#promo").offset().top
        }, 900, "linear");
        return false;
    });

    /****     Color icon | Social : hover      ****/
    var socialSpan = $("#menu-social-list").find("span")

    socialSpan.eq(0).hover(function() {
        $(this).css("color", "#3b5998");
    }, function() {
        $(this).css("color", "#ffffff");
    });

    socialSpan.eq(1).hover(function() {
        $(this).css("color", "#1dcaff");
    }, function() {
        $(this).css("color", "#ffffff");
    })

    socialSpan.eq(2).hover(function() {
        $(this).css("color", "#ff0000");

    }, function() {
        $(this).css("color", "#ffffff");
    })

    // Uppercase | Título slider-text
    $(".slider-title").css("text-transform", "uppercase");

    // Menu hamburguesa
    $("#hamburger").click(function(){
        $(this).toggleClass("hamburger-open");

        if($(this).hasClass("hamburger-open")) {
            console.log("abierto");
            $("#menu-options-list").animate({left: "30px"});
            $("#menu-options").animate({width: "250px"});
        }else {
            console.log("cerrado");
            $("#menu-options-list").animate({left: "-100px"});
            $("#menu-options").animate({width: "0"});
        } 

        return false;
    });

});

/*      Efecto aplicado al nav al primer Scroll      */
// Al pasar de #Home a #Promo, el nav debe cambiar a modo oscuro y se mantiene el efecto en las siguientes secciones
// Implementación final en Proceso
$(document).scroll(function() {

    var scrollPos = $(document).scrollTop();

    if(scrollPos >= home && scrollPos < promo) {
        $("nav").css("background", "transparent");
        $("nav").css("opacity", "1");
    }else if(scrollPos >= promo && scrollPos < day) {
        $("nav").css({
            "background": "linear-gradient(91deg, #0c0c0c, #212121, #0c0c0c)"
        });
    }else if(scrollPos >= day && scrollPos < cart) {
        $("nav").css({
            "background": "linear-gradient(91deg, #0c0c0c, #212121, #0c0c0c)"
        });
    }
});