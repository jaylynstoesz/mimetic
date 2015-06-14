module.exports = {

  parseQueryString: function(input) {

  var output = {};
      if (input !== null) {
      var strings = input.replace("?", "").split("&");
      for (var i = 0; i < strings.length; i++) {
        var pair = strings[i].split("=");
        var key = pair[0];
        var value = pair[1];
        output[key] = value;
      };
    };
  return output;
  }

};
