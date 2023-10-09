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
    input.setAttribute("name", "name");
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

const scriptURL = 'https://script.google.com/macros/s/AKfycbzr4A1DLklr1kYV5ctojTzBWCBjUufVOpZ6t1Z9HdtJz1xJBcWhFgiGg1iePqY7-JIk9A/exec'
  const form = document.forms['rsvpForm']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })