module.exports = function(grunt) {

	grunt.registerTask("build", ["eslint", "rollup"]);

	grunt.registerTask("build:lib", ["eslint:lib", "rollup:lib"]);

};
