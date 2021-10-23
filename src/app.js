const countriesElem = document.querySelector(".countries");
const dropDown = document.querySelector(".dropDown");
const dropElem = document.querySelector(".drop");
const region = document.querySelectorAll(".region");
const search = document.querySelector(".search");
const toggle = document.querySelector(".toggle");
const moon = document.querySelector(".moon");

async function getCountry() {
  const url = await fetch("https://restcountries.com/v3.1/all");
  const res = await url.json();
  console.log(res);
  res.forEach((element) => {
    showCountry(element);
  });
}
getCountry();
function showCountry(data) {
  const country = document.createElement("div");
  country.classList.add("country");
  country.innerHTML = ` <div class="country-img">
    <img src="${data.flags.png}" alt="">
    </div>
    <div class="country-info">
        <h5 class="countryName: ">${data.name.common}</h5>
        <p><strong>Population: </strong>${data.population}</p>
        <p class="regionName"><strong>Region: </strong>${data.region}</p>
        <p><strong>Capital: </strong>${data.capital}</p>

    </div>`;
  countriesElem.appendChild(country);
  country.addEventListener("click", () => {
    showCountryDetail(data);
  });
}
dropDown.addEventListener("click", () => {
  dropElem.classList.toggle("showDropDown");
  console.log("hello");
});
const regionName = document.getElementsByClassName("regionName");
const countryName = document.getElementsByClassName("countryName");
region.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element);
    Array.from(regionName).forEach((elem) => {
      console.log(elem.innerText);
      if (
        elem.innerText.includes(element.innerText) ||
        element.innerHTML == "All"
      ) {
        elem.parentElement.parentElement.style.display = "grid";
      } else {
        elem.parentElement.parentElement.style.display = "none";
      }
    });
  });
});
search.addEventListener("input", () => {
  console.log(search.value.toLowerCase());
  Array.from(countryName).forEach((elem) => {
    if (elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
      elem.parentElement.parentElement.style.display = "grid";
    } else {
      elem.parentElement.parentElement.style.display = "none";
    }
  });
});

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  moon.classList.toggle("fas");
});
const countryModel = document.querySelector(".countryModel");
function showCountryDetail(data) {
  countryModel.classList.toggle("show");
  countryModel.innerHTML = `<button class="back">Back</button>
    <div class="model">
      <div class="leftModel">
        <img src="${data.flags.png}" alt="" />
      </div>

      <div class="rightModel">
        <h1>${data.name.common}</h1>
        <div class="modelInfo">
          <div class="innerLeft inner">
              
              <p><strong>Population: </strong>${data.population}</p>
              <p class="regionName"><strong>Region: </strong>${data.region}</p>
              <p><strong>Capital: </strong>${data.capital}</p>
            </div>
            <div class="innerRight inner">
              
              <p><strong>LandLocked: </strong><span style="text-transform:uppercase">${data.landlocked}</span> </p>
              <p class="regionName"><strong>Timezones: </strong>${data.timezones}</p>
              <p><strong>Country-Size: </strong>${data.area} <span>km<sup>2</sup> </span></p>
            </div>
        </div>
      </div>
    </div>`;
    const back = countryModel.querySelector(".back");
    back.addEventListener("click", () => {
        countryModel.classList.toggle("show");
    });
}
