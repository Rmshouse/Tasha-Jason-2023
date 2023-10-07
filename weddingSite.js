const openRsvp = document.getElementById("openRsvp");
const formWrapper = document.getElementById("formWrapper");
const main = document.getElementById("main");
const fireworks = document.getElementById("fireworks");

openRsvp.addEventListener("click", function() {
    if (formWrapper.style.display = "none") {
        formWrapper.style.display = "block";
        fireworks.style.display = "block";
        main.style.display = "none";
    }
})