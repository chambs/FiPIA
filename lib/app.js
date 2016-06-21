'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Clazz = function () {
	function Clazz() {
		_classCallCheck(this, Clazz);

		console.log('I have been instantiated!');
	}

	_createClass(Clazz, [{
		key: 'add',
		value: function add(a, b) {
			return a + b;
		}
	}, {
		key: 'sub',
		value: function sub(a, b) {
			return a - b;
		}
	}, {
		key: 'print',
		value: function print(str) {
			console.log(str);
		}
	}]);

	return Clazz;
}();

var c = new Clazz();
c.print(c.add(5, 7));
c.print(c.sub(5, 7));