$(document).ready(function(){
	var line = 10;
	var col = 10;

	for (var i = 0; i < line; i++) {
		if (i%2 === 0) {
			$('#table').append('<tr class="line"></tr>');
		} else {
			$('#table').append('<tr class="underline"></tr>');
		}
	}

	for (var i = 0; i < col; i++) {
		if (i%2 === 0) {
			$('.line').append('<td></td>');
			$('.underline').append('<td class="border"></td>');
		} else {
			$('.underline').append('<td></td>');
			$('.line').append('<td class="border"></td>');
		}
	}

});
