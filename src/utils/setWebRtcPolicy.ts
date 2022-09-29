const setWebRtcPolicy = () => {
  chrome.storage.sync.get(['isWebRtcDisabled'], (storage) => {
    const value = storage.isWebRtcDisabled
      ? 'default'
      : 'disable_non_proxied_udp'

    chrome.privacy.network.webRTCIPHandlingPolicy.clear({}, () => {
      chrome.privacy.network.webRTCIPHandlingPolicy.set(
        {
          value,
        },
        () => {
          chrome.storage.sync.set({
            isWebRtcDisabled: !storage.isWebRtcDisabled,
          })
        }
      )
    })
  })
}

export default setWebRtcPolicy
