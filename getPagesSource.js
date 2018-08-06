function getSelectedText () {
  // output selected text in console to make sure it's right
  console.log(window.getSelection().toString())
  // call API
  callAPI(window.getSelection().toString())
}

function callAPI (selectedText) {
  // set up the api for gender
  var q, r;

q = 'https://api.textgain.com/1/gender?';
q += 'q=' + encodeURIComponent(selectedText) + '&lang=en&key=***';

r = new XMLHttpRequest();
r.open('GET', q, false); // false = synchronous
r.send();
r = r.responseText;
r = JSON.parse(r);

console.log(r);
  // take selectedText variable and put it in the api

  // console.log() the output of the api

}

chrome.runtime.sendMessage({
  action: 'getSource',
  source: getSelectedText()
})
