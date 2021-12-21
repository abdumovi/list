let btn = document.querySelectorAll('.btns');
let select = document.querySelector('.form-select');
let group = document.querySelector('.btn-group');
let btns = document.querySelector('.btn-group');
btn.forEach(function(item){
  item.addEventListener('click',function(e){
    for(let i of btn){
      i.classList.remove('active');
    }
    e.target.classList.add('active');
  });
});


function myFunction(x) {
  if (x.matches) { // If media query matches
    select.style.display = "none";
    btns.style.display = 'block';
  } else {
    select.style.display = "block";
    btns.style.display = 'none';
  }
let a = 20;
}
let x = window.matchMedia("(min-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction);
