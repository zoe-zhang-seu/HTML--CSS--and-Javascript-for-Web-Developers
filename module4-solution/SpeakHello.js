(function (window) {
    var helloSpeaker = new Object ();
    var speakWord = "Hello";
    helloSpeaker.greet = function greet(name) {
 	console.log(speakWord + " " + name);
}
	window.helloSpeaker = helloSpeaker;
})(window);
