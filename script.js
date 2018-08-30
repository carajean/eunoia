//----- Lightbox ------
//open modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

//close modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

//show slides & captions
function currentSlide(n) {
  showSlides(slideIndex = n);
}

let slideIndex = 1;
showSlides(slideIndex);

//next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

//----- Misc -----

//one checkbox open at a time - doesn't quite work
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");

c1.onclick = function oneAtATime() {
  if (this.checked) {
    c2.checked = false;
  }
}

c2.onclick = function oneAtATime() {
  if (this.checked) {
    c1.checked = false;
  }
}

//when label:hover, show/hide arrow icon
let c1labelArrow = document.getElementById("c1labelArrow");
let c2labelArrow = document.getElementById("c2labelArrow");

c1.onmouseover = function show() {
  c1labelArrow.style.visibility = "visible";
}
c1.onmouseout = function hide() {
  c1labelArrow.style.visibility = "hidden";
}

c2.onmouseover = function show() {
  c2labelArrow.style.visibility = "visible";
}
c1.onmouseout = function hide() {
  c1labelArrow.style.visibility = "hidden";
}

//arrow flips on c1/2 click
function flip() {
  labelArrow.style.transform= "rotate(225deg)";
  labelArrow.style.transition= "all 0.3s ease";
}

c1.addEventListener("click", flip);
c2.addEventListener("click", flip);