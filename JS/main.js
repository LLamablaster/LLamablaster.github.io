window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("main").classList.remove("fade-out");
});

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