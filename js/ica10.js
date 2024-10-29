// Event listener for the box click
const box = document.getElementById("box");
box.addEventListener("click", function() {
    // Toggle the background color between light blue and light green
    box.style.backgroundColor = box.style.backgroundColor === "lightblue" ? "lightgreen" : "lightblue";
    box.textContent = box.style.backgroundColor === "lightblue" ? "Click me!" : "Clicked!";
});

// Event listeners for text hover
const text = document.getElementById("text");
text.addEventListener("mouseover", function() {
    text.textContent = "Hi there!";
    text.style.color = "blue";
});

text.addEventListener("mouseout", function() {
    text.textContent = "Hover over me!";
    text.style.color = "black";
});
