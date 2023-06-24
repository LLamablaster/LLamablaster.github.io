window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("main").classList.remove("fade-out");
});

document.getElementById("contact").style.visibility = "hidden"

function validateForm() {
    let name = document.forms["contact"]["name"].value;
    if (name == "") {
        alert("Please enter your name before submitting")
        return false;
    }
}

$(".col-minislides > div:gt(0)").hide();

setInterval(function() {
    $(".col-minislides > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo(".col-minislides"); 
}, 5000)

function openContact() {
    var contact = document.getElementById("contact");
    var bg = document.getElementById("floating-contact-background");
    var dimmer = document.getElementById("dimmer");
    
    contact.style.visibility = "visible";
    contact.style.right = 0;
    contact.style.opacity = 1;
    bg.style.width = "100%";
    bg.style.height = "100%";
    bg.style.backgroundImage = "linear-gradient(to bottom right,\
        rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), black)";
    dimmer.style.opacity = .5;
}

function closeContact() {
    var contact = document.getElementById("contact");
    var bg = document.getElementById("floating-contact-background");
    var dimmer = document.getElementById("dimmer");
    
    contact.style.right = "-200px";
    contact.style.opacity = 0;
    bg.style.width = "200px";
    bg.style.height = "200px";
    bg.style.backgroundImage = "linear-gradient(to bottom right, \
        rgba(0, 0, 0, .0), rgba(0, 0, 0, .0), rgba(0, 0, 0, .0), black)";
    dimmer.style.opacity = 0;
    setTimeout(() => contact.style.visibility = "hidden", 1000)
}

function toggleContact() {
    contact = document.getElementById("contact");
    console.log(contact);
    console.log(contact.style.visibility);
    if (contact.style.visibility == "hidden" && contact.style.opacity == 0) {
        openContact();
    } else if (contact.style.opacity == 1) {closeContact()}
}

function changeSlides(index) {
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        slides[i].style.zIndex = "0";
        
    }
    slides[index-1].style.opacity = "1";
    slides[index-1].style.zIndex = "1";
}

changeSlides(1);