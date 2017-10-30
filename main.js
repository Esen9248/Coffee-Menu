$(document).ready(function(){


$('#price').click(function(){
	var sum = 0;
	$('#price :checked').each(function(){
		sum+=parseInt($(this).val());
	});
	$('#sum').text(sum);
});

})