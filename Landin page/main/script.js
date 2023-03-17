//ADICIONANDO O ESTILO NAS ANCORAS //
$('a').on('click', function(){
    $('a').removeClass('selected');
    $(this).addClass('selected');

});
