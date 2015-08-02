/* function for fading + post action; includes different parameter options */

function fadeIn(identifier, time) {
	$(identifier).fadeIn(time)
}

function fadeInThen(identifier, time, next, nextTime) {
	$(identifier).fadeIn(time, function() {
		setTimeout(function() {
			next();
		}, nextTime)
	})
}

fadeIn("body", 1700);