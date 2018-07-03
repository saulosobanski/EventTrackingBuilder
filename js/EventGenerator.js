document.addEventListener("DOMContentLoaded", function(event) {

var copyBtn = document.getElementsByClassName('btn')[0];
copyBtn.addEventListener("click", copy);

function copy() {
  var copyText = document.getElementById('event');
  copyText.select();
  document.execCommand('copy');
} 

});