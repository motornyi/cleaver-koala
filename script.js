document.onload = function() {
  var script = document.createElement('script');
  script.onLoad = function() {
    hljs.initHighlightingOnLoad();
  }
  script.setAttribute('src', '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/highlight.min.js');
  document.body.appendChild(script);

  var style = document.createElement(link);
  style.setAttribute('rel', 'stylesheet');
  style.setAttribute('type', 'text/css');
  style.setAttribute('href', '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/default.min.css');
}


document.addEventListener("DOMContentLoaded", function() {
  var elements = document.getElementsByTagName('code');
  console.log(elements);
  elements.forEach(function(el) {
    el.classList.add('')
  })
 });
