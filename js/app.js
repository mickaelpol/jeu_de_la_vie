$(document).ready(function(){

var row = 8;
var col = 8;
var rouge = 2;
var noire = 2;

  for (var i = 0; i < row; i++) {

    $('#table').append('<tr class="table">');

    for (var j = 0; j < col; j++) {

      $('#table').append('<td id="'+i+j+'" class="table"></td>');
    }
    $('#table').append('</tr>');
  }

  for (var i = 0; i < rouge; i++) {
    $('')
  }


});
