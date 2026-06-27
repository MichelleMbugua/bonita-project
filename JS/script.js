document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    if (!toggleButton) return;
    
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleButton.textContent = '☀️';
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleButton.textContent = '🌙 ';
}

toggleButton.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleButton.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleButton.textContent = '🌙 ';
        localStorage.setItem('theme', 'light');
    }
});});


// Wait for the page to load completely before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    const filterLinks = document.querySelectorAll('.filter-menu a');
    const galleryItems = document.querySelectorAll('.category-list ');

    // Only run if we are actually on the gallery page
    if (filterLinks.length > 0) {
        
        filterLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Prevent the link from jumping to the top of the page
                e.preventDefault();

                // 1. Remove the "active" styling from all buttons
                filterLinks.forEach(item => item.classList.remove('active'));
                
                // 2. Add the "active" styling to the button that was just clicked
                this.classList.add('active');

                // 3. Get the category we want to filter by
                const selectedCategory = this.getAttribute('data-category');

                // 4. Loop through all gallery items to show or hide them
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