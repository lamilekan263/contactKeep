// materialize side nav for mobile

document.addEventListener('DOMContentLoaded', function() {
    // side nav opening
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);


    // modals Opening
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    // collapsible opening
    var colla
  });




// const signIn = document.getElementById("signin")

// signIn.addEventListener('click',() =>{
//     var signInModal = document.getElementById('login-modal')
//     var instances = M.Modal.init(signInModal)
// } )




// const form = document.querySelector('#form-given');

// form.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     const firstName = form['first-name'].value;
//     const lastName = form['last-name'].value 
//     const email = form['email'].value 
//     const password = form['password'].value 
//     console.log(`first Name = ${firstName} Last Name = ${lastName} Email = ${email} password = ${password}`)

//     form.reset();
// })