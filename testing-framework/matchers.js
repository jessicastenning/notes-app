(function(exports) {
  var assert = {
    toBeTrue: function(object) {
      if (object === true) {
        console.log('%c test passed', 'background: #222; color: #bada55');
      } else {
        console.log('%c test failed', 'background: #222; color: red');
      }
    },
    toBeFalse: function(object) {
      if (object === false) {
        console.log('%c test passed', 'background: #222; color: #bada55');
      } else {
        console.log('%c test failed', 'background: #222; color: red');
      }
    },
    toEq: function(object, object2) {
    if (JSON.stringify(object) === JSON.stringify(object2)) {
      console.log('%c test passed', 'background: #222; color: #bada55');
    } else {
      console.log('%c test failed', 'background: #222; color: red');
    }
  },
  toInclude: function(object, object2) {
    if (object.includes(object2)) {
      console.log('%c test passed', 'background: #222; color: #bada55');
    } else {;
      console.log('%c test failed', 'background: #222; color: red')
    }
  }
  }

  exports.assert = assert;
})(this);
