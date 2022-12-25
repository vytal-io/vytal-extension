const userAgents: any = [
  {
    title: 'Android',
    values: [
      {
        title: 'Android (4.0.2) Browser - Galaxy Nexus',
        value:
          'Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
        platform: 'Linux armv7l',
      },
      {
        title: 'Android (2.3) Browser - Nexus S',
        value:
          'Mozilla/5.0 (Linux; U; Android 2.3.6; en-us; Nexus S Build/GRK39F) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
        platform: 'Linux armv7l',
      },
    ],
  },
  {
    title: 'BlackBerry',
    values: [
      {
        title: 'BlackBerry - BB10',
        value:
          'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.1+ (KHTML, like Gecko) Version/10.0.0.1337 Mobile Safari/537.1+',
        platform: 'BlackBerry',
      },
      {
        title: 'BlackBerry - PlayBook 2.1',
        value:
          'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML, like Gecko) Version/7.2.1.0 Safari/536.2+',
        platform: 'BlackBerry',
      },
      {
        title: 'BlackBerry - 9900',
        value:
          'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.187 Mobile Safari/534.11+',
        platform: 'BlackBerry',
      },
    ],
  },
  {
    title: 'Chrome',
    values: [
      {
        title: 'Chrome - Android Mobile',
        value:
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36',
        platform: 'Linux armv7l',
      },
      {
        title: 'Chrome - Android Mobile (high-end)',
        value:
          'Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36',
        platform: 'Linux armv7l',
      },
      {
        title: 'Chrome - Android Tablet',
        value:
          'Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        platform: 'Linux armv7l',
      },
      {
        title: 'Chrome - iPhone',
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/108.0.0.0 Mobile/15E148 Safari/604.1',
        platform: 'iPhone',
      },
      {
        title: 'Chrome - iPad',
        value:
          'Mozilla/5.0 (iPad; CPU OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/108.0.0.0 Mobile/15E148 Safari/604.1',
        platform: 'iPad',
      },
      {
        title: 'Chrome - Chrome OS',
        value:
          'Mozilla/5.0 (X11; CrOS x86_64 10066.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        platform: 'Linux X86_64',
      },
      {
        title: 'Chrome - Mac',
        value:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        platform: 'MacIntel',
      },
      {
        title: 'Chrome - Windows',
        value:
          'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        platform: 'Win32',
      },
    ],
  },
  {
    title: 'Firefox',
    values: [
      {
        title: 'Firefox - Android Mobile',
        value:
          'Mozilla/5.0 (Android 4.4; Mobile; rv:70.0) Gecko/70.0 Firefox/70.0',
        platform: 'Linux armv7l',
      },
      {
        title: 'Firefox - Android Tablet',
        value:
          'Mozilla/5.0 (Android 4.4; Tablet; rv:70.0) Gecko/70.0 Firefox/70.0',
        platform: 'Linux armv7l',
      },
      {
        title: 'Firefox - iPhone',
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4',
        platform: 'iPhone',
      },
      {
        title: 'Firefox - iPad',
        value:
          'Mozilla/5.0 (iPad; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4',
        platform: 'iPad',
      },
      {
        title: 'Firefox - Mac',
        value:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:70.0) Gecko/20100101 Firefox/70.0',
        platform: 'MacIntel',
      },
      {
        title: 'Firefox - Windows',
        value:
          'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:70.0) Gecko/20100101 Firefox/70.0',
        platform: 'Win32',
      },
    ],
  },
  // {
  //   title: 'Googlebot',
  //   values: [
  //     {
  //       title: 'Googlebot',
  //       value:
  //         'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  //       platform: 'Android',
  //     },
  //     {
  //       title: 'Googlebot Desktop',
  //       value:
  //         'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/108.0.0.0 Safari/537.36',
  //       platform: 'Android',
  //     },
  //     {
  //       title: 'Googlebot Smartphone',
  //       value:
  //         'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  //       platform: 'Android',
  //     },
  //   ],
  // },
  {
    title: 'Internet Explorer',
    values: [
      {
        title: 'Internet Explorer 11',
        value:
          'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
        platform: 'Win32',
      },
      {
        title: 'Internet Explorer 10',
        value:
          'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)',
        platform: 'Win32',
      },
      {
        title: 'Internet Explorer 9',
        value:
          'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)',
        platform: 'Win32',
      },
      {
        title: 'Internet Explorer 8',
        value:
          'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)',
        platform: 'Win32',
      },
      {
        title: 'Internet Explorer 7',
        value: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)',
        platform: 'Win32',
      },
    ],
  },
  {
    title: 'Microsoft Edge',
    values: [
      {
        title: 'Microsoft Edge (Chromium) - Windows',
        value:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.0.0',
        platform: 'Win32',
      },
      {
        title: 'Microsoft Edge (Chromium) - Mac',
        value:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/604.1 Edg/108.0.0.0',
        platform: 'MacIntel',
      },
      {
        title: 'Microsoft Edge - iPhone',
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 EdgiOS/44.5.0.10 Mobile/15E148 Safari/604.1',
        platform: 'iPhone',
      },
      {
        title: 'Microsoft Edge - iPad',
        value:
          'Mozilla/5.0 (iPad; CPU OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 EdgiOS/44.5.2 Mobile/15E148 Safari/605.1.15',
        platform: 'iPad',
      },
      {
        title: 'Microsoft Edge - Android Mobile',
        value:
          'Mozilla/5.0 (Linux; Android 8.1.0; Pixel Build/OPM4.171019.021.D1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.109 Mobile Safari/537.36 EdgA/42.0.0.2057',
        platform: 'Linux armv7l',
      },
      {
        title: 'Microsoft Edge - Android Tablet',
        value:
          'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.109 Safari/537.36 EdgA/42.0.0.2057',
        platform: 'Linux armv7l',
      },
      {
        title: 'Microsoft Edge (EdgeHTML) - Windows',
        value:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19042',
        platform: 'Win32',
      },
      {
        title: 'Microsoft Edge (EdgeHTML) - XBox',
        value:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19041',
        platform: 'Win32',
      },
    ],
  },
  {
    title: 'Opera',
    values: [
      {
        title: 'Opera - Mac',
        value:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36 OPR/65.0.3467.48',
        platform: 'MacIntel',
      },
      {
        title: 'Opera - Windows',
        value:
          'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36 OPR/65.0.3467.48',
        platform: 'Win32',
      },
      {
        title: 'Opera (Presto) - Mac',
        value:
          'Opera/9.80 (Macintosh; Intel Mac OS X 10.9.1) Presto/2.12.388 Version/12.16',
        platform: 'MacIntel',
      },
      {
        title: 'Opera (Presto) - Windows',
        value: 'Opera/9.80 (Windows NT 6.1) Presto/2.12.388 Version/12.16',
        platform: 'Win32',
      },
      {
        title: 'Opera Mobile - Android Mobile',
        value:
          'Opera/12.02 (Android 4.1; Linux; Opera Mobi/ADR-1111101157; U; en-US) Presto/2.9.201 Version/12.02',
        platform: 'Linux armv7l',
      },
      {
        title: 'Opera Mini - iOS',
        value:
          'Opera/9.80 (iPhone; Opera Mini/8.0.0/34.2336; U; en) Presto/2.8.119 Version/11.10',
        platform: 'iPhone',
      },
    ],
  },
  {
    title: 'Safari',
    values: [
      {
        title: 'Safari - iPad iOS 13.2',
        value:
          'Mozilla/5.0 (iPad; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        platform: 'iPad',
      },
      {
        title: 'Safari - iPhone iOS 13.2',
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        platform: 'iPhone',
      },
      {
        title: 'Safari - Mac',
        value:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15',
        platform: 'MacIntel',
      },
    ],
  },
  {
    title: 'UC Browser',
    values: [
      {
        title: 'UC Browser - Android Mobile',
        value:
          'Mozilla/5.0 (Linux; U; Android 8.1.0; en-US; Nexus 6P Build/OPM7.181205.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.11.1.1197 Mobile Safari/537.36',
        platform: 'Linux armv7l',
      },
      {
        title: 'UC Browser - iOS',
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/16B92 UCBrowser/12.1.7.1109 Mobile AliApp(TUnionSDK/0.1.20.3)',
        platform: 'iPhone',
      },
      {
        title: 'UC Browser - Windows Phone',
        value:
          'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920) UCBrowser/10.1.0.563 Mobile',
        platform: 'Win32',
      },
    ],
  },
]

export default userAgents
