firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log(user)
    } else {
      console.log('no user')
    }
  });