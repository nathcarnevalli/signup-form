confirmPassword.addEventListener('change', e => {
  if (e.target.value !== password.value) {
    e.target.nextElementSibling.textContent = '*Password did not match'
    e.target.classList = 'invalid'
  } else {
    e.target.nextElementSibling.textContent = ''
    e.target.classList = ''
    password.nextElementSibling.textContent = ''
    password.classList = ''
  }
})

email.addEventListener('change', e => {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  if (e.target.value.search(regexEmail)) {
    e.target.nextElementSibling.textContent = '*Please provide a valid Email'
    e.target.classList = 'invalid'
  } else {
    e.target.nextElementSibling.textContent = ''
    e.target.classList = ''
  }
})

password.addEventListener('change', e => {
  const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

  if (e.target.value.search(regexPassword)) {
    e.target.nextElementSibling.textContent = '*Please provide a valid Password'
    e.target.classList = 'invalid'
  } else {
    e.target.nextElementSibling.textContent = ''
    e.target.classList = ''
  }

  if (e.target.value !== confirmPassword.value) {
    e.target.nextElementSibling.textContent = '*Password did not match'
    e.target.classList = 'invalid'
  } else {
    e.target.nextElementSibling.textContent = ''
    e.target.classList = ''
    confirmPassword.nextElementSibling.textContent = ''
    confirmPassword.classList = ''
  }
})

phone.addEventListener('change', e => {
  const regexPhone =
    /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/

  if (e.target.value.search(regexPhone)) {
    e.target.nextElementSibling.textContent =
      '*Please provide a valid Phone Number'
    e.target.classList = 'invalid'
  } else {
    e.target.nextElementSibling.textContent = ''
    e.target.classList = ''
  }
})

firstName.addEventListener('change', e => {
  if (e.target.value.length < 3) {
    e.target.nextElementSibling.textContent = '*Please provide a valid Name'
    e.target.classList = 'invalid'
  } else {
    e.target.nextElementSibling.textContent = ''
    e.target.classList = ''
  }
})

lastName.addEventListener('change', e => {
  if (e.target.value.length < 3) {
    e.target.nextElementSibling.textContent = '*Please provide a valid Name'
    e.target.classList = 'invalid'
  } else {
    e.target.nextElementSibling.textContent = ''
    e.target.classList = ''
  }
})

function checkInputs(e) {
  if (firstName.value === '') {
    e.preventDefault()
    firstName.nextElementSibling.textContent = '*This field is Required'
    firstName.classList = 'invalid'
  }

  if (lastName.value === '') {
    e.preventDefault()
    lastName.nextElementSibling.textContent = '*This field is Required'
    lastName.classList = 'invalid'
  }

  if (password.value === '') {
    e.preventDefault()
    password.nextElementSibling.textContent = '*This field is Required'
    password.classList = 'invalid'
  }

  if (phone.value === '') {
    e.preventDefault()
    phone.nextElementSibling.textContent = '*This field is Required'
    phone.classList = 'invalid'
  }

  if (email.value === '') {
    e.preventDefault()
    email.nextElementSibling.textContent = '*This field is Required'
    email.classList = 'invalid'
  }

  if (confirmPassword.value === '') {
    e.preventDefault()
    confirmPassword.nextElementSibling.textContent = '*This field is Required'
    confirmPassword.classList = 'invalid'
  }
}
