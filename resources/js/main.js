/*      Arreglo de imágenes | Slider    */
var sliderImages = new Array(4);
for(var i = 0; i < sliderImages.length; i++) {
    sliderImages[i] = "slider" + (i+1) + ".jpg";
}

var miniSlider = new Array (4);
for(var i = 0; i < miniSlider.length; i++) {
    miniSlider[i] = "mini" + (i+1) + ".jpg";
}

/*      Arreglo de url | Social         */
var url = ["https://www.facebook.com/", "https://www.twitter.com/", "https://www.youtube.com/"];

/*      Arreglos bidimensionales de productos       */
var pEntradas = [["Guacamole dúo", 7.00, "resources/img/products/entradas/p1-1.jpg"], ["Saltado de papa", 6.00, "resources/img/products/entradas/p1-2.jpg"], ["Sopa de Zapallo", 8.00, "resources/img/products/entradas/p1-3.jpg"], ["Paltas rellenas", 7.00, "resources/img/products/entradas/p1-4.jpg"]];
var pFondos = [["Tallarines al pesto", 15.00, "resources/img/products/fondos/p2-1.jpg"], ["Camarones en salsa", 16.00, "resources/img/products/fondos/p2-2.jpg"], ["Raviolis en adobo", 17.00, "resources/img/products/fondos/p2-3.jpg"], ["Salmón ahumado", 18.00, "resources/img/products/fondos/p2-4.jpg"]];
var pPostres = [["Rosquilla glaseada", 6.00, "resources/img/products/postres/p3-1.jpg"], ["Smooth con crema", 12.00, "resources/img/products/postres/p3-2.jpg"], ["Cupcake de fresa", 5.00, "resources/img/products/postres/p3-3.jpg"], ["Waffles con bayas", 10.00, "resources/img/products/postres/p3-4.jpg"]];
var pBebidas = [["Limonada frozen", 3.00, "resources/img/products/bebidas/p4-1.jpg"], ["Jugo de mango", 5.00, "resources/img/products/bebidas/p4-2.jpg"], ["Jugo de granada", 4.50, "resources/img/products/bebidas/p4-3.jpg"], ["Jugo de piña", 3.50, "resources/img/products/bebidas/p4-4.jpg"]];

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
var rotacionSlider;
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
    rotacionSlider = setTimeout(function() {
		slider();
	}, 2250);
    //setTimeout("slider()", 2250);
}

var contadorMini = 0;
var rotacionMini;
function mini() {
    $("#mini-slider").css({
        "background": "url(resources/img/mini/" + miniSlider[contadorMini] + ")",
        "background-size": "cover",
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover",
        "-ms-background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "center top",
        "background-attachment": "fixed"
    });
    contadorMini++;
    if(contadorMini >= miniSlider.length) {
        contadorMini = 0;
    }
    rotacionMini = setTimeout(function() {
		mini();
	}, 3000);
    //setTimeout("mini()", 3000);
}

/*          Restricciones de sólo letras o sólo números     */
// Letras mayúsculas y minúsculas, letra ñ, letras tildadas y sin tildar, barra espaciadora
var letras = function(evento) {
    var key = evento.keyCode;
    if(((key >= 65 && key <= 90) || (key >= 97 && key <= 122))
        || key === 241 || key === 209
        || key === 193 || key === 201 || key === 205 || key === 211 || key === 218
        || key === 225 || key === 233 || key === 237 || key === 243 || key === 250
        || key === 32) {
            return true;
    }else {
        evento.preventDefault();
        return false;
    }
}
// Números del 0 al 9
// Máximo 9 dígitos
var numeros = function(evento) {
    var key = evento.keyCode;
    var phone = $("#phone").val().length;
    var digits = 9;
    var error =  $(".error-message");
    
    if(phone < digits) {
        if(key >= 48 && key <= 57) {
            error.eq(2).html(" ");
            return true;
        }else {
            evento.preventDefault();
            return false;
        }
    }else {
        evento.preventDefault();
        return false;
    }
}

/*      Almacenando el top de cada sección       */
var home = $("#home").offset().top
var promo = $("#promo").offset().top - 50;
var day = $("#day").offset().top - 50;
var cart = $("#cart").offset().top - 100;
var contact = $("#contact").offset().top - 50;

/*      Llamada jQuery      */
$(document).ready(function() {
    // Llamada a la función Slider
    slider();
    mini();

    // Aplicando restricción de sólo letras
    $("#name, #lastname").keypress(letras);

    // Aplicando restricción de sólo números con un máximo de 9 dígitos
    $("#phone").keypress(numeros);

    // Entradas tiene .active-white al cargar la página
    $(".cart-buttons").find("a").eq(0).removeClass("grey darken-4");
    $(".cart-buttons").find("a").eq(0).addClass("active-white");

    /****       Scroll hacia cada sección     ****/ 
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
        /*  Además, se cambia el color del botón seleccionado para indicar qué productos están listados
            - Se remueve la clase active-white de todos los elementos que no sean $(this)
            - Se añade la clase grey-darken a todos los elementos que no sean $(this)
            - Se añade la clase active-white al $(this) */
    $(".cart-buttons").find("a").eq(0).click(function() {
        wrapper.empty();
        pEntradas.forEach(function(element) {
            wrapper.append(createElements(element))
        });
        $(this).removeClass("grey darken-4");
        $(".cart-buttons").find("a").eq(1).removeClass("active-white");
        $(".cart-buttons").find("a").eq(2).removeClass("active-white");
        $(".cart-buttons").find("a").eq(3).removeClass("active-white");
        $(".cart-buttons").find("a").eq(1).addClass("grey darken-4");
        $(".cart-buttons").find("a").eq(2).addClass("grey darken-4");
        $(".cart-buttons").find("a").eq(3).addClass("grey darken-4");
        $(this).addClass("active-white");
        return false;
    });

    $(".cart-buttons").find("a").eq(1).click(function() {
        wrapper.empty();
        pFondos.forEach(function(element) {
            wrapper.append(createElements(element))
        });
        $(this).removeClass("grey darken-4");
        $(".cart-buttons").find("a").eq(0).removeClass("active-white");
        $(".cart-buttons").find("a").eq(2).removeClass("active-white");
        $(".cart-buttons").find("a").eq(3).removeClass("active-white");
        $(".cart-buttons").find("a").eq(0).addClass("grey darken-4");
        $(".cart-buttons").find("a").eq(2).addClass("grey darken-4");
        $(".cart-buttons").find("a").eq(3).addClass("grey darken-4");
        $(this).addClass("active-white");
        return false;
    });

    $(".cart-buttons").find("a").eq(2).click(function() {
        wrapper.empty();
        pPostres.forEach(function(element) {
            wrapper.append(createElements(element))
        });
        $(this).removeClass("grey darken-4");
        $(".cart-buttons").find("a").eq(0).removeClass("active-white");
        $(".cart-buttons").find("a").eq(1).removeClass("active-white");
        $(".cart-buttons").find("a").eq(3).removeClass("active-white");
        $(".cart-buttons").find("a").eq(0).addClass("grey darken-4");
        $(".cart-buttons").find("a").eq(1).addClass("grey darken-4");
        $(".cart-buttons").find("a").eq(3).addClass("grey darken-4");
        $(this).addClass("active-white");
        return false;
    });

    $(".cart-buttons").find("a").eq(3).click(function() {
        wrapper.empty();
        pBebidas.forEach(function(element) {
            wrapper.append(createElements(element))
        });
        $(this).removeClass("grey darken-4");
        $(".cart-buttons").find("a").eq(0).removeClass("active-white");
        $(".cart-buttons").find("a").eq(1).removeClass("active-white");
        $(".cart-buttons").find("a").eq(2).removeClass("active-white");
        $(".cart-buttons").find("a").eq(0).addClass("grey darken-4");
        $(".cart-buttons").find("a").eq(1).addClass("grey darken-4");
        $(".cart-buttons").find("a").eq(2).addClass("grey darken-4");
        $(this).addClass("active-white");
        return false;
    });

    /****      Al pasar el mouse sobre el botón ENVIAR, cambia el color     *****/
    $(".btn-contact").mouseover(function() {
        $(this).removeClass("grey darken-4");
        $(this).addClass("active-white");
        console.log("in")
    }).mouseout(function() {
        $(this).removeClass("active-white");
        $(this).addClass("grey darken-4");
        console.log("out")
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

    /****      Cambio de colores según las validaciones del formulario     *****/
    var error =  $(".error-message");

    $("#name").keypress(function() {
        error.eq(0).html(" ");
        $("label[for='name']").css({"color" : "#26a69a"});
        $(this).focus(function() {
            $(this).css({
                "border-bottom" : "1px solid #26a69a",
                "box-shadow" : "0 1px 0 0 #26a69a"
            });
        });
        $(this).focus();
    });

    $("#lastname").keypress(function() {
        error.eq(1).html(" ");
        $("label[for='lastname']").css({"color" : "#26a69a"});
        $(this).focus(function() {
            $(this).css({
                "border-bottom" : "1px solid #26a69a",
                "box-shadow" : "0 1px 0 0 #26a69a"
            });
        });
        $(this).focus();
    });

    $("#phone").keypress(function() {
        error.eq(2).html(" ");
        $("label[for='phone']").css({"color" : "#26a69a"});
        $(this).focus(function() {
            $(this).css({
                "border-bottom" : "1px solid #26a69a",
                "box-shadow" : "0 1px 0 0 #26a69a"
            });
        });
        $(this).focus();
    });


    $("#address").keypress(function() {
        error.eq(3).html(" ");
        $("label[for='address']").css({"color" : "#26a69a"});
        $(this).focus(function() {
            $(this).css({
                "border-bottom" : "1px solid #26a69a",
                "box-shadow" : "0 1px 0 0 #26a69a"
            });
        });
        $(this).focus();
    });

    $("#message").keypress(function() {
        error.eq(4).html(" ");
        $("label[for='message']").css({"color" : "#26a69a"});
        $(this).focus(function() {
            $(this).css({
                "border-bottom" : "1px solid #26a69a",
                "box-shadow" : "0 1px 0 0 #26a69a"
            });
        });
        $(this).focus();
    });

    $(".btn-confirm").click(function() {
        $(".modal").css({
            "display": "none"
        });
        return false;
    });

    $("#mini-play").click(function() {
        clearTimeout(rotacionMini);
        rotacionMini = setTimeout(function() {
            mini();
        }, 3000);
        return false;
    });

    $("#mini-pause").click(function() {
        clearTimeout(rotacionMini);
        return false;
    });

    $(".btn-contact").click(function() {
        var name = $("#name").val().length;
        var lastname = $("#lastname").val().length;
        var phone = $("#phone").val().length;
        var address = $("#address").val().length;
        var message = $("#message").val().length;
        var error =  $(".error-message");
        //#26a69a green focused
        //#4CAF50 green valid
        //#F44336 red wrong

        if(name == 0) {
            error.eq(0).css({"color" : "#F44336"});
            error.eq(0).html("Este campo es obligatorio");
            $("label[for='name']").css({"color" : "#F44336"});
            $("#name").focus(function() {
                $(this).css({
                    "border-bottom" : "1px solid #F44336",
                    "box-shadow" : "0 1px 0 0 #F44336"
                });
            });
            $("#name").focus();
        }

        if(lastname == 0) {
            error.eq(1).css({"color" : "#F44336"});
            error.eq(1).html("Este campo es obligatorio");
            $("label[for='lastname']").css({"color" : "#F44336"});
            $("#lastname").focus(function() {
                $(this).css({
                    "border-bottom" : "1px solid #F44336",
                    "box-shadow" : "0 1px 0 0 #F44336"
                });
            });
            $("#lastname").focus();
        }

        if(phone == 0) {
            error.eq(2).css({"color" : "#F44336"});
            error.eq(2).html("Este campo es obligatorio");
            $("label[for='phone']").css({"color" : "#F44336"});
            $("#phone").focus(function() {
                $(this).css({
                    "border-bottom" : "1px solid #F44336",
                    "box-shadow" : "0 1px 0 0 #F44336"
                });
            });
            $("#phone").focus();
        }
        
        if(phone < 7) {
            error.eq(2).css({"color" : "#F44336"});
            error.eq(2).html("Ingresa un número fijo o de celular");
            $("label[for='phone']").css({"color" : "#F44336"});
            $("#phone").focus(function() {
                $(this).css({
                    "border-bottom" : "1px solid #F44336",
                    "box-shadow" : "0 1px 0 0 #F44336"
                });
            });
            $("#phone").focus();
        }

        if(phone == 8) {
            error.eq(2).css({"color" : "#F44336"});
            error.eq(2).html("Ingresa un número válido");
            $("label[for='phone']").css({"color" : "#F44336"});
            $("#phone").focus(function() {
                $(this).css({
                    "border-bottom" : "1px solid #F44336",
                    "box-shadow" : "0 1px 0 0 #F44336"
                });
            });
            $("#phone").focus();
        }

        if(address == 0) {
            error.eq(3).css({"color" : "#F44336"});
            error.eq(3).html("Este campo es obligatorio");
            $("label[for='address']").css({"color" : "#F44336"});
            $("#address").focus(function() {
                $(this).css({
                    "border-bottom" : "1px solid #F44336",
                    "box-shadow" : "0 1px 0 0 #F44336"
                });
            });
            $("#address").focus();
        }

        if(message == 0) {
            error.eq(4).css({"color" : "#F44336"});
            error.eq(4).html("Este campo es obligatorio");
            $("label[for='message']").css({"color" : "#F44336"});
            $("#message").focus(function() {
                $(this).css({
                    "border-bottom" : "1px solid #F44336",
                    "box-shadow" : "0 1px 0 0 #F44336"
                });
            });
            $("#message").focus();
        }

        if(name > 0 && lastname > 0 && phone > 6 && phone != 8 && address > 0 && message > 0) {
            $('.modal').css({
                "display": "block"
            });
            $("#contact").find("input").val(" ");
            $("#message").val(" ");
            $("#name").focus();
        }

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
    }else if(scrollPos >= cart && scrollPos < contact) {
        $("nav").css({
            "background": "linear-gradient(91deg, #0c0c0c, #212121, #0c0c0c)"
        });
    }else if(scrollPos >= contact) {
        $("nav").css({
            "background": "linear-gradient(91deg, #0c0c0c, #212121, #0c0c0c)"
        });
    }
});