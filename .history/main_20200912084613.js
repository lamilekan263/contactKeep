// materialize side nav for mobile

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });
const form = document.querySelector('#form-given');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const firstName = form['first-name'].value;
    const lastName = form['last-name'].value 
    const email = form['email'].value 
    const password = form['password'].value 
    console.log(`first Name = ${firstName} Last Name = ${lastName} Email = ${email} password = ${password}`)

    form.reset();
})