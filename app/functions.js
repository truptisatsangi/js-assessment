exports = typeof window === "undefined" ? global : window;

exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak: function (fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function (str) {
    return function (str2) {
      return str + ", " + str2;
    };
  },

  makeClosures: function (arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
      (function (x) {
        res.push(function () {
          return fn(x); //accesing x from outer function lexical scope
        });
      })(arr[i]); //Immediately invoking function
    }
    return res;
  },

  partial: function (fn, str1, str2) {
    return function (str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function (a = 0, b = 0, c = 0, d = 0) {
    return a + b + c + d;
  },

  callIt: function (fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(null, args);
  },

  partialUsingArguments: function (fn) {
    var partialArgs = Array.prototype.slice.call(arguments, 1);
    return function () {
      var args = partialArgs.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, args);
    };
  },

  curryIt: function (fn) {
    return function (arg1) {
      return function (arg2) {
        return function (arg3) {
          return fn(arg1, arg2, arg3);
        };
      };
    };
  },
};
