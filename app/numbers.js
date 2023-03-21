exports = typeof window === "undefined" ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    const temp = num.toString(2);
    return parseInt(temp[temp.length - bit]);
  },

  base10: function (str) {
    return parseInt(str, 2);
  },

  convertToBinary: function (num) {
    return num.toString(2).padStart(8, "0");
  },

  multiply: function (a, b) {
    let digitsAfterDecimalOfa = 0;
    let digitsAfterDecimalOfb = 0;

    if (!Number.isInteger(a)) {
      digitsAfterDecimalOfa = a.toString().split(".")[1].length;
    }
    if (!Number.isInteger(b)) {
      digitsAfterDecimalOfb = b.toString().split(".")[1].length;
    }

    const l = Math.max(digitsAfterDecimalOfa, digitsAfterDecimalOfb);

    return parseFloat((a * b).toFixed(l));
  },
};
