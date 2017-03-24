
'use strict';

(function (w){
	var dbody = document.querySelectorAll("body")[0];
		console.log('what theee', dbody);
//	dbody.className = ' blaze'


	var photoWrap = document.querySelector('.photo_div_wrap');
	console.log(photoWrap)
	//dbody.addEventListener('scroll', function(){
		console.log('what time is it')
	//})





	var last_known_scroll_position = 0;
	var ticking = false;

	var doSomething = function(){
		var rawNumber = last_known_scroll_position * .15;
		rawNumber = Math.round(rawNumber)
//		console.log('raw is ', rawNumber,photoWrap.style.opacity);
		photoWrap.style.opacity =  (rawNumber * .01);
	}

	window.addEventListener('scroll', function(e) {
	  last_known_scroll_position = window.scrollY;
	  if (!ticking) {
	    window.requestAnimationFrame(function() {
	      doSomething(last_known_scroll_position);
	      ticking = false;
	      console.log(last_known_scroll_position)
	    });
	  }
	  ticking = true;
});

})(window)

