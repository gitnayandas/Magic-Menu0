// JavaScript to handle active link and dark mode toggle

// Get all list items
const lists = document.querySelectorAll('.list');

// Function to activate the clicked link
function activeLink() {
    lists.forEach((list) => {
        list.classList.remove('active');
    });
    this.classList.add('active');
}

// Add event listener to each list item
lists.forEach((list) => {
    list.addEventListener('click', activeLink);
});

// Get dark mode toggle and navigation elements
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const navigation = document.querySelector('.navigation');

// Add event listener to dark mode toggle
darkModeToggle.addEventListener('click', () => {
    navigation.classList.toggle('dark');
    document.body.classList.toggle('dark');
    // Save dark mode preference in local storage
    const isDarkMode = navigation.classList.contains('dark');
    localStorage.setItem('dark-mode', isDarkMode);
});

// Restore dark mode from local storage
if (localStorage.getItem('dark-mode') === 'true') {
    navigation.classList.add('dark');
    document.body.classList.add('dark');
}
