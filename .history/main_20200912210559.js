
const setup = (data) =>{
  let html = '';

  data.forEach(doc =>{
    const contact = doc.data();
    console.log()
  })
}

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






