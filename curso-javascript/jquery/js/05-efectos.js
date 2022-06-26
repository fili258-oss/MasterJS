'use strict'

$(document).ready(function () {
    console.log('cargando')
    var main = $("#main");
    var caja = $("#caja");
    var animar = $("#animar");
    var hamburguesa = $("#hamburguesa");    
    $("#caja").hide();
    var hidden = $("#hidden");
    hidden.click(function () {
        $("#caja").fadeTo('slow', 0);//Efecto fadeIn, fadeOut, fadeTo, slideUp('velocidad',0 para ocultar y 1 para mostrar) /* Velocidad: fast, normal, slow*/

    });

    var show = $("#show");
    show.click(function () {
        $("#caja").fadeTo('slow', 1);//Efecto fadeIn, fadeOut, fadeTo, slideDown /* Velocidad: fast, normal, slow */
    });
    
    main.click(function () {
        if (main.text() == 'Cerrar') {
            main.text("Abrir");
            caja.slideToggle('fast');/*fadeToggle,slideToggle */
        }else{
            caja.slideToggle('fast');
        main.text("Cerrar");
        }
        

    })

    /* var animar = ; */
    animar.click(function () {
        
        hamburguesa.animate({
            marginLeft: '500px',
            fontSize: '25px',
            height:'110px',
            paddingTop:'15px',
            paddingBotton:'15px'
        }, 'slow')
        .animate({
            borderRadius: '900px'
        }, 'fast')
        .animate({
            marginTop:'200px'
        }, 'slow')
        .animate({
            marginLeft:'-20px'
        }, 'slow')
        .animate({
            marginTop:'-10px'
        }, 'slow')
        ;
    });
});

/*  */