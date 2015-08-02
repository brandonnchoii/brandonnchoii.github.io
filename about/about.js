//toggles the read more option
$(".toggler").click(function() {
	$("#about-me").toggle();
});

// changes focus of page
$("#extender").click(function() {
	document.getElementById('about-me').scrollIntoView();
});
$("#less").click(function() {
	document.getElementById('description').scrollIntoView();
});