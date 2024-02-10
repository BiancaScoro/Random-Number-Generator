const btn = document.querySelector("button");
const resultElement = document.getElementById("result");

btn.addEventListener("click", () => {
    generateNumber(resultElement)
})

function generateNumber() {
    const numbers = "1234567890"
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNumber = numbers[randomIndex];

    resultElement.textContent = `${randomNumber}`;
}