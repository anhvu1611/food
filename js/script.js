$(document).ready(function(){
    setInterval(function(){
		$('.slick-next').trigger('click');
	},2000);
    $('.khoi-slide').slick({
        
        prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fas fa-chevron-left"></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'><i class="fas fa-chevron-right"></i></button>`
    });
  });

  