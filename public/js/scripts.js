$(document).ready(function() {
  
  $('.review-target').on("click", function(e){
    e.preventDefault();
    var movie = $(this).attr('data-movie');

    var review = $('.review-tile').find("[data-text='" + movie + "']");

    $(review).toggleClass('show');

  });
  
  $('#overlay-init').on("click", function(e){
  	e.preventDefault();
  	$('.overlay').addClass('active');
  });
  $('#overlay-dismiss').on("click", function(e){
    e.preventDefault();
    $('.overlay').removeClass('active');
  });

});

