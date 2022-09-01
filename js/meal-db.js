const getValue = async () => {
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('d-none');
    spinner.classList.add('d-block');
    const search = document.getElementById('input-value');
    const value = search.value;
    //console.log(value);
    // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    // .then(res => res.json())
    // .then(data => getData(data.meals))
    const res =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
    if(res != null){
        spinner.classList.add('d-none');
    }
    const data = await res.json();
    //console.log(data);
    getData(data.meals);
};

const getData = data => {
    // console.log(data);
    const container = document.getElementById('items');
    container.textContent = ``;
    data.forEach(res => {
        //console.log(res);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="seeDetails(${res.idMeal})" class="card h-100">
                <img src="${res.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${res.strMeal}</h5>
                    <p class="card-text">${res.strInstructions.slice(0,150)}</p>
                    <a target="_blank" href="${res.strYoutube}"><button class="btn btn-outline-info">See Details</button></a>
                </div>
            </div>
        `;
        container.appendChild(div);
    })
}

const seeDetails = async itemId => {
    // fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`)
    // .then(res => res.json())
    // .then(data => showDetails(data.meals[0]))
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`);
    data = await res.json();
    showDetails(data.meals[0]);
}

const showDetails = data => {
    const detail = document.getElementById('details');
    detail.textContent = ``;
    const div = document.createElement('div');
    div.classList.add('w-50','mx-auto','my-5');
    div.innerHTML = `
        <img class='img-fluid ' src = '${data.strMealThumb}'>
        <h2 class="text-primary">${data.strMeal}</h2>
        <p>${data.strInstructions}</p>
    `;
    detail.appendChild(div);
}

