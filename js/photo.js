
'use strict';

(function (w){
	var dbody = document.querySelectorAll("body")[0];

	var photoWrap = document.querySelector('.photo_div_mask');

	var last_known_scroll_position = 0;
	var ticking = false;

	var photoMaskUpdate = function(){
		var rawNumber = last_known_scroll_position * .2;
		rawNumber = Math.round(rawNumber);
		photoWrap.style.opacity =  (rawNumber * .01);
	}



	w.addEventListener('scroll', function(e) {
	  last_known_scroll_position = window.scrollY;
	  if (!ticking) {
	    window.requestAnimationFrame(function() {
	      photoMaskUpdate(last_known_scroll_position);
	      ticking = false;
	    });
	  }
	  ticking = true;
});

})(window)

