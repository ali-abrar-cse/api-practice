const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => getQuote(data))
}

const getQuote = data => {
    const quote = document.getElementById('quote');
    quote.innerText = data.quote;
}