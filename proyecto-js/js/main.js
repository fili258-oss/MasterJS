$(document).ready(function () {

    if (window.location.href.indexOf('index') > -1) {
        /* Slider */
        $(function () {
            $('.galeria').bxSlider({
                mode: 'horizontal',
                captions: true,
                slideWidth: 1200,
                responsive: true,
                auto: true
            });
        });
    }


    if (window.location.href.indexOf('index') > -1) {
        /* Posts */
        var posts = [
            {
                title: 'prueba de título 1',
                date: 'Publicado el ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, porro beatae quos facere quo eligendi. Officiis, laboriosam. Fugiat, doloribus? Nihil, incidunt ipsa. Corrupti porro, doloremque eum quam fugiat autem vel?'
            },
            {
                title: 'prueba de título 2',
                date: 'Publicado el ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, porro beatae quos facere quo eligendi. Officiis, laboriosam. Fugiat, doloribus? Nihil, incidunt ipsa. Corrupti porro, doloremque eum quam fugiat autem vel?'
            },
            {
                title: 'prueba de título 3',
                date: 'Publicado el ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, porro beatae quos facere quo eligendi. Officiis, laboriosam. Fugiat, doloribus? Nihil, incidunt ipsa. Corrupti porro, doloremque eum quam fugiat autem vel?'
            },
            {
                title: 'prueba de título 4',
                date: 'Publicado el ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, porro beatae quos facere quo eligendi. Officiis, laboriosam. Fugiat, doloribus? Nihil, incidunt ipsa. Corrupti porro, doloremque eum quam fugiat autem vel?'
            },
            {
                title: 'prueba de título 5',
                date: 'Publicado el ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, porro beatae quos facere quo eligendi. Officiis, laboriosam. Fugiat, doloribus? Nihil, incidunt ipsa. Corrupti porro, doloremque eum quam fugiat autem vel?'
            },
            {
                title: 'prueba de título 6 ',
                date: 'Publicado el ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, porro beatae quos facere quo eligendi. Officiis, laboriosam. Fugiat, doloribus? Nihil, incidunt ipsa. Corrupti porro, doloremque eum quam fugiat autem vel?'
            }
        ]

        posts.forEach((item, index) => {
            var post = `
        
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content}</p>
            <a href="#" class="button-more">Leer Más</a>
        </article>
        `;

            $("#posts").append(post);
        });
    }
    //Selector de tema
    var theme = $("#theme");
    var style = "";

    $("#to-green").click(function () {
        theme.attr("href", "css/green.css");
        var style = "css/green.css";
        localStorage.setItem("theme", style);
    });

    $("#to-red").click(function () {
        theme.attr("href", "css/red.css");
        var style = "css/red.css";
        localStorage.setItem("theme", style);
    });

    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css");
        var style = "css/blue.css";
        localStorage.setItem("theme", style);
    });

    var data = localStorage.getItem("theme");
    if (data != null) {
        theme.attr("href", data);
    } else {
        theme.attr("href", "css/green.css");
    }

    //Scroll arriba de la web
    $('.subir').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500)
        return false;
    });

    //Login falso

    $("#login form").submit(function () {
        var for_name = $("#for_name").val();

        localStorage.setItem("form_name", for_name);

    });

    var for_name = localStorage.getItem("form_name");

    if (for_name) {

        var about_parrafo = $(".about p");
        about_parrafo.html("<br><strong>Bienvenido, " + for_name + "</strong>");
        about_parrafo.append("<br><a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();
    }

    $("#logout").click(function () {
        console.log("hey");
        localStorage.clear();
        location.reload();;

    });

    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

});