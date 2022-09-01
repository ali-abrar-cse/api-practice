const loadCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => getCountry(data))
}


const getCountry = data => {
    const section = document.getElementById('country');
    data.forEach(element => {
        // console.log(element);
        const div = document.createElement('div');
        div.innerHTML = `<h1>Country Name: ${element.name}</h1>
        <p>Capital: ${element.capital}</p>
        <button onclick="findName('${element.name}')">details</button>`;
        div.style.border = '2px solid red';
        div.style.margin = '10px';
        div.style.textAlign = 'center';
        div.style.borderRadius = '50px';
        div.style.padding = '10px';
        section.appendChild(div);
    });
}

const findName = data => {
    // console.log(data);
    const url = `https://restcountries.eu/rest/v2/name/${data}`;
    fetch(url)
    .then(res => res.json())
    .then(json => showDetails(json))
}
const showDetails = data => {
    console.log(data);
    const div = document.getElementById('top');
    div.innerHTML = `<h2>${data[0].population}</h2>
    <img width= '200px' src='${data[0].flag}'>`;
}



