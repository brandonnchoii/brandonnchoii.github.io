/* function for fading + post action; includes different parameter options */

function fadeIn(identifier, time) {
	$(identifier).hide().fadeIn(time)
}

function fadeInThen(identifier, time, next, nextTime) {
	$(identifier).hide().fadeIn(time, function() {
		setTimeout(function() {
			next();
		}, nextTime)
	})
}

fadeIn(".bar", 2500);
fadeIn(".header", 2000);
fadeIn(".intro", 2000);
fadeIn("footer", 2500);