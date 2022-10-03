const handleWebRtcPolicy = (value: string) => {
  console.log(value)
  chrome.privacy.network.webRTCIPHandlingPolicy.clear({}, () => {
    chrome.privacy.network.webRTCIPHandlingPolicy.set(
      {
        value,
      },
      () => {
        chrome.storage.sync.set({
          webRtcPolicy: value,
        })
      }
    )
  })
}

export default handleWebRtcPolicy
