const temperature = document.querySelector("#textbox");
const c2f = document.querySelector("#c2f");
const f2c = document.querySelector("#f2c");
const result = document.querySelector("#result");

function convertTemperature() {
    
    if (c2f.checked) {
        let temp = temperature.value;
        const fahrenheit = (temp * 9/5) + 32;
        result.innerText = `Result: ${fahrenheit.toFixed(2)} °F`;
    }
    else if (f2c.checked) {
        let temp = temperature.value;
        const celsius = (temp - 32) * 5/9;
        result.innerText = `Result: ${celsius.toFixed(2)} °C`;
    }
    else{
        result.innerText = `Result: 請選擇轉換類型`;
    }
}