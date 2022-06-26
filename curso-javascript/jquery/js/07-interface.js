'use strict'
$(document).ready(function(){
    var elemento = $(".elemento");
    var lista = $(".lista-seleccionable");
    var elemento_move = $("#elemento-movido");
    var area = $("#area");
    var mostrar = $("#mostrar");
    var caja_ejectos = $(".caja-efectos");
    var encabezado = $("#encabezado");

    //Animación de entrada
    encabezado.animate({
        fontSize: '35px',
        maringTop: '10px'
        }, 'slow');
        // Animation complete.
    //Mover elemento por la página
    elemento.draggable();

    //Redimensionar
    elemento.resizable();

    //Seleccionar elementos
    /* lista.selectable(); */

    //Listar y ordenar
    lista.sortable({
        update: function(event, ui){
            console.log("ha cambiado la lista")
        }
    });

    //Drop
    elemento_move.draggable();
    area.droppable({
        drop: function(){
            console.log("has soltado dentro del area");
        }
    });

    //Efectos
    mostrar.click(function(){
        caja_ejectos.toggle("slide", "slow");//Efectos explode, blind, slide, shake, scale,
    });

    // Tooltip
    /* $(document).tooltip(); */
    $(".tooltip").tooltip({
        direction: "top"
      });

    // Dialog    
    $("#lanzar-pupup").click(function(){
        $(".popup").dialog();
    })

    //Datepicker
    $("#calendario").datepicker();

    //Tabs
    $("#pestanas").tabs();
    
})