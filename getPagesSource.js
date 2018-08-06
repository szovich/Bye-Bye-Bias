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

// take r, see if it's f or m
// let r = {gender: f, confidence: .75}
// let r = {gender: m, confidence: .75}
  if (r.gender === "f") {
   document.body.style.backgroundColor = 'pink';
} else {
  document.body.style.backgroundColor = 'blue';
}

// <BODY onload="changeBackground('pink');">
//   }
// if (r.gender  === "m") { {
//    document.body.style.background = color;
// }
//
// <BODY onload="changeBackground('blue');">

// if f, do javascript to change background pink
// changeColor.onclick = function(element) {
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
//   };
// if m, do javascript to change background blue

}

chrome.runtime.sendMessage({
  action: 'getSource',
  source: getSelectedText()
})
