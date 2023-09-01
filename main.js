
//Nav bar handler
function menuHandler() {
// DOM function to open/close nav menu bar

// document.querySelector("#open-nav-menu").addEventListener("click", function()
// {alert("added an alert to see if working")}
// );

  // Open Nav bar
  document
    .querySelector("#open-nav-menu")
    .addEventListener("click", function () {
      document.querySelector("header nav .wrapper").classList.add("nav-open");
    });

  // Close Nav bar
  document
    .querySelector("#close-nav-menu")
    .addEventListener("click", function () {
      document
        .querySelector("header nav .wrapper")
        .classList.remove("nav-open");
    });
}

// Greeting Section/handler
function greetingHandler(){
//change h1 greeting
let currentHour = new Date().getHours();
let greetingText;

if (currentHour < 12) {
  greetingText = "Good Morning!";
} else if (currentHour < 19) {
  greetingText = "Good Afternoon!";
} else if (currentHour <= 24) {
  greetingText = "Good Evening!";
} else {
  greetingText = "Welcome!";
}

// const greetingText = greetingText;
const weatherCondition = "sunny";
const userLocation = "Pennsylvania";

// using let for the temperature so it can go from celcius to farenheight
let temperature = 22.8673;
// Replace the dynamic elements and send thm to the html - use template literals by using a ` instead of a ""
// From there you can insert variables into the string by adding {} & $  and round the number using toFixed - and convert the temperatur to Fahrenheight using the function
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(
  1
)}°C outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(
  temperature
).toFixed(1)}°F outside.`;

//Send the greeting values to the html element - locate element id's for this

//for greetingText - id is greeting (seen in code or console)
document.querySelector("#greeting").innerHTML = greetingText;
//for celsiusText - id is greeting (seen in code or console)
document.querySelector("p#weather").innerHTML = celsiusText;

//create event listener for the celcius/fahr radio buttons by using the div class where the buttons are placed - div class is weather-group - using console.log clock on a button and find where you clicked - in this case target: input#celsius

document
  .querySelector(".weather-group")
  .addEventListener("click", function (e) {
    if (e.target.id == "celsius") {
      document.querySelector("p#weather").innerHTML = celsiusText;
    } else if (e.target.id == "fahr") {
      document.querySelector("p#weather").innerHTML = fahrText;
    }
  });
}

//Temperature Conversion function
function celsiusToFahr(temperature) {
  let fahr = temperature * 1.8 + 32;
  return fahr;
}

//add local time to page handler
function clockHandler(){


//To get just minutes
//new Date().getHours()

//To get just minutes
//new Date().getMinutes()

//To get just seconds
//new Date().getSeconds()

setInterval(function () {
  let localTime = new Date();
  // let locales = en-US;
  // let options = 'hour12: true';
  document.querySelector("span[data-time=hours]").innerHTML = localTime
    .getHours()
    .toLocaleString(locale, options)
    .padStart(2, "0");
  document.querySelector("span[data-time=minutes]").innerHTML = localTime
    .getMinutes()
    .toString()
    .padStart(2, "0");
  document.querySelector("span[data-time=seconds]").innerHTML = localTime
    .getSeconds()
    .toString()
    .padStart(2, "0");
}, 1000);
}

// Gallery handler
function galleryHandler(){
const galleryImages = [
  {
    src: "./assets/gallery/image1.jpg",
    alt: "Thumbnail Image 1",
  },
  {
    src: "./assets/gallery/image2.jpg",
    alt: "Thumbnail Image 2",
  },
  {
    src: "./assets/gallery/image3.jpg",
    alt: "Thumbnail Image 3",
  },
];

let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails");

mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;

galleryImages.forEach(function (image, index) {
  let thumb = document.createElement("img");
  thumb.src = image.src;
  thumb.alt = image.alt;
  thumb.dataset.arrayIndex = index;
  //set the condition w/index === 0 then ? if value true set as true then : if the data value isn't 0 then it should be set as false - "ternary if"
  thumb.dataset.selected = index === 0 ? true : false;

  //setting the event listener e=event which will change the main image

  thumb.addEventListener("click", function (e) {
    let selectedIndex = e.target.dataset.arrayIndex;
    let selectedImage = galleryImages[selectedIndex];
    mainImage.src = selectedImage.src;
    mainImage.alt = selectedImage.alt;

    //also need to change the thumbnail image selection
    //first unselect them all
    thumbnails.querySelectorAll("img").forEach(function (img) {
      img.dataset.selected = false;
    });

    //select the one that was clicked

    e.target.dataset.selected = true;
  });

  thumbnails.appendChild(thumb);
});
}

//Page Load
menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
