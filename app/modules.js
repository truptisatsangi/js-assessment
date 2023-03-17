exports = typeof window === "undefined" ? global : window;

exports.modulesAnswers = {
  createModule: function (str1, str2) {
    //cannot use arrow function as arrow function doesnot have their own this
    return {
      name: str2,
      greeting: str1,
      sayIt: function()  {
        const res = this.greeting + ", " + this.name;
        return res;
      }      
    };
  },
};
