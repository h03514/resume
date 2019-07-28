(function($) {
    $(document).ready(function() {
        $('body').on('click', '#header .home', function() {
            $('html').animate({ scrollTop: 0 }, 'slow');

        })
        $('body').on('click', '#header .about', function() {
            $('html, body').animate({ scrollTop: $('#about').offset().top }, 1000);
        })
        $('body').on('click', '#header .skill', function() {
            $('html, body').animate({ scrollTop: $('#skill').offset().top }, 1000);
        })
        $('body').on('click', '#header .contact', function() {
            $('html, body').animate({ scrollTop: $('#contact').offset().top }, 1000);
        })

        $('body').on('click', '#gotop', function() {
            $('html').animate({ scrollTop: 0 }, 'slow');
        })

    });
})($)