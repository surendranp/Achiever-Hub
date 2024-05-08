const scriptURL = 'https://script.google.com/macros/s/AKfycbw8KoGl1qPD6sFBSPNYqtRJPlOgoBQrhhh5SZoqKgRC5FOuLrhpZ2BHZsoxc5Ii4air2w/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})