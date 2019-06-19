/*      Arreglo de imágenes | Slider    */
var sliderImages = new Array(4);
for(var i = 0; i < sliderImages.length; i++) {
    sliderImages[i] = "slider" + (i+1) + ".jpg";
}

/*      Arreglo de url | Social         */
var url = ["https://www.facebook.com/", "https://www.twitter.com/", "https://www.youtube.com/"];

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

var home = $("#home").offset().top
var promo = $("#promo").offset().top - 100;
var day = $("#day").offset().top - 100;
var cart = $("#cart").offset().top - 100;
var contact = $("#contact").offset().top - 100;

/*      Función de Animación de Scroll al pasar de section     */
function scrollAnimated(section) {
    $([document.documentElement, document.body]).animate({
        scrollTop: section
       }, 1000);
}

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
// Al pasar de #Home a #Promo, el nav debe cambiar a modo oscuro

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