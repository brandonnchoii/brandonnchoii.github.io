$("body").fadeIn(1100);

// $(function () {
//     setInterval(function () {
//         $("#instruction-text").fadeIn(1000).delay(2000).fadeOut(1500).delay(2000).fadeIn(1500);
//     }, 5000);
// });

$(document).ready(function(){
	 $("#email").on('click',function(){
			window.location.href = "mailto:brandon.choi@duke.edu?subject=&body=Hi%20Brandon,";
	 });
});
