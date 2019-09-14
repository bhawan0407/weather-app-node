const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const m1 = document.querySelector('#msg-1');
const m2 = document.querySelector('#msg-2');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();  // prevent refresh of browser on submit

    m1.textContent = "Loading........";
    m2.textContent = '';

    const location = search.value;

    const searchURL = '/weather?address=' + location

    fetch(searchURL).then((response) => {
        response.json().then((data) => {
            if(data.error){
                m1.textContent = data.error;
            }
            else{
                m1.textContent = data.location;
                m2.textContent = data.forecastData;
            }
        })
    })
})