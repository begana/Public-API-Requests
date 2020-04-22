const gellary = document.querySelector('#gallery');


//----------------------------------------------------
//  FETCH FUNCTIONS
//----------------------------------------------------
const checkStatus = ( response ) => {
    if( response.ok ){
        return Promise.resolve( response )
    } else {
        return Promise.reject( new Error( response.statusText ))
    }
}

const fetchData = (url) => {
    return fetch(url)
            .then( checkStatus )
            .then( res => res.json())
            .catch( err => console.log( err ))
}

Promise.all([ fetchData('https://randomuser.me/api/?results=12') ])
    .then( data => {
        fetchCards(data[0].results)
        
    })

//----------------------------------------------------
// HELPING FUNCTIONS
//----------------------------------------------------

const fetchCards = (data) => {

    const employees = data.map( employee => `
    <div class="card">
    <div class="card-img-container">
        <img class="card-img" src="${employee.picture.large}" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
        <p class="card-text">${employee.email}</p>
        <p class="card-text cap">${employee.location.city}, ${employee.location.state}</p>
    </div>
    </div>
    `).join('')

    gellary.innerHTML = employees;
    const cards = gellary.querySelectorAll('.card');
    fetchModals(cards)
   
}

const fetchModals = (data) => {
    console.log(data)
}

//----------------------------------------------------
// EVENT HANDLERS
//----------------------------------------------------

gellary.addEventListener('click', fetchModals)