const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleButton.textContent = '☀️ Light Mode';
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleButton.textContent = '🌙 Dark Mode';
}

toggleButton.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleButton.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleButton.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});