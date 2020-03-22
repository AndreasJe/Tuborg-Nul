//LOADER FUNKTION - Skjuler content, mens den viser loading gif

document.onreadystatechange = function() {
  var state = document.readyState
  if (state == 'interactive') {
    document.getElementById('contents').style.visibility = "hidden";
  } else if (state == 'complete') {
    setTimeout(function() {
      document.getElementById('interactive');
      document.getElementById('load').style.visibility = "hidden";
      document.getElementById('mainWrapper').style.visibility = "visible";
    }, 4300);
  }
}

//SPIL KNAP - ændrer bare Display:none til Display:block

function visSpil() {

  document.getElementById("galleri").style.display = "block";
  console.log("Viser galleri")
  plusSlides(0);
  console.log("Viser første slide i galleri")
  document.getElementById("overlay").style.display = "block";
  console.log("ligger et overlay bag ved galleri - primært til mobil")
  document.getElementById("lukKnap").style.display = "block";
  console.log("Henter Luk knappen frem igen")
};


function lukSpil() {
  document.getElementById("galleri").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("lukKnap").style.display = "none";
  console.log("Fjern Overlay, Galleri og luk-knappen igen")
};

// Slideshow JS fra W3Schools. Ingen grund til at skrive det fra bunden.

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}