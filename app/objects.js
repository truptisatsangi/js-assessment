exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.apply(obj);
  },

  alterObjects: function(constructor, greeting) {
   
     constructor.prototype.greeting = greeting;
   
    return constructor;
  },

  iterate: function(obj) {
    const result = [];
    for(let ob in obj){
      if(obj.hasOwnProperty(ob)){
        result.push(`${ob}: ${obj[ob]}`)
      }
    }
    return result;
  }
};
