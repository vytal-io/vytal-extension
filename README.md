# Vytal

<a href="https://chrome.google.com/webstore/detail/vytal/ncbknoohfjmcfneopnfkapmkblaenokb"><img src="https://raw.githubusercontent.com/z0ccc/Upvote-Anywhere/master/promo/chrome.png" alt="Get Vytal for Chromium"></a>

Protect your privacy by mocking your personal data.

## About

Vytal can mock your timezone, locale, geolocation and user agent. This data can be used to track you online or reveal your location.

Vytal is utilizes the chrome.debugger API to mock this data. This allows the data to be changed in frames, web workers and during the initial loading of a website. It also makes the spoofing completely undetectable.

You can test and compare Vytal and other extensions on https://vytal.io

Vytal contains no ads and signup is not required.

## Limitations

### Tab initialization

There is a slight delay between when a new tab is opened and the debugger starts mocking the data. This allows for websites to get the original value of the data before it is changed. After the initial loading of a tab, this will no longer be an issue.

### Locale override does not mock language data

Unlike the Chrome devtools location sensor, overriding the locale does not change language data (such as navigator.language or navigator.languages). There is an open ticket about this here: https://bugs.chromium.org/p/chromium/issues/detail?id=1320419

## Data Tampering

Data spoofed with Vytal can not be detected. Although other extensions which spoof's data can be detected. have If data tampering is detected then a red circle with an ‘x’ will be displayed next to the data value. If the legitimate value cannot be identified then the data will be discarded and will not be used to generate a fingerprint. Clicking on the table row of the tampered value will bring up a dialog box showing the types of tampering.

## Types of Tampering

### Failed Navigator.prototype

`Navigator.prototype[DataType]` returns a value if the data object was tampered with. Otherwise returns an error.

### Failed undefined properties

`Object.getOwnPropertyDescriptor(navigator, [DataType])` returns an object if the data object was tampered with. Otherwise returns ‘undefined’.

### Failed Navigator property value

`Object.getOwnPropertyDescriptor(Navigator.prototype, [DataType]).value` returns an error if the data object was tampered with. Otherwise returns ‘undefined’.

### Failed Date.prototype.setDate.toString()

`Failed Date.prototype.setDate.toString()` returns 'function setDate() { [native code] }' if the data object was NOT tampered with.

### Failed Screen.prototype

`Screen.prototype[DataType]` returns a value if the data object was tampered with. Otherwise returns an error.

## Screenshots

![Screenshot of extension popup](https://raw.githubusercontent.com/z0ccc/Vytal/extension/promo/screenshot-1.png)

![Screenshot of extension popup and vytal.io](https://raw.githubusercontent.com/z0ccc/Vytal/extension/promo/screenshot-2.png)

## Dev

This application is built with Javascript and React.

Clone this repo and run these commands to start the development server.

```
yarn
yarn start
```

Load your extension on Chrome following:

- Access chrome://extensions/
- Check Developer mode
- Click on Load unpacked extension
- Select the build folder.
