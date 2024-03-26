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


// Get age
// var birthdate = new Date('2000-02-04');
// var currentDate = new Date();

// var birthYear = birthdate.getFullYear();
// var currentYear = currentDate.getFullYear();

// var age = currentYear - birthYear;

// document.getElementById('age').textContent = age;


const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').
forEach(link =>{
  if(link.href.includes(`${activePage}`) && !link.href.includes('#')){
    link.classList.add('active');}
})