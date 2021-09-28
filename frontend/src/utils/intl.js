import { checkWebWorker } from './common';

const getLocale = (locale) => ({
  key: 'Locale',
  value: Intl.DateTimeFormat().resolvedOptions().locale,
  issues: [
    checkWebWorker(Intl.DateTimeFormat().resolvedOptions().locale, locale),
  ],
});

const getTimezone = (timeZone) => ({
  key: 'Timezone',
  value: Intl.DateTimeFormat().resolvedOptions().timeZone,
  issues: [
    checkWebWorker(Intl.DateTimeFormat().resolvedOptions().timeZone, timeZone),
  ],
});

const getIntl = (workerData) => [
  getLocale(workerData.locale),
  getTimezone(workerData.timeZone),
];

export default getIntl;
