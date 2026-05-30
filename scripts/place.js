const temperature = 8;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    );
}

const windChillDisplay = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillDisplay.textContent =
        `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windChillDisplay.textContent = "N/A";
}

document.querySelector("#year").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;