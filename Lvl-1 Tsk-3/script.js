document.getElementById('convert-btn').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperature-input').value;
    const unitInput = document.getElementById('unit-input').value;
    const resultElement = document.getElementById('result');

    if (isNaN(temperatureInput) || temperatureInput === '') {
        resultElement.textContent = 'Please enter a valid number!';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemp, convertedUnit;

    switch(unitInput) {
        case 'celsius':
            convertedTemp = `${(temperature * 9/5 + 32).toFixed(2)} °F, ${(temperature + 273.15).toFixed(2)} K`;
            convertedUnit = '°C';
            break;
        case 'fahrenheit':
            convertedTemp = `${((temperature - 32) * 5/9).toFixed(2)} °C, ${((temperature - 32) * 5/9 + 273.15).toFixed(2)} K`;
            convertedUnit = '°F';
            break;
        case 'kelvin':
            convertedTemp = `${(temperature - 273.15).toFixed(2)} °C, ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
            convertedUnit = 'K';
            break;
    }

    resultElement.textContent = `${temperature} ${convertedUnit} is ${convertedTemp}`;
});
