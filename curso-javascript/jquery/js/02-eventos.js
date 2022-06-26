'use strict'

$(document).ready(function () {
    
    /* Eventos */

    /* MouseOver y MouseOut */
    var caja = $("#caja");

    /* caja.mouseover(function() {
        $(this).css("background", "#02e302")
               .css("color", "#ffffff")
    });

    caja.mouseout(function() {
        $(this).css("background", "#f3ca00")
               .css("color", "#black")
    }); */

    function cambia_uno() {
        
        $(this).css("background", "red")
               .css("color", "#ffffff");
    }

    function cambia_dos() {
        $(this).css("background", "black")
               .css("color", "white")
    }

    // Hover

    caja.hover(cambia_uno, cambia_dos) //Este efecto puede recibir 2 funciones de callback
    // Cuando pasa sobre la caja se ejecute cambia_uno y cuando salimos se ejecuta cambia_dos 

    // Click, Doble click

    //Un click
    caja.click(function(){
        $(this).css("background", "purple")
               .css("color", "yellow")
        
    });

    //Doble click

    caja.dblclick(function(){
        $(this).css("background", "brown")
               .css("color", "withe")
        
    });

    //Focus y blur
    var nombre = $("#nombre");
    var datos =  $("#datos");
    nombre.focus(function () {
        caja.css("background", "green")
            .css("color", "withe")    
    })

    nombre.blur(function () {
        
        caja.css("background", "red")
            .css("color", "withe");
        var data = $(this).val();//Sacamos los datos del input        
        datos.text(data).show(); //Metodo para mostrar el elemento que hemos seleccionado del DOM

    })

    // Mousedown y Mouseup

    datos.mousedown(function () {
        $(this).css("border-color", "red")
    });

    // Evento Mouseup
    datos.mouseup(function () {
        $(this).css("border-color", "green")
    });

    //Mousemove
    // Este evento captura la posiciòn en coordenadas del cursor o raton
    $(document).mousemove(function () {
        /* console.log("Cordenada X: "+ event.clientX);
        console.log("Cordenada Y: "+ event.clientY); */
        $('body').css("cursor", "none")
        $("#sigueme").css("left", event.clientX)
                     .css("top", event.clientY)
    })
});