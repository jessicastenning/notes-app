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
    },
    toEq: function(object, object2) {
    if (JSON.stringify(object) === JSON.stringify(object2)) {
      console.log("test passed")
    } else {
      console.log("test failed")
    }
  },
  toInclude: function(object, object2) {
    if (object.includes(object2)) {
      console.log("test passed")
    } else {
      console.log("test failed")
    }
  }
  }

  exports.assert = assert;
})(this);
