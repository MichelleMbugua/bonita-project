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