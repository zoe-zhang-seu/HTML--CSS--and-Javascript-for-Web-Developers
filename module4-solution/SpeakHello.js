(function (window) {
    var helloSpeaker = new object ();
    var speakWord = "Hello";
    helloSpeaker.greet = function(name) {
 	console.log(speakWord + " " + name);
}
	window.helloSpeaker = helloSpeaker;
})(window);
