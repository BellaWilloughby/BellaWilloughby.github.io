// Define the API endpoint for Cat Facts
const apiEndpoint = "https://catfact.ninja/fact";

// Function to fetch a cat fact from the API
async function getFact() {
    try {
        const response = await fetch(apiEndpoint);
        
        if (!response.ok) {
            throw new Error("Failed to fetch cat fact.");
        }

        const data = await response.json();
        console.log("Fetched Cat Fact:", data.fact); // Output to console for verification

        // Display the cat fact in the paragraph
        displayRes(data.fact);
    } catch (error) {
        console.error("Error fetching cat fact:", error);
        alert("An error occurred while fetching the cat fact. Please try again.");
    }
}

// Function to display the fetched fact in the paragraph element
function displayRes(fact) {
    const outputElement = document.getElementById("output");
    outputElement.textContent = fact;
}

// Event listener for the button
document.getElementById("fetchButton").addEventListener("click", () => {
    console.log("Button clicked"); // Log to verify button click
    getFact();
});

// Fetch a cat fact on page load to display initially
getFact();
