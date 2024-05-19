var drop_button = document.querySelector("#dropdown-btn");
var dropdown = document.querySelector("#dropdown");
var close = document.querySelector("#close-btn");


// window resize

window.addEventListener("resize" , () => {
    dropdown.style.display = "none";
    document.body.style.overflow = "";
})

// navbar



drop_button.addEventListener("mousedown" , () => {
    dropdown.style.display = "block";
    document.body.style.overflow = "hidden"; 
})


close.addEventListener("mousedown" , () => {
    dropdown.style.display = "none";
    document.body.style.overflow = "";

});