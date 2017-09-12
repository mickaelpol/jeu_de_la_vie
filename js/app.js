$(document).ready(function(){
	var line = 10;
	var col = 10;
 var idUnique;

 for (var i = 1; i <= 100; i++) {
   idUnique = i;
   console.log(idUnique);
 }



 for (var i = 0; i < line; i++) {
  if (i%2 === 0) {
   $('#table').append('<tr class="line"></tr>');
 } else {
   $('#table').append('<tr class="underline"></tr>');
 }
}

for (var i = 0; i < col; i++) {

  if (i%2 === 0) {
   $('.line').append('<td id="'+ idUnique+'"></td>');
   $('.underline').append('<td id="" class="border"></td>');
 } else {
   $('.underline').append('<td id=""></td>');
   $('.line').append('<td id="" class="border"></td>');
 }
}
});
