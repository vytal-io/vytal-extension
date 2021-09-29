const data = {
  locale: Intl.DateTimeFormat().resolvedOptions().locale,
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  timezoneOffset: new Date().getTimezoneOffset(),
  deviceMemory: navigator.deviceMemory,
  hardwareConcurrency: navigator.hardwareConcurrency,
  platform: navigator.platform,
  userAgent: navigator.userAgent,
  appVersion: navigator.appVersion,
  language: navigator.language,
  languages: navigator.languages,
};

postMessage(data);
