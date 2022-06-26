'use strict'

$(document).ready(function () {
    console.log("Trabajando con ajax");    
    var datos = $("#datos");


    //Get y post

    $.get("https://reqres.in/api/users", {page: 2}, function(response){
        response.data.forEach((element, index)=>{
            datos.append("<p>" + element.first_name + element.last_name+"</p>")
        })
    });     

    /* var usuario = {
        "name": "Marino Botina",
        "web" : "mbotina.com"
    };

    $.post("https://reqres.in/api/users", usuario, function(response){
    console.log(response);
    }); */

    var formulario = $("#formulario");
    formulario.submit(function(e){
        e.preventDefault();
        var usuario = {
            "name": $('input[name="name"').val(),
            "web" : $('input[name="web"').val()
        };
        /* console.log(usuario); */
        /* $.post(formulario.attr("action"), usuario, function(response){
        console.log(response);
        }).done(function(){
            alert("Usuario añadido correctamente :)");
        }); */
        
        $.ajax({
            type: 'POST',
            /* dataType: 'json',
            contentType: 'application/json', */
            url: formulario.attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario...")
            },
            success: function(response){
                console.log(response)
            },
            error:function(){
                console.log("Ha ocurrido un error");
            },
            timeout: 1000
        });
        return false;
    });
});