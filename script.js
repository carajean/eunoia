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
check.addEventListener("onmouseover", show);

function hide() {
  labelArrow.style.visibility = "hidden";
}
check.addEventListener("onmouseout", hide);

//lightbox
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
