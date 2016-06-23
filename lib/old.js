"use strict";

var oldJS = function () {

	function closure_(cb) {
		if (cb) {
			cb(Math.random());
		}
	}

	function rnd() {
		closure_(function (data) {
			console.log(data);
		});
	}

	return {
		rnd: rnd
	};
}();

module.exports = oldJS;