const mySpan = document.getElementById('my-span');

// Event listener to change the color on (Color a span/div element content when a user moves the mouse over the element)
/*mySpan.addEventListener('mouseover', () => {
  mySpan.style.color = 'red';
});

mySpan.addEventListener('mouseout', () => {
  mySpan.style.color = 'black';
});*/
mySpan.onmouseover = function() {
  mySpan.style.color = 'red';
}

mySpan.onmouseout = function() {
  mySpan.style.color = 'black';
}


// Use prompt to read a value from user and display it in the span element
//const userValue =prompt("enter value");
const userValue = "Color a span/div element content when a user moves the mouse over the element";
mySpan.textContent = userValue;
