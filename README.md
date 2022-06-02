# Vytal

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

### Did not match web worker (\_\_\_)

Value does not match the value found in a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers). The web worker value is in the brackets.

### Location data doesn't match system data

Occurs when the location data from ip address does not match your location data from your system (such as your timezone).

### VPN/proxy has been detected

Your ip address is known to be used by proxies or VPNs.

### Failed Date.prototype.setDate.toString()

`Failed Date.prototype.setDate.toString()` returns 'function setDate() { [native code] }' if the data object was NOT tampered with.

### Failed Screen.prototype

`Screen.prototype[DataType]` returns a value if the data object was tampered with. Otherwise returns an error.

### Avail width is greater than width

Happens when the avail width is greater than the normal width (which is impossible).

### Avail height is greater than height

Happens when the height width is greater than the normal height (which is impossible).

## Dev

This application uses a React frontend and a Django backend that communicates using the Django REST framework.

Backend Django setup:

```
cd backend
python manage.py runserver
```

Frontend React setup:

```
cd frontend
yarn run start
```
