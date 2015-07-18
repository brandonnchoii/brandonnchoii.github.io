//PHOTOSET GRID PLUGIN
$('.photoset-grid-custom').photosetGrid({
  // Set the gutter between columns and rows
  gutter: '20px',
  // Manually set the grid layout
  layout: '2122132131221331313',
  // Wrap the images in links
  highresLinks: true,
  // Asign a common rel attribute
  rel: 'print-gallery',

  onInit: function(){},
  onComplete: function(){
    // Show the grid after it renders
    $('.photoset-grid-custom').attr('style', '');

    //COLORBOX PLUGIN
    $('.photoset-grid-custom a').colorbox({
      scalePhotos: true,
      maxHeight:'90%',
      maxWidth:'90%',
      arrowKey: true,
      returnFocus: false,
      opacity: 0.6,
    });
  }
});


//personal JS
fadeIn("#gallery", 2000);