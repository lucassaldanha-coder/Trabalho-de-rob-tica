document.getElementById("Btn1").addEventListener("click", function() {
  document.body.style.backgroundColor = "white";
  document.getElementById("Div").style.backgroundColor = "white";
  
 let elements = document.getElementsByClassName("Text");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "black";  
}

});

document.getElementById("Btn2").addEventListener("click", function() {
  document.body.style.backgroundColor = "black";
   document.getElementById("Div").style.backgroundColor = "black";
  
let elements = document.getElementsByClassName("Text");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "rgb(17, 17, 17);";
}

});
