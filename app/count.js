exports = typeof window === "undefined" ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let current = start;
    let timeoutId;

    function printCurrentNumber() {
      console.log(current);
      current++;
      if (current <= end) {
        timeoutId = setTimeout(printCurrentNumber, 100);
      }
    }

    printCurrentNumber();
    return {
      cancel: function () {
        clearTimeout(timeoutId);
      },
    };
  },
};
