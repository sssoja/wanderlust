const createVenueHTML = (name, location, iconSource) => {
  return `<h2>${name}</h2>
    <img class="venueimage" src="${iconSource}"/>
    <h3>Address:</h3>
    <p>${location.address}</p>
    <p>${location.city}</p>
    <p>${location.country}</p>`;
};

const createWeatherHTML = currentDay => {
  console.log(currentDay);
  return `<h2>${weekDays[new Date().getDay()]}</h2>
          <h2>Temperature: ${kelvinToFahrenheit(
            currentDay.main.temp
          )}&deg;F</h2>
          <h2>Condition: ${currentDay.weather[0].description}</h2>
        <img src="https://openweathermap.org/img/wn/${
          currentDay.weather[0].icon
        }@2x.png">
        <h2>Feels like: ${kelvinToFahrenheit(
          currentDay.main.feels_like
        )}&deg;F</h2>
        <h2>Minimum temperature: ${kelvinToFahrenheit(
          currentDay.main.temp_min
        )}&deg;F</h2>`;
};

const kelvinToFahrenheit = k => (((k - 273.15) * 9) / 5 + 32).toFixed(0);

const shuffle = array => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// Used like so
var arr = [2, 11, 37, 42];
shuffle(arr);
console.log(arr);
