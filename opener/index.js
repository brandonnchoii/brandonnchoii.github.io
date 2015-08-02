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
		strings:["<br> ^1250Hello, world! ^600No, wait! Don't panic! You've come to the right place.<br><br>^650I'm Brandon Choi.<br> ^800Developer, writer, photographer.<br><br> ^500Press 'ENTER' to learn more about me and what I do.<br><br> ^100<span id='start'>START</span>  "],
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



