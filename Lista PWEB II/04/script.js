document.addEventListener('DOMContentLoaded', function() {
  var stream = document.querySelector('.gallery__stream');
  var items = document.querySelectorAll('.gallery__item');
  const bNext = document.querySelector("#next");
  const bPrev = document.querySelector("#prev");
  const check = document.querySelector("#check");

  var prev = document.querySelector('.gallery__prev');
    var anterior =  function() {
      stream.insertBefore(items[items.length - 1], items[0]);
      items = document.querySelectorAll('.gallery__item');
    }
    check.onchange = function(){
      if (check.checked) {
        prev.removeEventListener('mouseover', anterior);
        next.removeEventListener('mouseover', prox);
      }else{
        prev.addEventListener('mouseover', anterior);
        next.addEventListener('mouseover', prox);
      }
    }

    prev.addEventListener('click', anterior);
    prev.addEventListener('mouseover', anterior);
    
    var next = document.querySelector('.gallery__next');
    var prox = function() {
      stream.appendChild(items[0]);
      items = document.querySelectorAll('.gallery__item');
    }
    next.addEventListener('click',prox);
    next.addEventListener('mouseover', prox);
  
  bPrev.onclick = function(){
    stream.appendChild(items[0]);
    items = document.querySelectorAll('.gallery__item');
  }

  bNext.onclick = function(){
    stream.insertBefore(items[items.length - 1], items[0]);
    items = document.querySelectorAll('.gallery__item');
  }
});