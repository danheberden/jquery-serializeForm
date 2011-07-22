
// Supporting Issue #1
test("Only serializes elements with `name` property", function() {


	expect( 1 );

	var looksLike = {
		name: "dude",
		password: "seriously"
	};

	deepEqual( $("#test-form").serializeObject(), looksLike, "jQuery.fn.serializeObject() only serializes elements with `name` property" );
});