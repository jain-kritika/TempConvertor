document.getElementById("convertBtn").addEventListener("click", function () {
    const celsiusInput = document.getElementById("celsius").value;
    
    if (celsiusInput !== "") {
        const celsius = parseFloat(celsiusInput);
        
        if (!isNaN(celsius)) {
            const fahrenheit = celsius * 9/5 + 32;
            document.getElementById("result").innerText = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
        } else {
            document.getElementById("result").innerText = "Please enter a valid number!";
        }
    } else {
        document.getElementById("result").innerText = "Please enter a temperature!";
    }
});