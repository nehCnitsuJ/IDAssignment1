//Get button:
mybutton = document.getElementById("scrolltotop");

//when scroll down 30px, button is shown immediately
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// scroll to top functioon
function topFunction() {
  document.documentElement.scrollTop = 0; 
}