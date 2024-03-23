const themeSelect = document.getElementById("theme-select")
  ? document.getElementById("theme-select")
  : null;
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

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
