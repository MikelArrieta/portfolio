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

function linkAction() {
   const navMenu = document.getElementById('nav-menu');
   navMenu.classList.remove('show-menu');
}

navLinks.forEach(n => n.addEventListener('click', linkAction));

/*==================== Accordion skills ====================*/
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function togggleSkills() {
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

/*==================== Qualification tabs ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
   tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target);

      tabContents.forEach((tabContent) => {
         tabContent.classList.remove('qualification__active');
      });

      target.classList.add('qualification__active');

      tabs.forEach((tab) => {
         tab.classList.remove('qualification__active');
      });
      tab.classList.add('qualification__active');
   });
});

/*==================== Services modal ====================*/
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

function openModal(modalIndex) {
   modalViews[modalIndex].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
   modalBtn.addEventListener('click', () => {
      openModal(i);
   });
});

modalCloses.forEach((modalClose) => {
   modalClose.addEventListener('click', () => {
      modalViews.forEach((modalView) => {
         modalView.classList.remove('active-modal');
      });
   });
});

let swiper = new Swiper('.portfolio__container', {
   cssMode: true,
   loop: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
});

/*==================== Scroll sections active link ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
   const scrollY = window.scrollY;

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
      } else {
         document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
      }
   });
}

window.addEventListener('scroll', scrollActive);

/*==================== Change background header ====================*/
function scrollHeader() {
   const nav = document.getElementById('header');
   // When the scroll is greater than 80 viewport height, and the scroll-header class to the header tag
   if (window.scrollY >= 80) nav.classList.add('scroll-header');
   else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*==================== Show scroll up ====================*/
function scrollUp() {
   const scrollUp = document.getElementById('scroll-up');
   // When the scroll is higher than 560 viewport height, add the show-scroll class to the tag with the scroll-up class
   if (window.scrollY >= 560) scrollUp.classList.add('show-scroll');
   else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);