document.addEventListener('DOMContentLoaded', function() {
  // Menu toggle functionality
  const menuToggle = document.querySelector('.header__menu-toggle');
  const menuOverlay = document.querySelector('.header__menu-overlay');
  const menuClose = document.querySelector('.header__menu-close');
  const menuLinks = document.querySelectorAll('.header__menu-items a');
  
  if (menuToggle && menuOverlay && menuClose) {
    // Open menu
    menuToggle.addEventListener('click', function() {
      menuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });
    
    // Close menu
    menuClose.addEventListener('click', function() {
      menuOverlay.classList.remove('active');
      document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close menu when clicking on a link
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
      });
    });
  }
  
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      // Skip if it's just "#" or empty
      if (targetId === '#' || targetId === '') {
        return;
      }
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
