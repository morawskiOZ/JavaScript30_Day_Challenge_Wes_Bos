const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
.then(blob=> blob.json())
.then(data => cities.push(...data));

const findMatch = (worldToMatch,cities)=>{
return cities.filter(place =>{

    const regex = new RegExp(worldToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex)
})

};
const printMatch = (e)=> {
    const result = findMatch(e.target.value,cities);
    const html = result.map(city =>{
        let regex = new RegExp(e.target.value, "gi");
        let cityName = city.city.replace(regex,
            `<span class="hl">${e.target.value}</span>`);
        let stateName = city.state.replace(regex,
            `<span class="hl">${e.target.value}</span>`);
        const numberWithCommas = (x) => {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
        return (
            `<li>
                <span class="name"> ${cityName}, ${stateName} </span>
                <span class="population"> ${numberWithCommas(city.population)} </span>   
            </li>`
        )}
    ).join("");
    searchResultTable.innerHTML = html

};

const searchInput = document.querySelector(".search");
const searchResultTable = document.querySelector(".suggestions");
searchInput.addEventListener("input",printMatch);