function toFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)).toFixed(2));
