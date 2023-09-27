document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
  
    // Close the mobile menu when a link is clicked
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.checked = false;
      });
    });
  });
  
  