// ============================================
// Theme toggle
// (initial theme is set by the inline script in
// each page's <head> to avoid a flash of the
// wrong theme before this file loads)
// ============================================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

// ============================================
// Highlight the nav link for the current page
// ============================================

// On the root URL ("/") pathname ends with "", so fall back to index.html
const activePageName = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach((link) => {
  const linkPage = link.getAttribute("href").split("/").pop();
  link.classList.toggle("active", linkPage === activePageName);
});
