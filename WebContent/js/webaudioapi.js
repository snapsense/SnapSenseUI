function bootstrapSpeechRecognition() {
	recognition = new webkitSpeechRecognition();
	button = document.getElementById("button");
	recognition.continuous = true;
	reset();
	recognition.onend = reset;
	recognition.onresult = function(event) {
		for (var i = 0; i < event.results.length; i++) {
			if (event.results[i].isFinal === true) {
				textarea.value += event.results[i][0].transcript;
			}
		}
	};
}
