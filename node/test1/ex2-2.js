const { odd, even } = require("./ex2-1");

function chkOddEven(num) {
  if (num % 2) {
    return odd;
  } else {
    return even;
  }
}

module.exports = chkOddEven;
