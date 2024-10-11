function darkMode() {
    const btn = document.querySelector('button')
    var dark = document.body;
    dark.classList.toggle("dark-mode");
    if (btn.innerText == "Alternar para Dark Mode") {
        btn.innerText = "Alternar para Light Mode"
    } else {
        btn.innerText = "Alternar para Dark Mode"
    }

 }