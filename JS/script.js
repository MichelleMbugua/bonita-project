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