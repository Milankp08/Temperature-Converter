function convertToF() {
    const celsius = document.getElementById("celsius").value;
    const fahrenheit = celsius * 9/5 + 32;
    document.getElementById("fahrenheit").value = fahrenheit;
  }
  
  function convertToC() {
    const fahrenheit = document.getElementById("fahrenheit").value;
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("celsius").value = celsius;
  }
  
  function Reset(){
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
  }