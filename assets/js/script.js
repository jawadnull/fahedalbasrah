'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}



/*

----- contact functionality-------

*/


function sendEmail(){
    
  Email.send({
    SecureToken:"f71e76f4-2f62-42be-b7dc-543dd859c4c3",
     To : "joud997700@gmail.com",
    From : document.getElementById("email").value,
    Subject : "new contact from the subject",
    Body : "Name: "+ document.getElementById("name").value +
    "<br>Email :" + document.getElementById("email").value +
    "<br>Phone :" + document.getElementById("phone").value +
    "<br>Massage :" + document.getElementById("massage").value

  }).then(
  message => alert("تم الارسال بنجاح")
   );



}

