//Esto hará que la ventana modal pueda mostrar la imagen correcta al presionar //
$(function (){
    $('.galeria .contenedor-imagen').on('click', function(){
        $('#modal').modal;
        var ruta_imagen = ($(this).find('img').attr('src'));
        $('#imagen-modal').attr('src', ruta_imagen)
    });
// para que cuando el usuario haga un click fuera de la imagen, esta desaparezca
    $('#modal').on('click', function(){
        $('#modal').modal('hide');
    })
})