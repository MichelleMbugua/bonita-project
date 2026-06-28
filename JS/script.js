// Dark and Light Mode
document.addEventListener('DOMContentLoaded', () => {
const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    if (!toggleButton || !themeIcon) return;
    
    const currentTheme = localStorage.getItem('theme');

    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) themeIcon.textContent = 'light_mode'; // Sun icon shows when system is dark
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeIcon) themeIcon.textContent = 'dark_mode';  // Moon icon shows when system is light
    }


    toggleButton.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeIcon) themeIcon.textContent = 'light_mode';
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            if (themeIcon) themeIcon.textContent = 'dark_mode';
            localStorage.setItem('theme', 'light');
        }
    });
});
// Gallery Filtering

// Wait for the page to load completely before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    const filterLinks = document.querySelectorAll('.category-list a');
    const galleryItems = document.querySelectorAll('.gallery-item'); 

    // Only run if we are actually on the gallery page
    if (filterLinks.length > 0) {
        
        filterLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Prevent the link from jumping to the top of the page
                e.preventDefault();

                //  Remove the "active" styling from all buttons
                filterLinks.forEach(item => item.classList.remove('active'));
                
                //  Add the "active" styling to the button that was just clicked
                this.classList.add('active');

                //  Get the category we want to filter by
                const selectedCategory = this.getAttribute('data-category');

                //  Loop through all gallery items to show or hide them
                galleryItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');

                    if (selectedCategory === 'all' || selectedCategory === itemCategory) {
                        // Show the item
                        item.classList.remove('hide');
                    } else {
                        // Hide the item
                        item.classList.add('hide');
                    }
                });
            });
        });
    }
});

// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form form");

    if (form) {
        form.addEventListener("submit", (event) => {
            // Fetch form inputs
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const message = document.getElementById("message").value.trim();

            // Validation flag
            let isValid = true;
            let errorMessage = "";

            //  Name Validation
            if (name.length < 2) {
                isValid = false;
                errorMessage += "Please enter a valid name (at least 2 characters).\n";
            }

            //  Email Validation 
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                isValid = false;
                errorMessage += "Please enter a valid email address.\n";
            }

            // Phone Number Validation 
            const phoneRegex = /^(?:\+254|0)[17]\d{8}$/;
            if (!phoneRegex.test(phone.replace(/\s+/g, ''))) { // removes spaces for checking
                isValid = false;
                errorMessage += "Please enter a valid Kenyan phone number (e.g., 0700123456).\n";
            }

            //  Message Validation
            if (message.length < 10) {
                isValid = false;
                errorMessage += "Your message must be at least 10 characters long.\n";
            }

            // If any check fails, block submission and alert the user
            if (!isValid) {
                event.preventDefault(); // Stops form from submitting to submit_form.php
                alert(errorMessage);
            }
        });
    }
});