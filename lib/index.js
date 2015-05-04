/*eslint-env node */
"use strict";
var mustache = require( "mustache" );
// thanks: https://github.com/mjackson
mustache.compile = function compile( template ) {

	try {

		mustache.parse( template );

	} catch( e ) {

		console.log( "Error compiling template %s\n%s", template, e );
		throw e;

	}
	return function( view, partials ) {

		try {

			return mustache.render( template, view, partials );

		} catch( e ) {

			console.log( e );
			throw e;

		}

	};

};
module.exports = mustache;
