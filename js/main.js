$('header i').click(() => {
    $('body').addClass('nav-toggle');
    $('nav').animate({ left: 270 }, 400, 'swing');
});

$('main').click(() => {  
    $('body').removeClass('nav-toggle');
    $('nav').animate({ left: 0 }, 400, 'swing');
});