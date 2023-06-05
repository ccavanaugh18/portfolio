// Scrolling with smooth behavior

const seePortfolioBtn = document.querySelector('.see-portfolio-btn');
const projectsSection = document.querySelector('.projects');

seePortfolioBtn.addEventListener('click', (event) => {
  event.preventDefault();
  projectsSection.scrollIntoView({ behavior: 'smooth' });
});

const aboutLink = document.querySelector('a[href="#about"]');
const aboutSection = document.querySelector('.about');

aboutLink.addEventListener('click', (event) => {
  event.preventDefault();
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

const projectsLink = document.querySelector('a[href="#projects"]');
const projectSection = document.querySelector('.projects');

projectsLink.addEventListener('click', (event) => {
  event.preventDefault();
  projectSection.scrollIntoView({ behavior: 'smooth' });
});

const contactLink = document.querySelector('a[href="#contact"]');
const contactSection = document.querySelector('.contact');

contactLink.addEventListener('click', (event) => {
  event.preventDefault();
  contactSection.scrollIntoView({ behavior: 'smooth' });
});


