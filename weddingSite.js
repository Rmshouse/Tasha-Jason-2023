const openRsvp = document.getElementById("openRsvp");
const formWrapper = document.getElementById("formWrapper");
const main = document.getElementById("main");

openRsvp.addEventListener("click", function() {
    if (formWrapper.style.display = "none") {
        formWrapper.style.display = "block";
        main.style.display = "none";
    }
})