function convertTemp() {
  const tempInput = document.getElementById("tempInput").value;
  const unitInput = document.getElementById("unitInput").value;
  let result;

  if (unitInput === "Celsius") {
    result = (tempInput * 9) / 5 + 32;
    result = result.toFixed(2) + " °F";
  } else {
    result = ((tempInput - 32) * 5) / 9;
    result = result.toFixed(2) + " °C";
  }
  if (unitInput === "Celsius") {
    document.getElementById("result").innerHTML =
      "Converted Temperature in Fahrenheit: " + result;
  } else {
    document.getElementById("result").innerHTML =
      "Converted Temperature in Celsius: " + result;
  }
}
function refreshPage() {
  location.reload();
}
