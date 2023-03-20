exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    let index = -1; //If element not found return -1
    arr.forEach((element, _index) => {
      if (element === item) {
        index = _index;
      }
    });
    return index;
  },

  sum: function (arr) {
    let sum = 0;
    for (let ele of arr) {
      sum += ele;
    }
    return sum;
  },

  remove: function (arr, item) {
    const result = arr.filter(function (ele) {
      return ele !== item;
    });
    return result;
  },

  removeWithoutCopy: function (arr, item) {
    // The splice() method in JavaScript is often used to in-place add or remove elements from an array.
    Array.prototype.remove = function (value) { // It can be done without prototype as well
      for (let i = this.length; i > 0; i--) {
        if (this[i] === value) {
          this.splice(i, 1);
        }
      }
    };
    arr.remove(item);
    return arr;
  },

  append: function (arr, item) {
    let length = arr.length;
    arr[length] = item;
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    // return result = arr1.concat(arr2);
    const result = arr1;
    let j = 0;
    let l = arr2.length + arr1.length;
    for (let i = arr1.length; i < l; i++) {
      result.push(arr2[j++]);
    }
    return result;
  },

  insert: function (arr, item, index) {
    let i = arr.length;
    while (i !== index) {
      arr[i] = arr[i - 1];
      i--;
    }
    arr[index] = item;
    return arr;
  },

  count: function (arr, item) {
    let c = 0;
    for (ele of arr) {
      if (ele === item) c++;
    }
    return c;
  },

  duplicates: function (arr) {
    arr.sort();
    let result = [];
    let i = 1;
    while (i < arr.length) {
      if (arr[i] === arr[i - 1]) {
        result.push(arr[i]);
        i += 2;
      } else {
        i++;
      }
    }
    return result;
  },

  square: function (arr) {
    const result = arr.map((num) => Math.pow(num, 2));
    return result;
  },

  findAllOccurrences: function (arr, target) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) result.push(i);
    }
    return result;
  },
};
