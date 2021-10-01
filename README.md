# Vytal

Check it out here: https://vytal.io.

## About

Vytal shows you what traces your browser leaves behind while surfing the web. This scan allows you to understand how easy it is to identify and track your browser even while using a VPN or private mode.

A device fingerprint will be generated from your data in the form of a hash. You can sign your hash by entering and saving a signature. You can clear cookies, change your IP or use private mode and reload the page to see if your signature remains the same.

Vytal contains no ads and signup is not required.

## Data Tampering

The data used to create device fingerprints can be spoofed or tampered with to prevent tracking. There are a variety of methods used to do this including VPNs, browser extensions and built in browser options. Some methods of data tampering can be detected.

If data tampering is detected then a red circle with an ‘x’ will be displayed next to the data value. If the legitimate value cannot be identified then the data will be discarded and will not be used to generate a fingerprint. Clicking on the table row of the tampered value will bring up a dialog box showing the types of tampering.

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

This application is built with a react frontend and a django backend.

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
