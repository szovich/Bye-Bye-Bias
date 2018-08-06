// global chrome

let genderbutton = document.getElementById('gender')
let politicalbutton = document.getElementById('political')
let racialbutton = document.getElementById('racial')
chrome.storage.sync.get('color', function (data) {
  genderbutton.style.backgroundColor = data.color
  genderbutton.setAttribute('value', data.color)
  politicalbutton.style.backgroundColor = data.color
  politicalbutton.setAttribute('value', data.color)
  racialbutton.style.backgroundColor = data.color
  racialbutton.setAttribute('value', data.color)
})

genderbutton.onclick = function (element) {
  // change page background
  // let color = element.target.value
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    // chrome.tabs.executeScript(
    //     tabs[0].id,
    //     {code: 'document.body.style.backgroundColor = "' + color + '";'});
    chrome.tabs.executeScript({
      file: 'getPagesSource.js'
    })
  })
}
