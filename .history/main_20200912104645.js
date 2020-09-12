// materialize side nav for mobile

document.addEventListener('DOMContentLoaded', function() {
    // side nav opening
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);


    // modals Opening
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    // collapsible opening
    var collapsibleItems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibleItems);
  });




// const signIn = document.getElementById("signin")

// signIn.addEventListener('click',() =>{
//     var signInModal = document.getElementById('login-modal')
//     var instances = M.Modal.init(signInModal)
// } )



