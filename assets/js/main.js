/*==================== Menu show/hide ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
   });
}

if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   });
}

/*==================== Remove menu mobile ====================*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction () {
   const navMenu = document.getElementById('nav-menu');
   navMenu.classList.remove('show-menu');
}

navLinks.forEach(n => n.addEventListener('click', linkAction));

/*==================== Accordion skills ====================*/
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function togggleSkills () {
   let itemClass = this.parentNode.className;

   for (let i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = 'skills__content skills__close';
   }

   if (itemClass === 'skills__content skills__close') {
      this.parentNode.className = 'skills__content skills__open';
   }
}

skillsHeader.forEach((el) => {
   el.addEventListener('click', togggleSkills);
});