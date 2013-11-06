/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('SerializeForm', {
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  // Supporting Issue #1
  test("Only serializes elements with `name` property", function() {


    expect( 1 );

    var looksLike = {
      name: "dude",
      password: "seriously"
    };

    deepEqual( $("#test-form").serializeForm(), looksLike, "jQuery.fn.serializeForm() only serializes elements with `name` property" );
  });

  test( "Object matches form values", function() {
    expect(1);

    var result = $( "#test-form-2" ).serializeForm();
    var looksLike = { text1: "txt-one",
      top: {
        child: [ "1", "2", "3" ]
      },
      another: {
        select: "opt"
      }
    };

    deepEqual( result, looksLike, "jQuery.fn.serializeForm() correctly generates form object" );
  });

  test( "parses the entire collection", function() {
    expect(1);

    var result = $( '#test-form-3' ).find('input').serializeForm();
    var looksLike = { text1: "txt-one",
      top: {
        child: [ "1", "2", "3" ]
      }
    };

    deepEqual( result, looksLike, "jQuery.fn.serializeForm() correctly generates object based on elements in the jQuery collection" );
  });

  test( 'Treat items with a provided array index as an actual array', function() {
    expect(1);

    var result = $( '#test-form-array-index' ).serializeForm();
    var looksLike = {
      text: [
        "0-text",
        "1-text"
      ]
    };

    deepEqual( result, looksLike, "Provided array index made into an array" );
  });


  test( 'Provided array index works with nested objects', function() {
    expect(1);

    var result = $( '#test-form-object-in-array' ).serializeForm();
    var looksLike = {
      block: [
        {
          people: {
            first_name: '0-first',
            last_name: '0-last'
          },
          room: '0-room'
        },
        {
          people: {
            first_name: '1-first',
            last_name: '1-last'
          },
          room: '1-room'
        }
      ]
    };

    deepEqual( result, looksLike, "Provided array index made into an array" );
  });
  test("Ignore disabled elements", function() {
    expect(1);

    var looksLike = {
      text1: "txt-one",
      top: {
        child: [ "1", "2", "3" ]
      }
    };
    var result = $( "#test-form-disabled" ).serializeForm();

    deepEqual( result, looksLike, "Ignored disabled element" );
  });

}(jQuery));
