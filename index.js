    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');
    
    menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }
    
    window.onscroll = () =>{
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    };
    
    
    let loginForm = document.querySelector('.login-form');

    document.querySelector("#login-btn").onclick=() =>{
        loginForm.classList.toggle('active');
    }
    
    var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}


var fullimageBox = document.getElementById ("fullimageBox");
var fullimage = document.getElementById ("fullimage");

function openfullimage(pic) {
    fullimageBox.style.display = "flex";
    fullimage.src = pic;
}

function closefullimage() {
    fullimageBox.style.display = "none";
}
