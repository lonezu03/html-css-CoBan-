alert('chao cung')
function changeImage() {
  
  var image = document.getElementById('myImage');
  if (image.src.match('cay-chanh-ok.jpg')) {
    image.src = "cay-nhan-ok.jpg";
    image.blur();
  
  
     } else {
     image.src = 'cay-chanh-ok.jpg';
   }
}
