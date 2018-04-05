(function($){

// Accessible text field placeholder text
jQuery.fn.placeholderLabel = function(){
  return this.bind('focus blur', function(e){
    var id = this.id,
        $label = $('label[for="'+id+'"]')
                 .bind('click focus', function(){ $(this).addClass('hide'); });
    if ( e.type == 'focus' || $.trim($(this).val()) != '') {
      $label.addClass('hide');
    } else {
      $label.removeClass('hide');
    }
  });
};

})(jQuery);