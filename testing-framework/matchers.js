(function(exports) {
  var assert = {
    toBeTrue: function(object) {
      if (object === true) {
        console.log("test passed");
      } else {
        console.log("test failed");
      }
    },
    toBeFalse: function(object) {
      if (object === false) {
        console.log("test passed");
      } else {
        console.log("test failed")
      }
    }
  }

  exports.assert = assert;
})(this);
