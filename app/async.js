exports = typeof window === "undefined" ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    const promise = new Promise((resolve, reject) => {
      if (value) {
        resolve(value);
      } else {
        reject(value);
      }
    });
    return promise;
  },

  manipulateRemoteData: function (url) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const names = data.people
          .map((person) => person.name)
          .sort((a, b) => a.localeCompare(b));
        return names;
      });
  },
};
