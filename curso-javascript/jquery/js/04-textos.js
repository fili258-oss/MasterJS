'use strict'

$(document).ready(function () {

    $("#add_button").removeAttr('disabled').click(function() {        
        $('#menu').append('<li><a href="'+ $("#add_link").val()+'"></a></li>')// Con este metodo se agrega una nueva etiqueta
        getEnlaces();
    })
    /* console.log($('a').length) */
    
    getEnlaces();
})

function getEnlaces() {

    $('a').each(function(index) {
        /* console.log($(this)) */
        var that = $(this);
        var data = that.attr("href") // Con attr accedemos al value de href

        // Como agregar nuevos atributos a los enlaces
        that.attr('target', '_blank');
        that.removeAttr();
        that.text(data);


    });
}