
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


//*Orginal way
// const getCountryHtml = country => {
//     return `
//     <div class="country">
//            <h2>${country.name.common}</h2>
//            <img src="${country.flags.png}">
//     </div>
//     `
// }

//*option-2 using destructuring

// const getCountryHtml = country => {
//   
//     const { name, flags } = country;
//     return `
//     <div class="country">
//            <h2>${name.common}</h2>
//            <img src="${flags.png}">
//     </div>
//     `
// }
//*option-3 direct accessing value by parameter
const getCountryHtml = ({ name, flags, area, region }) => {
    // const {name,flags}=country;
    return `
    <div class="country">
           <h2>${name.common}</h2>
           <p>Area:${area}</p>
           <p>Region:${region}</p>
           <img src="${flags.png}">
    </div>
    `
}


loadCountries();