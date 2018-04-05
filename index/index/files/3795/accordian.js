$(document).ready(function() {
    /* Accordian starts*/
    
    $('#nepad-accordian div:first').addClass('active');
    $('#nepad-accordian h2').click(function(){
        var $h2now = $(this);
        $('#nepad-accordian div').removeClass('active');
        $('#nepad-accordian h2').removeClass('active');
        $h2now.addClass('active');
        $h2now.next('div').addClass('active');
    });
    /* Accordian ends*/
    
});
