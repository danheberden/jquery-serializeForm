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

  module('SerializeObject', {
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

    deepEqual( $("#test-form").serializeObject(), looksLike, "jQuery.fn.serializeObject() only serializes elements with `name` property" );
  });

  test( "Object matches form values", function() {
    expect(1);

    var result = $( "#test-form-2" ).serializeObject();
    var looksLike = { text1: "txt-one",
      top: {
        child: [ "1", "2", "3" ]
      },
      another: {
        select: "opt"
      }
    };

    deepEqual( result, looksLike, "jQuery.fn.serizlieObject() correctly generates form object" );
  });



}(jQuery));
