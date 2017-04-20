// Add your custom js here

// $('.RevealCard-header').click( function() {
//   console.log('hello');
//   $(this).css({backgroundColor:'red'})
// })

$( ".RevealCard-header" ).click(function() {
  console.log('clicked')
  $(this).next('.RevealCard-list').toggle( "slow", function() {
    //Animation complete.
  });
  // $( ".RevealCard-list" ).toggle( "slow", function() {
    // Animation complete.
  // });
});