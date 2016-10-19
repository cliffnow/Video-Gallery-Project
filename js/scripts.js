
$(document).ready(function() {


// ----- unslider example

// $('.my-slider').unslider({
//   autoplay: true
// });


$('.flexslider').flexslider({
    animation: "slide",
    slideshowSpeed: 7000
  });



  $('ul#filter a').click(function() {
    // removes current class from anywhere within the ul
    $('ul#filter .current').removeClass('current');
    // places the current class on the name you clicked
    $(this).parent().addClass('current');
    // creates a variable that takes the txt on the name clicked, and makes it all lowercase
    // if it has spaces, those spaces are replaced with hyphens
    var filterVal = $(this).text().toLowerCase().replace(' ', '-');

    // if the name you clicked on is 'all', anything with a hidden class is removed so it shows all
    if(filterVal == 'all') {
      $('ul#portfolio li.hidden').fadeIn('slow')
    } else {
          $('ul#portfolio li').each(function() {
            // checks to see the class of the list item is not the same as the one clicked
            if(!$(this).hasClass(filterVal)) {
              // adds a hidden class "if applicable" to those classes not matching the clicked or just fades out
              $(this).fadeOut('normal').addClass('hidden');
            } else {
              // removes hidden class "if applicable" to the name picked so it is viewed or it just fades in
              $(this).fadeIn('slow').removeClass('hidden');
            }
          });
        }



    return false;
  });




 //  $('ul#filter a').click(function() {
 //  //  $(this).css('outline','none');
 //   $('ul#filter .current').removeClass('current');
 //   $(this).parent().addClass('current');
 //
 //   // take the text and turn it all lowercase. Replace any spaces to hyphens if any. If not you can remove ".replace(' ','-')"
 //   var filterVal = $(this).text().toLowerCase();
 //
 //   if(filterVal == 'all') {
 //     $('ul#portfolio li.hidden').fadeIn('slow').removeClass('hidden');
 //   } else {
 //     $('ul#portfolio li').each(function() {
 //       if(!$(this).hasClass(filterVal)) {
 //         $(this).fadeOut('normal').addClass('hidden');
 //       } else {
 //         $(this).fadeIn('slow').removeClass('hidden');
 //       }
 //     });
 //   }
 //
 //   return false;
 // });
 $('button').click(function(e){
     $('#myDiv').toggleClass('fullscreen');
 });


});
