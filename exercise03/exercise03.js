$(".RevealCard-header").click(function() {
  console.log('clicked')
  $(this).next('.RevealCard-list').toggle( "slow");
  $(this).toggleClass('changed');
});