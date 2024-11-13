// Get the theme selection dropdown
const themeSelect = document.getElementById("theme-select") || null;
const currentTheme = localStorage.getItem("theme") || null;

// Set Dropdown to selected theme
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (themeSelect) {
    themeSelect.value = currentTheme;
  }
}

// If theme changes, store in local storage
if (themeSelect) {
  themeSelect.addEventListener("change", function () {
    const selectedTheme = themeSelect.value;
    document.documentElement.setAttribute("data-theme", selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    console.log(themeSelect.value);
  });
}

// Get active page from the URL
const activePage = window.location.pathname;
const activePageName = activePage.split("/").pop(); // Get the last part of the URL path

const navLinks = document.querySelectorAll("nav a");

// Clear existing active classes
navLinks.forEach((link) => {
  link.classList.remove("active");
});

// Add the active class to the correct link
navLinks.forEach((link) => {
  // Check if the link's href includes the current page (ignores query params or hash)
  if (link.href.includes(activePageName)) {
    link.classList.add("active");
  }
});
