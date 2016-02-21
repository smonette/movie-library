console.log('loaded');

var targets = $('.review-target');

$(targets).on("click", "a", function(e){
  e.preventDefault();
  alert('clicked!');
});

console.log(targets)