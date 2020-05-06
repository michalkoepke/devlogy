const navSlide = () => {
  const burger = document.querySelector('.burger');
  const test = document.querySelector('.nav-inside');



  burger.addEventListener('click', () => {
    test.classList.toggle('nav-inside-active');




  });
}


const iconToggle = () => {

  const ikona = document.querySelector('.burger i');
  console.log(ikona);

  ikona.addEventListener('click', () => {

    ikona.classList.toggle('fa-times');

  });

}

var mybutton = document.getElementById("floating");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



navSlide();
iconToggle();
mybutton();





// MODAL - Get DOM Elements

const modal = document.querySelector('#my-modal');
const modalBtns = document.querySelectorAll(".modalbutton-buy, .modalbutton-try, .sendbutton, button2, button2-right");

//tu sprawdzamy czy sie wybierają elementy

console.log(modalBtns);

const closeBtn = document.querySelector('.close');

// Events

// modalBtns.addEventListener('click', openModal);

// modalBtns.forEach(listObj.addEventListener('click', openModal));


modalBtns.forEach(
  function (currentValue) {
    console.log(currentValue);
    currentValue.addEventListener('click', openModal);
  }
);


console.log(modalBtns);



closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open

function openModal() {
  modal.style.display = 'block';
}

console.log(openModal);


// Close

function closeModal() {
  modal.style.display = 'none';
}


// Close If Outside Click

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}




