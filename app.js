$(document).ready(function () {
    $('#icon').click(function () {
        $('ul').toggleClass('show');
       });
   });
   
const plus = document.querySelector(".content-btn"),
      num = document.querySelector(".container-span");

      let a = 1;
      plus.addEventListener("click", function(){
        a++;
        num.innerText = a;
      })