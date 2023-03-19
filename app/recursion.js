// const { object } = require("underscore");

exports = typeof window === "undefined" ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    let files = [];
    function traverseFiles(data, dirName) {
      if (!data) {
        return;
      }
      if (data.files) {
        for (let i = 0; i < data.files.length; i++) {
          if (typeof data.files[i] === "string") {
            if (!dirName) {
              files.push(data.files[i]);
            } else if (data.dir === dirName) {
              files.push(data.files[i]);
              for (let j = 0; j < data.files[i].length; j++)
                traverseFiles(data.files[j]);
                // break;
            }
          } else {
            traverseFiles(data.files[i], dirName);
          }
        }
      }
    }

    traverseFiles(data, dirName);
    return files;
  },

  permute: function (arr) {
    const result = [];
    function permute(arr, index) {
      if (index === arr.length - 1) {
        result.push([...arr]);
      } else {
        for (let i = index; i < arr.length; i++) {
          [arr[index], arr[i]] = [arr[i], arr[index]];
          permute(arr, index + 1);
          [arr[index], arr[i]] = [arr[i], arr[index]];
        }
      }
    }
    permute(arr, 0);
    return result;
  },

  fibonacci: function (n) {
    function fib(n) {
      if (n <= 1) {
        return n;
      } else {
        return fib(n - 1) + fib(n - 2);
      }
    }
    return fib(n);
  },

  validParentheses: function (n) {
    const arrayOfBrackets = [];
    let str = "";
    function generate(open, closed, str) {
      if (open == 0 && closed == 0) {
        arrayOfBrackets.push(str);
      }
      if (open > 0) {
        generate(open - 1, closed + 1, str + "(");
      }
      if (closed > 0) {
        generate(open, closed - 1, str + ")");
      }
      return arrayOfBrackets;
    }
    return generate(n, 0, str);
  },
};
