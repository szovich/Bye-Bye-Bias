chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === 'loaded_page') {
      console.log('loaded page')
    }
  }
)
