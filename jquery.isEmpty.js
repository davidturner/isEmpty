(function($){

  $.fn.extend({

    //pass the options variable to the function
    isEmpty: function(options) {

      //Set the default values, use comma to separate the settings, example:
      var defaults = {
          theClass: 'empty',
          addOnEmpty: 0
      };
      options =  $.extend(defaults, options);

      return this.each(function() {
        var o = options,
            element;
        $(this).each(function() {
          element = $(this);
          if(!element.val()){
            element.addClass(o.theClass);
          }
        });
        $(this).keyup(function() {
          element = $(this);
          if(!element.val() && o.addOnEmpy){
            element.addClass(o.theClass);
          } else {
            element.removeClass(o.theClass);
          }
        });
      });
    }
  });

})(jQuery);