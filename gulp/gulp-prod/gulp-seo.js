'use strict';

var gulp = require('gulp'),
    $ = gulp.$,
    path = gulp.config.path;

gulp.task('seo', function(cb) {
	var host = gulp.config.url.server.prod,
		urls = path.seo.urls,
		phantom = require('phantom'),
		fs = require('fs'),
		files = urls.length;

	fs.mkdir(path.seo.dist, function(e) {
		if(e && e.code !== 'EEXIST') console.log(e);
	});
	urls.forEach(function(url, i, arr) {
		var fileName = url + ((url === '/') ? 'index.html' : '.html');
		function ready() {
			if (--files === 0) cb();
		}
		phantom.create(function(ph) {
			ph.createPage(function(page) {
				page.open(host + url, function(status) {
					page.evaluate(function() {
						return document.getElementsByTagName("html")[0].innerHTML.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
					}, function(result) {
						fs.writeFile(path.seo.dist + fileName, result, function(err) {
							//console.log('seo: ' + fileName.substring(1));
							if (err) console.log(err);
							ready();
						});
						ph.exit(0);
					});
				});
			});
		}, {
			path: path.phantomjs,
			dnodeOpts: {
				weak: false
			}
		});
	});
});