async function fetchWeather() {
    try {
        const apiKey = "36d074bcb680fc5cd2508f727e951ce9";
        const lat = -14.796746039624054;
        const lon = -39.173382403501456;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        throw err; 
        }
}

async function fetchNews() {
    try {
        const apiKey = "2868608890534b5899f08f2c292c3292";
        const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-11-13&sortBy=publishedAt&apiKey=${apiKey}`);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function getNews() {
    try {
        const data = await fetchNews();
        console.log(data);
        const containerLists = document.querySelector("#newsListContainer");

        for (let i = 0; i < 3; i++) {
            containerLists.innerHTML += `
                <li> 
                    <h3>${data.articles[i].title}</h3>
                    <p>${data.articles[i].description}</p>
                </li>
            `;
        }
    } catch (err) {
        console.error(err);
    }
}

async function getWeather() {
    try {
        const data = await fetchWeather();
        const temperature = document.querySelector("#temp");
        const humidity = document.querySelector("#humidity");
        const maxTemp = document.querySelector("#maxTemp");
        const minTemp = document.querySelector("#minTemp");
        const weatherIcon = document.querySelector("#weatherIcon");

        temperature.innerText = parseInt(data.main.temp) + " Cº";
        humidity.innerText = data.main.humidity;
        maxTemp.innerText = parseInt(data.main.temp_max) + " Cº";
        minTemp.innerText = parseInt(data.main.temp_min) + " Cº";
        weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    } catch (err) {
        console.error(err);
    }
}

getNews();
getWeather();
