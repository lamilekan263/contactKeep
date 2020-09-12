

// sign up form configurations
const signUpForm = document.querySelector('#form-given');

    signUpForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const email = signUpForm['email'].value 
    const password = signUpForm['password'].value 
  
    auth.createUserWithEmailAndPassword(email, password).then(cred =>{
        console.log(cred)
    })
    signUp.reset();
})

// Log in form configuration;

const logInForm  = document.querySelector('#loginForm');

    logInForm.addEventListener('submit', (e) =>{
        e.preventDefault();

        const email = loginForm['email'].value 
        const password = loginForm['password'].value 

        auth.signInWithEmailAndPassword(email, password).then(cred =>{
            console.log(cred)
        })
        logInform.reset();
    })


// working with the signOut button

const signOut = document.querySelector('#signOut');

signOut.addEventListener('click', () =>{
    auth.signOut().then(function() {
        // Sign-out successful.
        console.log('sign Out successful')
      }).catch(function(error) {
        // An error happened.
        console.log(error.message)
      });
})
