var fs = require('fs');
var file = require('file.js');

function clickInput(id) {
  var event = document.createEvent('MouseEvents');
  event.initMouseEvent('click');
  document.getElementById(id).dispatchEvent(event);
}

document.addEventListener('keyup', function (e) {
  if (e.keyCode == 'O'.charCodeAt(0) && e.ctrlKey) {
    clickInput('open');
  } else if (e.keyCode == 'S'.charCodeAt(0) && e.ctrlKey) {
    clickInput('save');
  }
});
