var Deferred = require('..');

// Usage 1
// Declare the deferred instance and use it.
function countdown1() {
	var deferred = new Deferred();
	var i = 5;
	var timer = setInterval(function () {
		deferred.notify(i);
		if (i-- === 0) {
			deferred.resolve('Hi');
			clearInterval(timer);
		}
	}, 300);
	return deferred.promise();
}

countdown1().progress(function (step) {
	console.log('countdown1', step);
}).done(function () {
	console.log('countdown1 done');
});


// Usage 2
// Use `Deferred(fn)` and get the deferred instance with `this` context.
function countdown2() {
	var self = this;
	var i = 5;
	var timer = setInterval(function () {
		self.notify(i);
		if (i-- === 0) {
			self.resolve('Hi');
			clearInterval(timer);
		}
	}, 300);
}

Deferred(countdown2).progress(function (step) {
	console.log('countdown2', step);
}).done(function () {
	console.log('countdown2 done');
});
