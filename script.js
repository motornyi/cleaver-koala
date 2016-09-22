function higlight(selector, color = "rgba(255, 255, 255, .5)") {
  if (window.koalaHiglighted) {
    window.koalaHiglighted.forEach(el => {
      el.style.background = ""
    });
  }
  window.koalaHiglighted = Array.from(document.querySelectorAll(selector));
  window.koalaHiglighted.forEach(el => {
    el.style.background = color;
  });
}
