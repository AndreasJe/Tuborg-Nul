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
    }, 300);
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



//script til søjlediagram

const values = [39, 52, 66, 108, 128];
const output = document.querySelector("#output");
const total = values.reduce((sum, value) => sum + value);
//med metoden "reduce" kan jeg udregne summen af tallene i mit array
document.querySelectorAll(".bars line").forEach((bar, i) => {
  bar.setAttribute("y1", 120 - values[i]);
  bar.setAttribute("data-value", values[i]);
  bar.setAttribute("data-procent", values[i] / total * 100);
  bar.addEventListener("mouseover", e => vis(e)); //vis data i output ved mouseover
  bar.addEventListener("mouseout", skjul); // skjul data ved mouseout
});


//denne function viser <p> output-element og ændrer textContent dynamisk
function vis(e) { //e henviser her til mouseover eventet
  //        output.textContent = Math.round(e.target.dataset.procent) + " %";
  output.textContent = e.target.dataset.liter + " liter";
  //        output.textContent = e.target.dataset.year + ": " + e.target.dataset.liter + " liter";
  output.style.display = "block";
  window.addEventListener("mousemove", followMouse); // NB: dennne eventlistener er på window

}



//denne function får output-element til at følge musemarkøren, hvis
function followMouse(e) { //e henviser her til mousemove eventet
  output.style.top = (e.clientY - 5) + 'px';
  output.style.left = (e.clientX) + 'px';
}

//denne function skjuler output-element og fjerner eventListener'en fra window
function skjul() {
  output.style.display = "none";
  window.removeEventListener("mousemove", followMouse);
}