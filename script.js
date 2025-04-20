function displayCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const timeString = `${hours}:${minutes}`;

  document.getElementById('time').textContent = timeString;
}

window.onload = displayCurrentTime;

document.getElementById('translator-toggle').addEventListener('change', function() {
  const slider = document.querySelector('.slider');
  const labels = document.querySelector('.labels');

  if (this.checked) {
    labels.textContent = 'RU';
    labels.style.marginLeft = '15px';
    slider.classList.add('active');
    wordKey.style.paddingLeft = '80px';
    skillsContainer.style.marginLeft = '30px';
    function updateSpecificMargins(sections) {
      headerLineAndBacklight.style.marginLeft = '70px';
      sections.forEach(section => {
        if (section.marginLeft === '47px') {
          section.marginLeft = '70px';
        } else if (section.marginLeft === '196px') {
          section.marginLeft = '213px';
        } else if (section.marginLeft === '342px') {
          section.marginLeft = '348px';
        } else if (section.marginLeft === '503px') {
          section.marginLeft = '489px';
        } else if (section.marginLeft === '673px') {
          section.marginLeft = '643px';
        }
      });
    }
    updateSpecificMargins(sections);
  } else {
    labels.textContent = 'EN';
    labels .style.marginLeft = '57px';
    slider.classList.remove('active');
    wordKey.style.paddingLeft = '15px';
    skillsContainer.style.marginLeft = '-40px';
    function updateSpecificMargins(sections) {
      headerLineAndBacklight.style.marginLeft = '47px';
      sections.forEach(section => {
        if (section.marginLeft === '70px') {
          section.marginLeft = '47px';
        } else if (section.marginLeft === '213px') {
          section.marginLeft = '196px';
        } else if (section.marginLeft === '348px') {
          section.marginLeft = '342px';
        } else if (section.marginLeft === '489px') {
          section.marginLeft = '503px';
        } else if (section.marginLeft === '643px') {
          section.marginLeft = '673px';
        }
      });
    }
    updateSpecificMargins(sections);
  }
});

const wordKey = document.getElementById('wordKey');
const skillsContainer = document.getElementById('skillsContainer');
const headerLineAndBacklight = document.getElementById('headerLineAndBacklight');
const headerLinkOne = document.getElementById('headerLinkOne');
const headerLinkTwo = document.getElementById('headerLinkTwo');
const headerLinkThree = document.getElementById('headerLinkThree');
const headerLinkFour = document.getElementById('headerLinkFour');
const headerLinkFive = document.getElementById('headerLinkFive');

let sections = [
  { id: 'home', marginLeft: '47px' },
  { id: 'scrollPointAbout', marginLeft: '196px' },
  { id: 'scrollPointSkills', marginLeft: '342px' },
  { id: 'scrollPointWorks', marginLeft: '503px' },
  { id: 'scrollPointContacts', marginLeft: '673px' },
];

function updateLinePosition() {
  let isAnyVisible = false;

  sections.forEach((section) => {
    const targetElement = document.getElementById(section.id);
    const targetRect = targetElement.getBoundingClientRect();

    if (targetRect.top < window.innerHeight && targetRect.bottom > 0) {
      isAnyVisible = true;
      headerLineAndBacklight.style.marginLeft = section.marginLeft;
    }
  });
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', updateLinePosition);


function scrollToSectionHome() {
  const section = document.getElementById('home');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth'
  });
}

function scrollToSectionAbout() {
  const section = document.getElementById('about');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition + 40;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToSectionSkills() {
  const section = document.getElementById('skills');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition + 30;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToSectionMyWorks() {
  const section = document.getElementById('myWorks');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 10;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToSectionContacts() {
  const section = document.getElementById('contacts');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth'
  });
}

function showMassage() {
  const popupBlock = document.getElementById('message');
  popupBlock.classList.add('active');
}

window.addEventListener('load', () => {
  setTimeout(showMassage, 750)
});

document.addEventListener('DOMContentLoaded', function() {
  const translatorToggle = document.getElementById('translator-toggle');
  const translatableElements = document.querySelectorAll('[data-ru], [data-en]');

  translatorToggle.addEventListener('change', function() {
      translatableElements.forEach(element => {
          if (translatorToggle.checked) {
              // Переключаем на английский
              element.textContent = element.getAttribute('data-en');
          } else {
              // Переключаем на русский
              element.textContent = element.getAttribute('data-ru');
          }
      });
  });
});

let activeIndex = 0;

function changeSlide(index) {
  const slides = document.querySelectorAll('.my-works__slide');

  slides[activeIndex].classList.remove('my-works__slide-active');
  slides[activeIndex].classList.add('my-works__slide-inactive');
  
  slides[index].classList.remove('my-works__slide-inactive');
  slides[index].classList.add('my-works__slide-active');

  activeIndex = index;
}