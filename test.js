

obj = {};

obj._func = function(){
	console.info('works');
	console.log('this is great');
}

obj._sucka = function(testing) {
	this.name = 'myName';
}