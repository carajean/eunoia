//----- lightbox ------
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

// ----- checkboxes -----
//one checkbox open at a time
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

/* ----- arrow hide ----- */
let arrow = document.getElementById('clickMeArrow');
let visual = document.getElementById('firstVisual');

function hide() {
  arrow.style.visibility = hidden;
}

firstVisual.addEventListener('click', hide);
firstVisual.addEventListener('focus', hide);