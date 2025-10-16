const diceInput = document.querySelector("#diceInput");
const result = document.querySelector("#result");

function rollDice() {
    const numOfDice = diceInput.value;
    const values = [];
    
    for(let i=0; i<numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
    }
    result.innerText = `Result: ${values.join(", ")}`;
}