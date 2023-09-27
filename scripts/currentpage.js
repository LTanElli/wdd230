// JavaScript code in a separate file (e.g., navigation.js)

document.addEventListener('DOMContentLoaded', function () {
    // Get the current page's URL
    const currentPageUrl = window.location.href;
  
    // Get all navigation links
    const navigationLinks = document.querySelectorAll('nav a');
  
    // Loop through the links
    navigationLinks.forEach(link => {
      // Check if the link's href matches the current page's URL
      if (link.href === currentPageUrl) {
        link.classList.add('current-page'); // Apply the class if it's a match
      }
    });
  });
  