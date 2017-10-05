"use strict";

var bs = require('browser-sync').create();
bs.init({

	files: ["**/*.css"],
	plugins: [
		{
			module: "bs-html-injector",
			options: {
				files: ["index.html"]
			}
		}
	],
	watchTask: true,
	ghostMode: false,
	notify: false,
	logLevel: "silent",
	server: {
		baseDir: "/",
		index: 'index.html'
	},
	serveStatic: ['.'],
	open: "external"
});

