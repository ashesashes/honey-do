$(document).ready(function() {

console.log("Ready when you are");

var iconCross = '<i class=icon-ok-sign></i>';
var cross = '<span class="cross">' + iconCross + '</span>';
var iconDel = '<i class="icon-remove"></i>';
var xMark = '<span class="del">' + iconDel + '</span>';



$(document).on("click", ".addButton", function(event){
		//alert("Works");
		$(".to-dolist").first().prepend($('<p class="list-area-1">' + cross + $('#add-item').val() + xMark +'</p>')).fadeIn('slow');
		$("#add-item").val(' ');
	});

$(".list-area-1").on("click", ".del", function(event){
  $(this).parent().remove();
});

$(".list-area-1").on("click", ".cross", function(event){
	//alert("cross me out!");
	$(this).parent().addClass("list-area-1-strikethrough");
});

$(".honey-do").on("click", ".editme", function(event){
	//alert("cross me out!");
	$(".del").toggle();
});



});


