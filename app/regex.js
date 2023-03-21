exports = typeof window === "undefined" ? global : window;

exports.regexAnswers = {
  containsNumber: function (str) {
    const regex = /\d+/g;
    return regex.test(str);
  },

  containsRepeatingLetter: function (str) {
    const regex = /([a-zA-Z])\1/;
    return regex.test(str);
  },

  endsWithVowel: function (str) {
    const regex = /[a,e,i,o,u]$/i;
    return regex.test(str);
  },

  captureThreeNumbers: function (str) {
    const regex = /[0-9]{3,3}/;
    let temp = regex.test(str);
    if (temp) return str.match(regex)[0];
    return temp;
  },

  matchesPattern: function (str) {
    const regex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    return regex.test(str);
  },

  isUSD: function (str) {
    const regex = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
    return regex.test(str);
  },
};
