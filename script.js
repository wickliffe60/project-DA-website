

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
                
                function myFunction(imgs) {
                    var expandImg = document.getElementById("expandedImg");
                    var imgText = document.getElementById("imgtext");
                    expandImg.src = imgs.src;
                    imgText.innerHTML = imgs.alt;
                    expandImg.parentElement.style.display = "block";
                }