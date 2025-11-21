function toggleDarkMode() {

    var body = document.body;
    var icon = document.getElementById("darkToggle");


    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        icon.src = "Images/darkmode.png";   
    } else {
        icon.src = "Images/lightmode.png";  
    }
}
