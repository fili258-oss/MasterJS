$(document).ready(function () {

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
    
    posts.forEach((item, index)=>{
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
})