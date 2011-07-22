
// Supporting Issue #1
test("Serialize elements with a name property", function() {


	expect( 1 );

	var looksLike = {
		name: "dude",
		password: "seriously"
	};

	deepEqual( $("#test-form").serializeObject(), looksLike, "jQuery.fn.serializeObject() serializes elements with name property" );
});