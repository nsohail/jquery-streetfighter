$(document).ready(function(){


  function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
  }

  function playCool(){
  $('#cool-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#cool-sound')[0].play();
  }

  function playStop(){
  $('#cool-sound')[0].pause();
  $('#cool-sound')[0].currentTime = 0;
  }



	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	.mouseleave(function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})

	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
  {'left': '300px'},
  500,
  function() {
    $(this).hide();
    $(this).css('left', '-212px');
  }
);
	})


	.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		//ryu goes back to ready postion
	});

$('body').keydown(function(keycode){
if(keycode.which==88){
playCool();
$('.ryu-still').hide();
$('.ryu-ready').hide();
$('.ryu-cool').show();
}
})



.keyup(function(){
	playStop();
	$('.ryu-cool').hide();
	$('.ryu-ready').show();
});


});