function toggleTheme(){
    var page = document.body
    page.classList.toggle("dark-mode")
}

let darkbutton = document.getElementById("toggleButton");
darkbutton.onclick = toggleTheme;