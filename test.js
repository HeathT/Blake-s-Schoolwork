

obj = {};

obj._func = function(){
	console.info('works');
	console.log('this is good');
}

obj._sucka = function(testing) {
	this.name = 'myName';
}