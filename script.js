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

function oneAtATime() {
  if (this.checked) {
    // Item clicked has been turned on
    if (this === c1) {
      c2.checked = false;
    } else {
      c1.checked = false;
    }
  }
}
c1.addEventListener("change", oneAtATime);
c2.addEventListener("change", oneAtATime);


//when label:hover, show/hide arrow icon
let labelArrow = document.getElementsByClassName("labelArrow");

function show() {
  labelArrow.style.visibility = "visible";
}
c1.addEventListener("mouseover", show);
c2.addEventListener("mouseover", show);

function hide() {
  labelArrow.style.visibility = "hidden";
}
c1.addEventListener("mouseout", hide);
c2.addEventListener("mouseout", hide);

//arrow flips on c1/2 click
function flip() {
  labelArrow.style.transform= "rotate(225deg)";
  labelArrow.style.transition= "all 0.3s ease";
}

c1.addEventListener("click", flip);
c2.addEventListener("click", flip);