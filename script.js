document.onreadystatechange = function() {
  var state = document.readyState
  if (state == 'interactive') {
    document.getElementById('contents').style.visibility = "hidden";
  } else if (state == 'complete') {
    setTimeout(function() {
      document.getElementById('interactive');
      document.getElementById('load').style.visibility = "hidden";
      document.getElementById('mainWrapper').style.visibility = "visible";
    }, 500);
  }
}


//
// // SCROLL LOOP FUNKTION. SER EFTER OM ET ELEMENT ER I VIEWPORT OG DEREFTER TILDELER DET EN CLASS. KAN BRUGES PÅ MANGE MÅDER
//
// var elementsToShow = document.querySelectorAll('.show-on-scroll');
//
// function loop() {
//
//   elementsToShow.forEach(function(element) {
//     if (isElementInViewport(element)) {
//       element.classList.add('is-visible');
//     } else {
//       element.classList.remove('is-visible');
//     }
//   });
//
//   scroll(loop);
// }
//
// loop();
// console.log("scroll-loop loaded");
//
// // Helper function from: http://stackoverflow.com/a/7557433/274826
// function isElementInViewport(el) {
//   // special bonus for those using jQuery
//   if (typeof jQuery === "function" && el instanceof jQuery) {
//     el = el[0];
//   }
//   var rect = el.getBoundingClientRect();
//   return (
//     (rect.top <= 0 &&
//       rect.bottom >= 0) ||
//     (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
//     (rect.top >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
//   );
// }
// console.log("isElementInViewport loaded");