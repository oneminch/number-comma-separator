const numSeparator = num => {
  // Input validation
  if (isNaN(num)) return "Please enter a number!";

  if (num < 1000) return numStr;
  
  let decimal = "", numStr = num.toString();

  // Check if number is a floating point
  if (numStr.indexOf(".") > -1) {
    decimal = `.${numStr.split(".")[1]}`;
    numStr = numStr.split(".")[0];
  }

  for (let i = numStr.length; i >= 0; i -= 3) {
    if (i < 4) break;

    numStr = `${numStr.substring(0, i - 3)},${numStr.substring(
      i - 3,
      numStr.length
    )}`;
  }
  return decimal ? numStr.concat(decimal) : numStr;
};

/* ------------------ User Interface --------------------------- */

const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("keyup", e => {
  e.preventDefault();
  output.value = numSeparator(e.target.value);
});
