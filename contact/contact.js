function goBack() {
    window.history.back();
 } 

 $("#back").click(function() {
 	goBack();
 });

 $(document).ready(function(){
    $("#email").on('click',function(){
       window.location.href = "mailto:brandon.choi@duke.edu?subject=&body=Hi%20Brandon,"; 
    });
});