const loadData = async () => {
    const city = document.getElementById('input');
    const key = '231bccae7c06b15f554d64304bf28b73';
    console.log(city.value, key);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}`);
    const data  = await res.json();
    city.value = '';
    processData(data);
}

const processData = data => {
    const icon = document.getElementById("icon");
    icon.setAttribute(`src`,`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    const city = document.getElementById('city');
    city.innerText = data.name;
    const temp = data.main.temp;
    const feelTemp = data.main.feels_like;
    const deg = document.getElementById('deg');
    deg.innerText = (temp - 273.15).toFixed(2);
    const feel = document.getElementById('feel');
    feel.innerText = (feelTemp - 273.15).toFixed(2);
    const condition = document.getElementById('condition');
    condition.innerText = data.weather[0].main;

    const hum = document.getElementById('hum');
    hum.innerText = data.main.humidity;
    const pres = document.getElementById('pres');
    pres.innerText = data.main.pressure;

    const main = document.getElementById('main');
    main.classList.remove('d-none');
    main.classList.add('d-block');
    // console.log((temp - 273.15).toFixed(2));
}
