//Get button:
mybutton = document.getElementById("myBtn");

// scroll to top function
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//nav function
function myFunction() {
  var x = document.getElementById("mytopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//popup functions
function toggle(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')
  var popup = document.getElementById('popup');
  popup.classList.toggle('active')
}