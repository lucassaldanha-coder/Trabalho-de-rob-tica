//Button 1 code
document.getElementById("Btn1").addEventListener("click", function() {
  document.body.style.backgroundColor = "white";
  document.getElementById("Div").style.backgroundColor = "white";
  
 let elements = document.getElementsByClassName("Text");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "rgb(5, 5, 5)";  
}

 //Remove BtnText's glow
let btntext = document.getElementsByClassName("BtnText");
for (let j = 0; j < btntext.length; j++) {
  btntext[j].style.textShadow = "0 0 0px";
}
  
//Change search bar
document.getElementById("GSearchBar").style.backgroundColor = "white";
document.getElementById("GSearchBar").style.borderColor = "#ccc";

//Change search button
document.getElementById("GSearchButton").style.backgroundColor = "#17f";
document.getElementById("GSearchButton").style.borderColor = "#17f";
document.getElementById("GSearchButton").style.color = "white";
});


//Button 2 code
document.getElementById("Btn2").addEventListener("click", function() {
  document.body.style.backgroundColor = "black";
   document.getElementById("Div").style.backgroundColor = "black";
  
//Make text black
let elementsT = document.getElementsByClassName("Text");
for (let i = 0; i < elementsT.length; i++) {
    elementsT[i].style.color = "rgb(5, 5, 5)";
}

//Add glow to BtnText
let btntext = document.getElementsByClassName("BtnText");
for (let j = 0; j < btntext.length; j++) {
  btntext[j].style.textShadow = "0 0 10px";
}

//Change search bar
document.getElementById("GSearchBar").style.backgroundColor = "rgb(5, 5, 5)";
document.getElementById("GSearchBar").style.borderColor = "rgb(5, 5, 5)";

//Change search button
document.getElementById("GSearchButton").style.backgroundColor = "rgb(5, 5, 5)";
document.getElementById("GSearchButton").style.borderColor = "rgb(5, 5, 5)";
document.getElementById("GSearchButton").style.color = "rgb(5, 5, 5)";
});

// --- Global Variables for Scope and Control ---
const rainbowColors = [
    '#FF0000', // Red
    '#FF7F00', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Green
    '#0000FF', // Blue
    '#4B0082', // Indigo
    '#9400D3'  // Violet
];

let colorIndex = 0;
let intervalId = null; 

// Button 3 code
document.getElementById('Btn3').addEventListener('click', function() {
    
    if (intervalId !== null) {
        console.log("Color cycling is already active. Click ignored.");
        return; // Exit the function to prevent double-triggering
    }
    
    intervalId = setInterval(() => {
        const body = document.body;
        body.style.backgroundColor = rainbowColors[colorIndex];
        // Ensure index wraps around to 0
        colorIndex = (colorIndex + 1) % rainbowColors.length;
        
    }, 500); // Change speed here
    
    console.log("Color cycling started. Interval ID:", intervalId);
  document.body.style.backgroundColor = "white";
  document.getElementById("Div").style.backgroundColor = "white";
  
 let elements = document.getElementsByClassName("Text");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "rgb(5, 5, 5)";  
}

 //Remove BtnText's glow
let btntext = document.getElementsByClassName("BtnText");
for (let j = 0; j < btntext.length; j++) {
  btntext[j].style.textShadow = "0 0 0px";
}
  
//Change search bar
document.getElementById("GSearchBar").style.backgroundColor = "white";
document.getElementById("GSearchBar").style.borderColor = "#ccc";

//Change search button
document.getElementById("GSearchButton").style.backgroundColor = "#17f";
document.getElementById("GSearchButton").style.borderColor = "#17f";
document.getElementById("GSearchButton").style.color = "white";
});

// Button 4 code
document.getElementById('Btn4').addEventListener('click', function() {
    
    // 1. Stop the color cycling using the stored interval ID
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null; 
        console.log("Color cycling stopped.");
    }

    document.body.style.backgroundColor = 'black'; 
    console.log("Background set to black.");
  document.body.style.backgroundColor = "black";
   document.getElementById("Div").style.backgroundColor = "black";
  
//Make text black
let elementsT = document.getElementsByClassName("Text");
for (let i = 0; i < elementsT.length; i++) {
    elementsT[i].style.color = "rgb(5, 5, 5)";
}

//Add glow to BtnText
let btntext = document.getElementsByClassName("BtnText");
for (let j = 0; j < btntext.length; j++) {
  btntext[j].style.textShadow = "0 0 10px";
}

//Change search bar
document.getElementById("GSearchBar").style.backgroundColor = "rgb(5, 5, 5)";
document.getElementById("GSearchBar").style.borderColor = "rgb(5, 5, 5)";

//Change search button
document.getElementById("GSearchButton").style.backgroundColor = "rgb(5, 5, 5)";
document.getElementById("GSearchButton").style.borderColor = "rgb(5, 5, 5)";
document.getElementById("GSearchButton").style.color = "rgb(5, 5, 5)";
});



