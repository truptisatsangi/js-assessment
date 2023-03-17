exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    let res = "",
      count = 1;
    for (let i = 0; i < str.length; i++) {
      if (count <= amount) {
        res = res + str[i];
      }
      if (str[i + 1] !== str[i]) {
        count = 1;
      } else {
        count++;
      }
    }
    return res;
  },

  wordWrap: function (str, cols) {
    let res = "";
    let i = 0;
    while (i < str.length) {
      if (str[i + cols] === " ") {
        res = res + str.substr(i, cols) + "\n";
        i += cols + 1;
      } else {
        while (str[i] !== " " && i < str.length) {
          res += str[i++];
        }
        res += "\n";
        i++;
      }
    }
    return res.trim();
  },

  reverseString: function (str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
      res += str[i];
    }
    return res;
  },
};
