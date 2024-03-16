// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [
  {
    country: "United States",
    capital: "Washington",
    largestCity: "New York",
    subdivisionName: "state",
    subdivisions: [
      {
        name: "Louisiana",
        capital: "Baton Rouge",
        largestCity: "New Orleans",
        area: 134264,
      },
      {
        name: "California",
        capital: "Sacramento",
        largestCity: "Los Angeles",
        area: 423970,
      },
      {
        name: "Nevada",
        capital: "Carson City",
        largestCity: "Las Vegas",
        area: 286382,
      },
    ],
  },
  {
    country: "Guatemala",
    capital: "Guatemala City",
    largestCity: "Guatemala City",
    subdivisionName: "department",
    subdivisions: [
      {
        name: "Huehuetenango",
        capital: "Huehuetenango",
        largestCity: "Huehuetenango",
        area: 7403,
      },
      {
        name: "Izabal",
        capital: "Puerto Barrios",
        largestCity: "Puerto Barrios",
        area: 9038,
      },
      {
        name: "El Progreso",
        capital: "Guastatoya",
        largestCity: "Guastatoya",
        area: 1922,
      },
    ],
  },
  {
    country: "China",
    capital: "Beijing",
    largestCity: "Shanghai",
    subdivisionName: "province",
    subdivisions: [
      {
        name: "Guangdong",
        capital: "Guangzhou",
        largestCity: "Guangzhou",
        area: 179800,
      },
      {
        name: "Shandong",
        capital: "Jinan",
        largestCity: "Jinan",
        area: 157100,
      },
      {
        name: "Sichuan",
        capital: "Chengdu",
        largestCity: "Chengdu",
        area: 486100,
      },
    ],
  },
  {
    country: "Australia",
    capital: "Canberra",
    largestCity: "Sydney",
    subdivisionName: "state",
    subdivisions: [
      {
        name: "New South Wales",
        capital: "Sydney",
        largestCity: "Sydney",
        area: 809444,
      },
      {
        name: "Victoria",
        capital: "Melbourne",
        largestCity: "Melbourne",
        area: 237629,
      },
    ],
  },
];

// Function to generate HTML from the GEOGRAPHY_LIST array
function generateHTML() {
  const mainElement = document.querySelector("main");

  // Loop through each item in the GEOGRAPHY_LIST array
  GEOGRAPHY_LIST.forEach((item) => {
    // Create HTML elements dynamically
    const countryHeading = document.createElement("h2");
    countryHeading.textContent = item.country;
    mainElement.appendChild(countryHeading);

    const infoList = document.createElement("ul");

    // Add country information to the list
    const capitalItem = document.createElement("li");
    capitalItem.textContent = `Capital: ${item.capital}`;
    infoList.appendChild(capitalItem);

    const largestCityItem = document.createElement("li");
    largestCityItem.textContent = `Largest City: ${item.largestCity}`;
    infoList.appendChild(largestCityItem);

    // Add subdivision information to the list
    item.subdivisions.forEach((subdivision) => {
      const subdivisionItem = document.createElement("li");
      subdivisionItem.textContent = `${subdivision.name}: Capital - ${subdivision.capital}, Largest City - ${subdivision.largestCity}, Area - ${subdivision.area} sq km`;
      infoList.appendChild(subdivisionItem);
    });

    // Append the list to the main element
    mainElement.appendChild(infoList);
  });
}

// Call the function to generate HTML when the page loads
window.onload = generateHTML;
