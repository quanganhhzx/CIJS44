const model = {}
model.currentUser = undefined
model.register = (firstName, lastName, email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
    console.log(user)
    firebase.auth().currentUser.sendEmailVerification()
    firebase.auth().currentUser.updateProfile({
      displayName: firstName + ' ' + lastName
    })
    alert('Register success, please check your email!')
    view.setActiveScreen('loginScreen')
  }).catch((err) => {
    alert(err.message)
    console.log(err)
  })
}

model.login = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
    console.log(user)
    if(user.user.emailVerified) {
      model.currentUser = {
        displayName: user.user.displayName,
        email: user.user.email
      }
    } else {
      alert('Please verify your email!')
    }
  }).catch((err) => {
    alert(err.message)
    console.log(err)
  })
}