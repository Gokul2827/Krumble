const scriptURL = 'https://script.google.com/macros/s/AKfycbzN27tLuHJhYI3SydRQFjFh8dMwqnYaDK8fU740qAzCsGFt6ggpagmWQ0KMw5IEE9ji/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})