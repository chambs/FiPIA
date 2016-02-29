class Clazz {
	constructor () {
		console.log('I have been instantiated!');
	}

	add (a, b) {
		return a + b;
	}

	sub (a, b) {
		return a - b;
	}

	print (str) {
		console.log(str);
	}
}


var c = new Clazz();
c.print( c.add(5, 7) );
c.print( c.sub(5, 7) );
