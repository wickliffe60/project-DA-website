//Scroll button to the top

 //Collect the button:
mybutton = document.getElementById("arrow");

//Button appears mear bottom of screen
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 2000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When button with arrow symbol is clicked, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
              
               //top navigation menu
               function myFunction() {
                var x = document.getElementById("mynavbar");
                if (x.className === "navbar") {
                  x.className += " responsive";
                } else {
                  x.className = "navbar";
                }
              }
              
              //validate email address box
              function validatemailfm(input) {

                var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
              
                if (input.value.match(validRegex)) {
              
                  alert("Valid email address - Your email has been submitted!");
              
                  document.vmail.vtext.focus();
              
                  return true;
              
                } else {
              
                  alert("Invalid email address! Please enter valid email address.");
              
                  document.vmail.vtext.focus();
              
                  return false;
              
                }
              
              }