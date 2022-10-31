const handleAutofillAddress = (value: boolean) => {
  console.log(!value)
  chrome.privacy.services.autofillAddressEnabled.clear({}, () => {
    chrome.privacy.services.autofillAddressEnabled.set(
      {
        value: !value,
      },
      () => {
        chrome.storage.local.set({
          autofillAddress: value,
        })
      }
    )
  })
}

export default handleAutofillAddress
