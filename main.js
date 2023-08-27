// DOM function to open/close nav menu bar

// document.querySelector("#open-nav-menu").addEventListener("click", function()
// {alert("added an alert to see if working")}
// );

// Open Nav bar

document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});

// Close Nav bar

document
  .querySelector("#close-nav-menu")
  .addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });

//Temperature Conversion function

function celsiusToFahr(temperature) {
  let fahr = temperature * 1.8 + 32;
  return fahr;
}

// Greeting Section

const greetingText = "Good Morning!";
const weatherCondition = "sunny";
const userLocation = "Pennsylvania";
// using let for the temperature so it can go from celcius to farenheight
let temperature = 22.8673;
// Replace the dynamic elements and send thm to the html - use template literals by using a ` instead of a ""
// From there you can insert variables into the string by adding {} & $  and round the number using toFixed - and convert the temperatur to Fahrenheight using the function
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(
  temperature
).toFixed(1)}°F outside.`;

//Send the greeting values to the html element - locate element id's for this

//for greetingText - id is greeting (seen in code or console)
document.querySelector("#greeting").innerHTML = greetingText;
//for celsiusText - id is greeting (seen in code or console)
document.querySelector("p#weather").innerHTML = celsiusText;

//create event listener for the celcius/fahr radio buttons by using the div class where the buttons are placed - div class is weather-group - using console.log clock on a button and find where you clicked - in this case target: input#celsius

document.querySelector(".weather-group").addEventListener("click", function(e) {

    if (e.target.id == "celsius") {
      document.querySelector("p#weather").innerHTML = celsiusText;
    } else if (e.target.id == "fahr") {
      document.querySelector("p#weather").innerHTML = fahrText;
    }
  });

  //add local time to page

  //To get just minutes
	//new Date().getHours()
	
	//To get just minutes
	//new Date().getMinutes()
	
	//To get just seconds 
	//new Date().getSeconds()

  let localTime = new Date();


  console.log("outside the timeout");
  setInterval(function() {
    document.querySelector("span[data-time=hours]").innerHTML = localTime.getHours().toString().padStart(2,"0");
    document.querySelector("span[data-time=minutes]").innerHTML = localTime.getMinutes().toString().padStart(2,"0");
    document.querySelector("span[data-time=seconds]").innerHTML = localTime.getSeconds().toString().padStart(2,"0");
},1000);