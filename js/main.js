$(document).ready(function(){
    
    //Slider

    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1000,
        responsive: true,
        pager: true
      });

    //Post
      var posts = [
        {
          title: 'Actualmente Independiente',
          date: 'Fecha; '+moment().format("Do MMMM YYYY"),
          content: 'Hoy en dia trabajo maquetando paginas web para el centro de eventos "Dejando Huella" y para la empresa de fotografia "Momento perfecto". </br> -. Se realiza maquitacion responsiva. </br> -. Se utiliza el CMS WordPress, HTML, CSS y PHP.</br> '
        },
        {
            title: 'Empresa de cobranza "Emerix"./Back-end',
            date: '01 de Marzo de 2021 a 25 de Septiembre de 2021',
            content: 'Cargo: Analista Funcional Junior.</br> -.Se utilizan software como Power Bi Desktop, para crear distintas vistas de los datos para un mejor entendimiento, ver porcentajes y ayudar a la toma de desciones.</br> -.Se asiste a capacitaciones de, metodologías agiles, análisis de requerimientos, testing, roles en un equipo de proyecto, base de datos.</br>-. Mantención al software implementado por emerix el cual trabaja mediante SQL SERVER. Se realizan revisiones de stored procedures, ingreso de carga de datos, inserciones, actualizaciones y detecciones de error. </br>-. Se realizan reuniones semanales con clientes para ver el avance de las mantenciones y se plantean nuevas soluciones.</br> Participación en una mesa de ayuda para los respectivos clientes.</br></br> Desvinculación: Renuncia voluntaria. Ya que mis labores se reducían a aplicar solo SQL, y como lo explico en el apartado Quien soy, me apasiona mucho mas el Front-end.',

        },
        {
            title: 'Empresa de Marketing digital "MC Redes y Publicidad"./Front-end',
            date: '01 de Noviembre de 2020 a 20 de Febrero de 2021',
            content: 'Cargo: Práctica profesional</br>-.Trabajo con CSS y la versión responsiva de los sitios, adaptando la página a pantallas de celulares, tables y escritorio.</br>-.Utilizacion de diferentes plugin y características del mismo WordPress, para añadir productos, crear widget, y modificar temas.</br>-.Se realiza firmas digitales maquetas para el correo Outlook.'
        },

        {
            title: 'Cursos',
            date: 'Publicado el; '+moment().format("Do MMMM YYYY"),
            content: 'Actualmente estoy cursando en la plataforma de udemy dos cursos:</br> -. Css:Donde e visto responsividad, Sass, y Less </br>-. JavaScript: Comienza con una explicación de los más básico a lo más complejo, se pasara TypeScrit y Angular (En desarrollo 30% actualmente). '
        }
      ]
      posts.forEach((item, index) => {
        var post =`
            <article class="post">
                <h2>${item.title}</h2>
                    <p class="date">${item.date}</p>
                    <p>${item.content}</p>
                <a href="#" class="button-more">Inicio</a>
            </article>
            `;

            $("#posts").append(post);
      });

      var tema = $("#tema");

      $("#green").click(function(){
        tema.attr("href","css/green.css");
      });
      $("#red").click(function(){
        tema.attr("href","css/red.css");
      });
      $("#blue").click(function(){
        tema.attr("href","css/blue.css");
      });

      //Scroll Arriba de la web 
      $('.subir').click(function(){

        $('html, body').animate({
          scrollTop: 0
        }, 500);
        return false;
      });
      
});