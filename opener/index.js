document.getElementById("pre-text").innerHTML = '> Login: ' + getFullDate() + '<br> > VISITOR-Device: ~visitorAccount$: ';

function getFullDate() {
	var d = new Date();
	var min = d.getMinutes();
	var secs = d.getSeconds();

	if (min < 10) {
		min = '0' + min;
	}

	if (secs < 10) {
		secs = '0' + secs;
	}

	var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

	return days[d.getDay()] + ' ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getHours() + ':' + min + ':' + secs;
}

//TYPED.JS animation
$(function() {
	$(".type-text").typed({
		strings:["<br> ^1250Hi, I'm Brandon.<br> ^400Developer & writer.<br><br> ^600Press 'ENTER' to learn more about me and what I do.<br><br> ^100<span id='start'>START</span>  "],
		typeSpeed: 35,
	});
});

//KEYPRESS LISTENER for ENTER --> about.html
$(document).keypress(function(e) {
	if (e.which == 13) {
		window.location = "../about/about.html";
	}
});

$("#start").click(function(){
	window.location = "../about/about.html";
});



//MOBILE REDIRECT
if (screen.width <= 800) {
  	window.location = "../about/about.html";
}


