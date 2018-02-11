const resolve = require("rollup-plugin-node-resolve");
const babel = require("rollup-plugin-babel");

module.exports = function(grunt) {

	return {

		options: {
			plugins: () => grunt.option("production") ? [resolve(), babel()] : [resolve()]
		},

		lib: {
			options: {
				format: "umd",
				moduleName: "<%= package.name.replace(/-/g, \"\").toUpperCase() %>",
				banner: "<%= banner %>"
			},
			src: "<%= package.module %>",
			dest: "build/<%= package.name %>.js"
		}

	};

};
