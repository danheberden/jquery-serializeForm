/*! jquery-serializeForm - v1.2.3 - 2019-03-04
 * http://danheberden.com/
 * Copyright (c) 2019 Dan Heberden
 * Licensed MIT
**/
(function( $ ){
  $.fn.serializeForm = function(getElementValue) {

    // don't do anything if we didn't get any elements
    if ( this.length < 1) { 
      return false; 
    }

    if(typeof getElementValue !== 'function') {
      getElementValue = function($el) {
          return $el.val();
      };
    }

    var data = {};
    var lookup = data; //current reference of data
    var selector = ':input[type!="checkbox"][type!="radio"], input:checked';
    var parse = function() {

      // Ignore disabled elements
      if (this.disabled) {
        return;
      }

      // data[a][b] becomes [ data, a, b ]
      var named = this.name.replace(/\[([^\]]+)?\]/g, ',$1').split(',');
      var cap = named.length - 1;
      var $el = $( this );

      // Ensure that only elements with valid `name` properties will be serialized
      if ( named[ 0 ] ) {
        for ( var i = 0; i < cap; i++ ) {
          // move down the tree - create objects or array if necessary
          lookup = lookup[ named[i] ] = lookup[ named[i] ] ||
            ( (named[ i + 1 ] === "" || named[ i + 1 ] === '0') ? [] : {} );
        }

        // at the end, push or assign the value
        if ( lookup.length !==  undefined ) {
          lookup.push( getElementValue($el) );
        }else {
          lookup[ named[ cap ] ]  = getElementValue($el);
        }

        // assign the reference back to root
        lookup = data;
      }
    };

    // first, check for elements passed into this function
    this.filter( selector ).each( parse );

    // then parse possible child elements
    this.find( selector ).each( parse );

    // return data
    return data;
  };
}( jQuery ));
