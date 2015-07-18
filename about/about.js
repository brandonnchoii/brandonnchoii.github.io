fadeIn("#description", 2000);

$(".toggler").click(function() {
	$("#learn-more").toggle();
});

$("#extender").click(function() {
	document.getElementById('about-me').scrollIntoView();
});

$("#less").click(function() {
	document.getElementById('description').scrollIntoView();
});