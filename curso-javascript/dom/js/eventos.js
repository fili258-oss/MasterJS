"use strict";

window.addEventListener("load", () => {//Con el evento load, cuando la pagina ya este bien cargada entonces se podrán ejecutar los scripts con los eventos
  //Evenos del raton

  function cambiarColor() {
    var bg;
    bg = boton.style.background;

    if (bg == "green") {
      boton.style.background = "red";
      boton.style.color = "white";
    } else {
      boton.style.background = "green";
      boton.style.color = "yellow";
    }

    return true;
  }

  var boton = document.querySelector("#boton");

  //Evento click
  boton.addEventListener("click", function () {
    cambiarColor();
  });

  //Eveneto mouse en hover
  boton.addEventListener("mouseover", function () {
    boton.style.background = "red";
    boton.style.padding = "10px";
  });
  //Evento  cuando sale del elemento en hover
  boton.addEventListener("mouseout", function () {
    boton.style.background = "";
    boton.style.padding = "";
  });

  //Eventos para el focus, cuando ingresamos a un campo
  var input = document.querySelector("#campo_nombre");
  input.addEventListener("focus", function () {
    console.log("Estas haciendo focu en el input");
  });
  //Blur, cuando salimos de un input o campo
  var input = document.querySelector("#campo_nombre");
  input.addEventListener("blur", function () {
    console.log("Estas saliendo del focus");
  });
  //Keydown, sucede cuando se escribe, o cuando se ha pulsado una tecla
  var input = document.querySelector("#campo_nombre");
  input.addEventListener("keydown", function (event) {
    console.log("Estas pulsando", String.fromCharCode(event.keyCode));
  });
  //Keypress, Cuenado se presiona una tecla
  var input = document.querySelector("#campo_nombre");
  input.addEventListener("keypress", function (event) {
    console.log("Tecla presionada", String.fromCharCode(event.keyCode));
  });
  //Keyup, nos permite cptura el evento cuando levantamos el dedo de la tecla
  var input = document.querySelector("#campo_nombre");
  input.addEventListener("keyup", function (event) {
    console.log("Tecla soltada", String.fromCharCode(event.keyCode));
  });
});
