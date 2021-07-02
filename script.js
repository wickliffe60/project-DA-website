//Scroll button
var mybutton = document.getElementById("Bttn");
                window.onscroll = function() {scrollFunction()};
                function scrollFunction() {
                if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                    mybutton.style.display = "block";
                } else {
                    mybutton.style.display = "none";
                }
                }
                function topFunction() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                }
                //Image gallery Tab
                function myFunction(imgs) {
                    var expandImg = document.getElementById("expandedImg");
                    var imgText = document.getElementById("imgtext");
                    expandImg.src = imgs.src;
                    imgText.innerHTML = imgs.alt;
                    expandImg.parentElement.style.display = "block";
                }
                //Contact Us form validation
                function Discoverart() {
                    var email = 
                        document.forms["RegForm"]["EMail"];
                    var phone = 
                        document.forms["RegForm"]["Telephone"];
                    if (email.value == "") {
                        window.alert(
                          "Please enter a valid e-mail address.");
                        email.focus();
                        return false;
                    }
                    if (phone.value == "") {
                        window.alert(
                          "Please enter your telephone number.");
                        phone.focus();
                        return false;
                    }
      
                }
           
               