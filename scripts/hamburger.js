// // hamburger.js
// document.addEventListener('DOMContentLoaded', function () {
//     const navToggle = document.getElementById('nav-toggle');
//     const mobileNav = document.querySelector('.mobile-nav');
  
//     // Function to toggle the menu icon
//     function toggleMenuIcon() {
//       if (navToggle.checked) {
//         navToggle.nextElementSibling.innerHTML = '&#10006;'; // Close symbol
//       } else {
//         navToggle.nextElementSibling.innerHTML = '&#9776;'; // Hamburger menu
//       }
//     }
  
//     // Close the mobile menu when a link is clicked
//     const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
//     mobileNavLinks.forEach((link) => {
//       link.addEventListener('click', () => {
//         navToggle.checked = false;
//         toggleMenuIcon();
//       });
//     });
  
//     // Initial call to set the menu icon
//     toggleMenuIcon();
//   });

// menu.js
document.addEventListener('DOMContentLoaded', function () {
    // Close the mobile menu when a link is clicked
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        document.getElementById('nav-toggle').checked = false;
      });
    });
  });
  
  