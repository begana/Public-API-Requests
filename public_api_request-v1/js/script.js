const gallery = document.querySelector('#gallery');

//------------------------------------------
// FETCH FUNCTIONS
//------------------------------------------

const fetchData = (url) => {
    return fetch(url)
            .then( res => res.json())
}

fetchData('https://randomuser.me/api/?results=12')
    .then( data => fetchPeople(data))

//------------------------------------------
// HELPER FUNCTIONS
//------------------------------------------

const fetchPeople = ( data ) => {
    
}