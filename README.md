# LocateJS

Check it out here: [https://locatejs.com/](https://locatejs.com/).

## About

LocateJS predicts your location by analyzing your connection and system data. This scan allows you to understand how your location can be pinpointed even while using a VPN, location spoofer or private mode.

Accuracy of the location prediction is dependent on how well you have concealed your location data. The prediction can be anywhere from spot-on to inaccurate depending on how much identifiable and authentic info your exposing.

## How to hide location

The best way to hide your location is to use [Tor](https://www.torproject.org/). Tor will completely hide both your connection and system data.

As it's not always practical to use Tor (slow speeds, captcha loops, etc) the following are instructions on how to obscure your location without Tor.

To hide your connection data you will need to use a VPN or proxy

To hide your system data you will need to change your system settings. You can change your timezone to one with the same timezone offset so that the date on your computer stays the same.

Timezone/location spoofing extensions will not help as they cannot spoof data in [web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).

You should select a language that has no country associated with it (‘en’ instead of ‘en-US’). You should remove all other languages.

Although adding multiple random languages will help obscure your location, it's not the best idea as it will give you a very unique [device fingerprint](https://en.wikipedia.org/wiki/Device_fingerprint).

It's also a good idea to make sure your connection data matches your system data because if there are contradictions it would reveal that you are attempting to hide your location.

## FAQ

### Why did nothing change when ‘Only use system data for prediction’ was selected?

If the values do not change when this option is selected it means that the connection values were already removed from the prediction due to being detected as inaccurate.

### What do the green and red circles mean?

A red circle indicates that the data in that row has been tampered with. If the true value cannot be derived then it is assumed to be inaccurate and will be left out of the location prediction. You can click on the red circle to see what types of issues have been detected.

A green circle indicates that no object tampering has been detected and that the value is legitimate.

## Dev

This application is built with Javascript and React.

Clone this repo and run these commands to start the development server.

```
yarn
yarn run start
```

The website can then be accessed at http://localhost:3000/.
