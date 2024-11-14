// Set the current year in the footer's first paragraph
const currentYearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Set the last modified date in the footer's second paragraph
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = "Last Modified: " + document.lastModified;
