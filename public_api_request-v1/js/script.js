const gellary = document.querySelector('#gallery');
const body = document.querySelector('body');

let personInfo;




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
        personInfo = data[0].results;
        
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

    

    for( let i = 0; i < cards.length; i ++ ){
        cards[i].addEventListener('click', () => {
            body.innerHTML += modal;
            
            const modalContainer = document.querySelector('.modal-container');
            const closeButton = document.querySelector('#modal-close-btn');

            closeButton.addEventListener('click', () => {
            modalContainer.style.display = 'none';
            body.removeChild(modalContainer)
            });
        })
    }

}


const modal =  
        `<div class="modal-container">
            <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                    <h3 id="name" class="modal-name cap">name</h3>
                    <p class="modal-text">email</p>
                    <p class="modal-text cap">city</p>
                    <hr>
                    <p class="modal-text">(555) 555-5555</p>
                    <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                    <p class="modal-text">Birthday: 10/21/2015</p>
                </div>
            </div>
        </div>`



//----------------------------------------------------
// EVENT HANDLERS
//----------------------------------------------------


