const gellary = document.querySelector('#gallery');
const body = document.querySelector('body');

//------------------------------------------
// FETCH FUNCTIONS
//------------------------------------------

const fetchData = (url) => {
    return fetch(url)
            .then( checkStatus )
            .then( response => response.json())
            .catch( err => console.log(err))
}

const checkStatus = (response) => {
    if(response.ok){
        return Promise.resolve(response)
    } else {
        return Promise.reject(response.statusText);
    }
}

fetchData('https://randomuser.me/api/?results=12')
    .then( data => fetchGellary(data))


    

//------------------------------------------
// HELPER FUNCTIONS
//------------------------------------------

const fetchGellary = (data) => {
    
    const people = data.results.map( person => `
        <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${person.picture.large}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
                <p class="card-text">${person.email}</p>
                <p class="card-text cap">${person.location.city}, ${person.location.state}</p>
            </div>
        </div>
    `).join('')
    gellary.innerHTML = people;
    
}

/// I'm coding here right now 
const fetchModals = () => {
    const personalInfo = gellary.querySelector('.card');
    
}


//------------------------------------------
// EVENT LISTENERS
//------------------------------------------

gellary.addEventListener('click', fetchModals)
