const form = document.querySelector('#form-given');


form.addEventListener('onSubmit', (e) =>{
    e.preventDefault();



    const name = form['name'].value 
    const email = form['email'].value 

    console.log(name, e)
})