$(document).ready(function() {
  
  console.log('loaded');

  $('.review-target').on("click", function(e){
    e.preventDefault();
    var movie = $(this).attr('data-movie');

    var review = $('.review-detail').find("[data-text='" + movie + "']");

    $(review).toggleClass('show');

  });
  
});

