$(document).ready(function(){
var array = [];
$('input[type=checkbox]').click(function(){
	var sum = 0;
	$('#price :checked').each(function(){
		sum += parseInt($(this).val()) * $(this).prev().val();
	});
	$('#sum').text(sum);
	if($(this).is(':checked')){
		array.push($(this).parent().find('h3').html() + ' ' + 
			$(this).parent().find('.quantity').val() + 'x');
	}
});
$('.btnsum').click(function(){
	$.each(array, function(i,l){
		$('.mdlul').append('<li>' + l +'</li>');
	});
});
$('.delete').click(function(){
	$('input:checkbox').each(function () {
	  if($(this).is(':checked')) {
	    $(this).prop('checked', false);
	  }
	});
	array = []
	$('.mdlul').empty();
	$(sum).text('0');
	$('.quantity').val('');
});
});
