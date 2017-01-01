$(document).ready(function(){
	var $first = $('.first');
	var $second = $('.second');
	var $third = $('.third');
	var $fourth = $('.fourth');
	var $fifth = $('.fifth');
	var $sixth = $('.sixth');
	var $seventh = $('.seventh');
	var $eighth = $('.eighth');
	var $ninth = $('.ninth');
	
	var $array = [$first, $second, $third, $fourth, $fifth, $sixth, $seventh, $eighth, $ninth];
	
	var length = $array.length;
	var i = 0;
	var theafter = 8;

	//This section causes the blocks to change position on startup for dramatic effect
	function initializeClock() {
	  
	  function updateClock() {
		  if(i == 0){
			 theafter = length - 1; 
		  }else{
			  theafter = i - 1;
		  }
		  $array[i].after($array[theafter]);
		    i = i + 1;
			if (i >= length) {
			  clearInterval(timeinterval);
			}
	  }

	  updateClock();
	  var timeinterval = setInterval(updateClock, 150);
	}
	
	
	initializeClock();
	$('body').hide();
	$('body').fadeIn(1500);
});

