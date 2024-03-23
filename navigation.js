document.addEventListener("DOMContentLoaded", function() {
    fetch("navigation.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navigation").innerHTML = data;
            const scriptElement = document.createElement('script');
            scriptElement.src = "scripts.js";
            document.body.appendChild(scriptElement);
        });
});