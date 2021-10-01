# Vytal

Check it out here: https://vytal.io.

## About

Vytal shows you what traces your browser leaves behind while surfing the web. This scan allows you to understand how easy it is to identify and track your browser even while using private mode.

A hash will be generated from your device data. Even if you clear cookies, change your IP or use private mode the hash will stay the same. You can enter a signature and turn on a VPN or private mode to test it out.

Vytal contains no ads and signup is not required.

## Data Tampering

The data used to create device fingerprints can be spoofed or tampered with to obscure the true fingerprint. There are a variety of methods used to do this including VPNs, browser extensions and built in browser options.

If data tampering is detected then a red circle with an ‘x’ will be displayed next to the data value. If the legitimate value cannot be identified the data will be discarded and not used in creating the fingerprint. Clicking on the table row of the tampered value will bring up a dialog box showing the detected issues.

### Tampering Issues

#### Failed Navigator.prototype

```
Navigator.prototype.[type]
```

Returns value if the object was tampered with. Otherwise returns an error.

#### Failed undefined properties

```
Object.getOwnPropertyDescriptor(navigator, [type])
```

Returns an object if the object was tampered with. Otherwise returns ‘undefined’.

#### Did not match web worker (\_\_\_)

Value does not match the value found in the web worker [web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers). The web worker value is in the brackets.

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
