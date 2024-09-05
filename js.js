var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// Get all text elements that will trigger the color change
var textElements = document.getElementsByClassName("colorChangeText");

// Get all elements with the class 'colorChange'
var elements = document.getElementsByClassName("portfoliocolumn");

// Define different color sets for each text trigger
var colorSets = [
    ["#FF6347", "#FF4500", "#FFD700"], // Color Set 1
    ["#4CAF50", "#8BC34A", "#CDDC39"], // Color Set 2
    ["#1E90FF", "#00BFFF", "#87CEEB"]  // Color Set 3
];

// Add click event listeners to each text element
for (let i = 0; i < textElements.length; i++) {
    textElements[i].addEventListener("click", function() {
        // Get the current color set
        var colors = colorSets[i];
        
        // Loop through all elements with the class 'colorChange'
        for (let j = 0; j < elements.length; j++) {
            // Change the background color of each element to the color in the current set
            elements[j].style.backgroundColor = colors[j % colors.length];
        }
    });
}

function showAlert() {
    alert("Hello, Thank you for contacting me!");
}