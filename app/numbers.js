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
    
    return (num.toString(2).padStart(8, '0'));
  },

  multiply: function (a, b) {
    let la = 0,
    lb = 0;
  if (!Number.isInteger(a)) {
    la = a.toString().split(".")[1].length;
  }
  if (!Number.isInteger(b)) {
    lb = b.toString().split(".")[1].length;
  }
  
  const l = Math.max(la, lb);
  
  return(parseFloat((a * b).toFixed(l)));
  },
};
