chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({color: '#FFB6C1'}, function () {
    console.log('The color is pink.')
  })
chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostContains: '.'},
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }])
   })
})
