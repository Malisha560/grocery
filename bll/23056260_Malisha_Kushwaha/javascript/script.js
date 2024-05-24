// Aligning the pictures in the Slider mode 
var image = ['../image/a.png',"../image/b.jpg","../image/c.jpg","../image/d.jpg","../image/e.jpg",];
var x=0;
// Adding the pictures in the img form  
var imgs =document.getElementById('img');
// Sliding the image duration 
setInterval(pool,2500);
// Main function of Sliding images with the help of this
function pool() {
    if (x < image.length) 
        {
        x = x + 1;
        } 

      else 
        {
        x = 1;
        }

      // Images Slides with the help of this formula 
      imgs.innerHTML = "<img src=" + image[x - 1] + ">";
     }
