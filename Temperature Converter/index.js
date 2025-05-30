const celciusEl = document.getElementById("celcius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event) {
    const currentValue = +event.target.value;

    switch(event.target.name) {
        case "celcius" :
            kelvinEl.value = (currentValue + 273.32).toFixed(2);
            fahrenheitEl.value = (currentValue* 1.8 + 32).toFixed(2);
            break;
        case "fahrenheit" :
            celciusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin" :
            fahrenheitEl.value = (currentValue - 273.32).toFixed(2);
            celciusEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
            
    }
}