const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // console.log(countries);
    const allcountriesHtml = countries.map(country =>
        getCountryHtml(country));
    // console.log(allcountriesHtml);
    const container = document.getElementById('countries');
    container.innerHTML = allcountriesHtml.join(' ');

}

const getCountryHtml = country => {
    return `
    <div class="country">
           <h2>${country.name.common}</h2>
           <img src="${country.flags.png}">
    </div>
    `
}


loadCountries();