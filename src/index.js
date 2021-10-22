window.addEventListener('load', () => {
    showCountries()
})

let countries = []
let base_url = "https://restcountries.com/v3.1/"

let newlist = "all"
let url = base_url + newlist
const container =document.querySelector("#container")
const search =document.querySelector("#search-country")
const region =document.querySelector("#regions")


region.addEventListener("change", (element) => {
    newlist = `region/${element.target.value}`
    container.innerHTML = ""
    showCountries()
})

search.addEventListener("keyup", (element) => {
    newlist = `name/${element.target.value}`
    container.innerHTML = ""
    showCountries()
})

const showCountries = async() => {

    const data = await fetch(url)
    const res =  await data.json()

    if(res) {
        for(let country of res) {
            
            const divCountry = document.createElement("div")
            countryClass(divCountry)
    
            const img = document.createElement("img")    
            img.setAttribute("src", country.flags.png)
            imgClass(img)
    
            const country_name = document.createElement("h4")
            country_name.innerText = country.name.common
            countryNameClass(country_name)
    
            const population = document.createElement("h5")
            population.innerHTML = `<b>Population:</b> ${country.population}`
    
            const region = document.createElement("h5")
            region.innerHTML = `<b>Region:</b> ${country.region}`

            const landlocked = document.createElement("h5")
            landlocked.innerHTML = `<b>landlocked:</b> ${country.landlocked}`

            
    
            const specs = document.createElement("div")
            specs.classList.add("ml-2")
    
            specs.appendChild(country_name)
            specs.appendChild(population)
            specs.appendChild(region)
            specs.appendChild(landlocked)
            divCountry.appendChild(img)
            divCountry.appendChild(specs)
            container.appendChild(divCountry)
        }
    }
}

const countryClass = (divCountry) => {
    divCountry.setAttribute("class", "py-10")
    divCountry.classList.add("border")
    divCountry.classList.add("bg-gray-100")
    divCountry.classList.add("rounded-lg")
    divCountry.classList.add("shadow-lg")
}

const imgClass = (img) => {
    img.classList.add("h-56")
    img.classList.add("w-72")
}

const countryNameClass = (country_name) => {
    country_name.classList.add("font-bold")
    country_name.classList.add("mt-4")
    country_name.classList.add("mt-4")
}

