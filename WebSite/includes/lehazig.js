$(document).ready(function(){
	$.ajax({
		url:'http://localhost/includes/json1/tzipilivni.json',
		dataType: 'json',
		type: 'get',
		success: function(data){
			$(data.top).each(function(index, value){
				if(value.amount>19){
					$(' p ').append(value.word + ' ' + value.amount + '<br>');
				}
			});
		}
	});
});