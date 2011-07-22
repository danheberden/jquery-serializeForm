/*
* .serializeObject (c) Dan Heberden
* danheberden.com
*
* Gives you a pretty object for your form elements
*/
(function($){
  $.fn.serializeObject = function() {
    if ( !this.length ) { return false; }

    var $el = this,
      data = {},
      lookup = data; //current reference of data

      $el.find(':input[type!="checkbox"][type!="radio"], input:checked').each(function() {
        // data[a][b] becomes [ data, a, b ]
        var named = this.name.replace(/\[([^\]]+)?\]/g, ',$1').split(','),
            cap = named.length - 1,
            i = 0;

        // Ensure that only elements with valid `name` properties will be serialized
        if ( named[ 0 ] ) {
          for ( ; i < cap; i++ ) {
              // move down the tree - create objects or array if necessary
              lookup = lookup[ named[i] ] = lookup[ named[i] ] ||
                  ( named[i+1] == "" ? [] : {} );
          }

          // at the end, psuh or assign the value
          if ( lookup.length != undefined ) {
               lookup.push( $(this).val() );
          }else {
                lookup[ named[ cap ] ]  = $(this).val();
          }

          // assign the reference back to root
          lookup = data;

        }
      });

    return data;
  };
})(jQuery);