
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle
  ('window-scroll', window.scrollY > 0)
})


/////////////////////////show/hide faq answer //////////////////////////////////

// const faqs = document.querySelectorAll('.faq');

// faqs.forEach(faq => {
//   faq.addEventlistener('click', () => {
//       faq.classList.toogle('open');
//   })
// })





// show/hide nav menu ///
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

// menu.style.display = "none";
// closeBtn.style.display = "none";
// menuBtn.style.display = "inline-block";

menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
})

// close nav menu ///
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav)




