// const { object } = require("underscore");

exports = typeof window === "undefined" ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    const listOfFiles = [];
    const dirs = [];
    function traverseFiles(dir) {
      const files = dir.files;
      dirs.push(dir.dir);
      for (let i = 0; i < files.length; i++) {
        if (typeof files[i] === "string") {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          traverseFiles(files[i]);
        }
      }
      dirs.pop();
    }
    traverseFiles(data);
    return listOfFiles;
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
