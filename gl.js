function myFunction(x) {
    x.classList.toggle("change");
    $('nav li').slideToggle();
}
$(document).ready(function(){
$("#display").html(
       $(window).width());
});
$(window).resize(function() {
	location.reload();
        $("#display").html(
        $(window).width());
});