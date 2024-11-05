// Tell Fortune function
function tellFortune(numOfChildren, partnerName, geoLocation, jobTitle) {
    return `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numOfChildren} kids.`;
}

// Call tellFortune 3 times with different values and output to the DOM
const fortune_output = document.getElementById('fortuneOutput');
fortune_output.innerHTML += `<p>${tellFortune(2, 'Alex', 'New York', 'Engineer')}</p>`;
fortune_output.innerHTML += `<p>${tellFortune(3, 'Jordan', 'London', 'Teacher')}</p>`;
fortune_output.innerHTML += `<p>${tellFortune(1, 'Taylor', 'Sydney', 'Doctor')}</p>`;

// Dog Age Calculator function
function calculateDogAge(puppyAge) {
    const dogAge = puppyAge * 7;
    return `Your doggie is ${dogAge} years old in dog years!`;
}

// Call calculateDogAge 3 times with different values and output to the DOM
const dog_age_output = document.getElementById('dogAgeOutput');
dog_age_output.innerHTML += `<p>${calculateDogAge(1)}</p>`;
dog_age_output.innerHTML += `<p>${calculateDogAge(3)}</p>`;
dog_age_output.innerHTML += `<p>${calculateDogAge(5)}</p>`;

// Reverse Number function
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

// Call reverseNumber twice with different values and output to the DOM
const reverse_number_output = document.getElementById('reverseNumberOutput');
reverse_number_output.innerHTML += `<p>${reverseNumber(32243)}</p>`;
reverse_number_output.innerHTML += `<p>${reverseNumber(12345)}</p>`;

// Alphabetical Order function
function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}

// Call alphabeticalOrder twice with different values and output to the DOM
const alphabetical_order_output = document.getElementById('alphabeticalOrderOutput');
alphabetical_order_output.innerHTML += `<p>${alphabeticalOrder('webmaster')}</p>`;
alphabetical_order_output.innerHTML += `<p>${alphabeticalOrder('javascript')}</p>`;

// Capitalize First Letter function
function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Call capitalizeFirstLetter twice with different values and output to the DOM
const capitalize_output = document.getElementById('capitalize_output');
capitalize_output.innerHTML += `<p>${capitalizeFirstLetter('the quick brown fox')}</p>`;
capitalize_output.innerHTML += `<p>${capitalizeFirstLetter('hello world')}</p>`;
