$(".RevealCard-header").click(function() {
  // seek the next element with the RevealCard-list class name, and toggle it
  $(this).next('.RevealCard-list').toggle( "slow");
  // apply class to toggled element which changes the content attribute to display plus sign
  $(this).toggleClass('changed');
});