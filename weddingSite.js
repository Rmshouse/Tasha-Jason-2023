const openRsvp = document.getElementById("openRsvp");
const formWrapper = document.getElementById("formWrapper");
const welcome = document.getElementById("welcome");

openRsvp.addEventListener("click", function() {
    if (formWrapper.style.display = "none") {
        formWrapper.style.display = "block";
        welcome.style.display = "none";
    }
})

const addPerson = document.getElementById("addPerson");
const rsvpForm = document.getElementById("rsvpForm");

addPerson.addEventListener("click", function() {
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Name...");
    rsvpForm.insertBefore(input, addPerson);
})

let submitRsvp = document.getElementById("submitRsvp");
let fireworks = document.getElementById("fireworks");

submitRsvp.addEventListener("click", function() {
    if (formWrapper.style.display = "block") {
        formWrapper.style.display = "none";
        fireworks.style.display = "block";
    }
})


window.addEventListener("load", function() {
    const form = document.getElementById('rsvpForm');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
      })
    });
});