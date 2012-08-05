/*! serializeObject - v1.0.0 - 2012-08-04
* https://github.com/danheberden/serializeObject
* Copyright (c) 2012 Dan Heberden; Licensed MIT, GPL */

(function( $ ){
  $.fn.serializeObject = function() {
    if ( this.length < 1) { 
      return false; 
    }

    var $el = this;
    var data = {};
    var lookup = data; //current reference of data

    $el.find( ':input[type!="checkbox"][type!="radio"], input:checked' ).each( function() {
      // data[a][b] becomes [ data, a, b ]
      var named = this.name.replace(/\[([^\]]+)?\]/g, ',$1').split(',');
      var cap = named.length - 1;

      // Ensure that only elements with valid `name` properties will be serialized
      if ( named[ 0 ] ) {
        for ( var i = 0; i < cap; i++ ) {
            // move down the tree - create objects or array if necessary
            lookup = lookup[ named[i] ] = lookup[ named[i] ] ||
                ( named[ i + 1 ] === "" ? [] : {} );
        }

        // at the end, push or assign the value
        if ( lookup.length !==  undefined ) {
             lookup.push( $( this ).val() );
        }else {
              lookup[ named[ cap ] ]  = $( this ).val();
        }

        // assign the reference back to root
        lookup = data;
      }
    });

    return data;
  };
}( jQuery ));
