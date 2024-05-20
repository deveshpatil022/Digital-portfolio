// Animated Transitions
const fadeElements = document.querySelectorAll('.fade-in');

const fadeIn = (element) => {
  element.style.transition = 'opacity 1s';
  element.style.opacity = 1;
};

const handleScroll = () => {
  const windowHeight = window.innerHeight;
  const threshold = 200;

  fadeElements.forEach(element => {
    const { top, height } = element.getBoundingClientRect();

    if (top < (windowHeight + threshold) && top > -height - threshold) {
      fadeIn(element);
    }
  });
};

window.addEventListener('scroll', handleScroll);

// Smooth Scrolling
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    const animation = (currentTime) => {
      if (!start) start = currentTime;
      const timeElapsed = currentTime - start;
      let progress = Math.min(timeElapsed / duration, 1);
      const newPosition = startPosition + distance * easeInOutQuad(progress);
      window.scrollTo(0, newPosition);
      if (progress < 1) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  });
});

const easeInOutQuad = (t) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

// Interactive Project Previews
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const projectModal = document.querySelector(`#${card.dataset.modalId}`);
    projectModal.style.display = 'block';
  });
});

const closeModals = document.querySelectorAll('.modal-close');

closeModals.forEach(modal => {
  modal.addEventListener('click', () => {
    const modalId = modal.dataset.modalId;
    document.querySelector(`#${modalId}`).style.display = 'none';
  });
});

// Filtering and Sorting
const portfolioItems = document.querySelectorAll('.portfolio-item');
const filterButtons = document.querySelectorAll('.filter-button');
const sortSelect = document.querySelector('#sort-select');

const handleFilterButtonClick = (button) => {
  filterButtons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  const category = button.dataset.category;

  portfolioItems.forEach(item => {
    const isVisible = category === 'all' || item.dataset.category === category;
    item.style.display = isVisible ? 'block' : 'none';
  });
};

filterButtons.forEach(button => {
  button.addEventListener('click', () => handleFilterButtonClick(button));
});

sortSelect.addEventListener('change', () => {
  const sortBy = sortSelect.value;
  portfolioItems.forEach(item => {
    const date = new Date(item.dataset.date).getTime();
    item.style.order = sortBy === 'newest' ? -date : date;
  });
});

// Contact Form Validation
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const contactBtn = document.querySelector('#contact-btn');
document.addEventListener('DOMContentLoaded', function() {
  // Select the link for the traffic light circuit PDF
  const trafficLightLink = document.querySelector('C:\Users\deves\OneDrive\Desktop\PORTFOLIO WEBSITE\Traffic light using IC555.pdf');

  // Add click event listener to the link
  trafficLightLink.addEventListener('click', function(event) {
    // Prevent the default behavior of the link
    event.preventDefault();
    
    // Get the href attribute of the link (URL of the PDF file)
    const pdfUrl = trafficLightLink.getAttribute('C:\Users\deves\OneDrive\Desktop\PORTFOLIO WEBSITE\Traffic light using IC555.pdf');
    
    // Open the PDF file in a new tab/window
    window.open(pdfUrl, '_blank');
  });
});
