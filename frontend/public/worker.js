const data = {
  locale: Intl.DateTimeFormat().resolvedOptions().locale,
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  timezoneOffset: new Date().getTimezoneOffset(),
  date: new Date().toString(),
  language: navigator.language,
  languages: navigator.languages,
};

postMessage(data);
