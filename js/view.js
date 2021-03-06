
const view = {}
view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case 'registerScreen':
      document.getElementById('app').innerHTML = components.registerScreen
      const registerForm = document.getElementById('form-register')
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const registerInfo = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        }
        controller.register(registerInfo)
      })
      const redirectToLogin = document.getElementById('redirect-to-login')
      redirectToLogin.addEventListener('click', (e) => {
        view.setActiveScreen('loginScreen')
      })
      break
    case 'loginScreen':
      document.getElementById('app').innerHTML = components.loginScreen
      const loginForm = document.getElementById('form-login')
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const loginInfo = {
          email: loginForm.email.value,
          password: loginForm.password.value
        }
        controller.login(loginInfo)
      })
      document.getElementById('redirect-to-register').addEventListener('click', (e) => {
        view.setActiveScreen('registerScreen')
      })
  }
}
view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerText = message
}