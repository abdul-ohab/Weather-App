//get input value
const getValue = () =>{
    const inputText = document.getElementById('text');
    const inputValue = inputText.value;
    loadData(inputValue);
    inputText.value = '';
}

//API data load
async function loadData(cityName){
    const apiKey = 'd495e0255bd56bef2142a6d3e29e3f38';
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`)
    if(res.status == 404){
        document.getElementById('error').style.display = 'block';
        document.getElementById('weather-div').style.display = 'none';
    }
    else{
        const data = await res.json();
        displayData(data);
    }
}

const displayData = (data) =>{
    //update all data
    document.getElementById('degree').innerText = Math.round(`${data.main.temp}`) + '°C';
    document.getElementById('city').innerText = `${data.name}`;
    document.getElementById('humidity').innerText = `${data.main.humidity}`+ '%';
    document.getElementById('speed').innerText = `${data.wind.speed}` + ' km/h';

    //update weather icon
    let weatherImage = document.getElementById('weather-img');
    let condition = data.weather[0].main;
    if(condition === 'Clouds'){
        weatherImage.src = 'images/clouds.png';
    }
    else if(condition === 'Rain'){
        weatherImage.src = 'images/rain.png';
    }
    else if(condition === 'Clear'){
        weatherImage.src = 'images/clear.png';
    }
    else if(condition === 'Drizzle'){
        weatherImage.src = 'images/drizzle.png';
    }
    else if(condition === 'Snow'){
        weatherImage.src = 'images/snow.png';
    }
    else if(condition === 'Mist'){
        weatherImage.src = 'images/mist.png';
    }

    //display all data when click the search button
    document.getElementById('weather-div').style.display = 'block';
    document.getElementById('error').style.display = 'none';
}
