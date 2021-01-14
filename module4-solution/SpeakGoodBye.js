
(function (window){
	var byeSpeaker = new Object();
	var speakWord = "Good Bye";
	byeSpeaker.greet =  function greet(name) {
	  console.log(speakWord + " " + name);
	}
	window.byeSpeaker=byeSpeaker;
})(window);

