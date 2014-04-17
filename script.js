$(document).ready(function(){ 
  var Random_Val = 0;
  
  
  $('#random_number').click(function() {
	  $(this).html(Math.floor(Math.random()*10));
	});
});
  
