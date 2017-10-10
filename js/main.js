$('header i').click(() => {
    $('body').addClass('mobile');
});

$('main').click(() => {  
    $('body').removeClass('mobile');
});