const setAutofillAddress = () => {
  chrome.storage.local.get(['isWebRtcDisabled'], (storage) => {
    const value = storage.isWebRtcDisabled
      ? 'default'
      : 'disable_non_proxied_udp'

    chrome.privacy.services.autofillAddressEnabled.clear({}, () => {
      chrome.privacy.network.webRTCIPHandlingPolicy.set(
        {
          value,
        },
        () => {
          chrome.storage.local.set({
            isWebRtcDisabled: !storage.isWebRtcDisabled,
          })
          //   chrome.privacy.network.webRTCIPHandlingPolicy.get({}, (s) => {
          //     // let path = 'data/icons/'
          //     // let title = 'WebRTC access is allowed'
          //     if (s.value !== value) {
          //     //   path += 'red/'
          //     //   title =
          //         console.log('WebRTC access cannot be changed. It is controlled by another extension')
          //     } else if (prefs.enabled === false) {
          //       path += 'disabled/'
          //       title = 'WebRTC access is blocked'
          //     }
          //   })
        }
      )
    })
  })
}

export default setAutofillAddress
