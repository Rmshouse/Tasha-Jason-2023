const openRsvp = document.getElementById("openRsvp");
const formSubmit = document.getElementById("formSubmit");
const returnHome = document.getElementById("returnHome");
const formWrapper = document.getElementById("formWrapper");
const main = document.getElementById("main");
const formSubmitted = document.getElementById("formSubmitted");
const fireworks = document.getElementById("fireworks");

openRsvp.addEventListener("click", function() {
    if (formWrapper.style.display = "none") {
        formWrapper.style.display = "block"
        main.style.display = "none";
    }
})

formSubmit.addEventListener("click", function() {
    if (formWrapper.style.display = "block") {
        formWrapper.style.display = "none";
        formSubmitted.style.display = "block";
        fireworks.style.display = "block";
    }
})

returnHome.addEventListener("click", function() {
    if (formSubmitted.style.display = "block") {
        formSubmitted.style.display = "none";
        fireworks.style.display = "none";
        main.style.display = "block";
    }
})