const api = {
endpoint: 'https://api.openweathermap.org/data/2.5/',
key: 'f16b6d53265964560049924662ca1c72'
}

const input = document.querySelector('#input');
input.addEventListener('keydown', enter);


function enter(e) {
    if(e.keyCode === 13) {
        getInfo(input.value);
    }
}    

    async function getInfo(data) {
        const result = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
        const resultReceived = await result.json();
        displayResult(resultReceived);
}

function displayResult(resultReceived) {
    console.log(resultReceived);
    let city = document.querySelector('#city');
    city.textContent = `${resultReceived.name}, ${resultReceived.sys.country}`;

    getDate();

    let temperature = document.querySelector('#temperature');
    temperature.innerHTML = `${Math.round(resultReceived.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector('#feels-like');
    feelsLike.innerHTML = `${Math.round(resultReceived.main.feels_like)}<span>°</span>`;

    let conditions = document.querySelector('#conditions');
    conditions.textContent = `${resultReceived.weather[0].main}`;

    let variation = document.querySelector("#variation");
    variation.innerHTML = 'Min: ' + `${Math.round(resultReceived.main.temp_min)}<span>°</span>` + ' ' + 'Max: ' + `${Math.round(resultReceived.main.temp_max)}<span>°</span>`;
}


function getDate(){
    const myDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let day = days[myDate.getDay()];
    let todaysDate = myDate.getDate();
    let month = months[myDate.getMonth()];
    let year = myDate.getFullYear();

    document.querySelector('#date').innerHTML = day + ', ' + month + ' ' + todaysDate + ', ' + year;
}
