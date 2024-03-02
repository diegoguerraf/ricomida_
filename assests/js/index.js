$(document).ready(function(){
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    });

    $("#añadirFavoritos").click(function(){
        alert("Agrega esta receta a tus favoritos");
    });
});

$(document).ready(function(){
  $('#carouselExample').carousel();
});

$(document).ready(function(){
    $("#ingredientes, #preparacion").on("dblclick", function(){
        $(this).css("color", "red");
    });
});

