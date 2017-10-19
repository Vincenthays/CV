$('header i').click(() => {
    $('body').addClass('nav-toggle');
});

$('main').click(() => {  
    $('body').removeClass('nav-toggle');
});