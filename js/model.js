const model = {}

model.register = (firstName, lastName, email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
    console.log(user)
  }).catch((err) => {
    console.log(err)
  })
}