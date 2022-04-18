var mime_samples = [
  { 'mime': 'application/binary', 'samples': [
    { 'url': 'https://mil.ru/sfi9876', 'dir': '_m0/0', 'linked': 2, 'len': 48052 } ]
  },
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'https://mil.ru/', 'dir': '_m1/0', 'linked': 2, 'len': 400000 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://mil.ru/', 'dir': '_m2/0', 'linked': 2, 'len': 198 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40201, 'samples': [
    { 'url': 'https://mil.ru/', 'extra': 'https://function.mil.ru/function/search_the_site.htm', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'https://mil.ru/', 'extra': 'https://vk.com/js/api/openapi.js?169', 'sid': '0', 'dir': '_i0/1' } ]
  },
  { 'severity': 2, 'type': 30501, 'samples': [
    { 'url': 'https://mil.ru/', 'extra': 'https://cnt.sputnik.ru/informer?domain=mil.ru&tz=300', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 1, 'type': 20102, 'samples': [
    { 'url': 'http://mil.ru/PUT-sfi9876', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://mil.ru/mission/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://mil.ru/mission/innovacia.htm', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'https://mil.ru/PUT-sfi9876', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'https://mil.ru/commemoration/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'https://mil.ru/commemoration/memorial/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/5' },
    { 'url': 'https://mil.ru/economy/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/6' },
    { 'url': 'https://mil.ru/economy/orders/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/7' },
    { 'url': 'https://mil.ru/fea/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/8' },
    { 'url': 'https://mil.ru/files/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/9' },
    { 'url': 'https://mil.ru/files/files/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/10' },
    { 'url': 'https://mil.ru/images/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/11' },
    { 'url': 'https://mil.ru/images/military/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/12' },
    { 'url': 'https://mil.ru/images/military/gallery/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/13' },
    { 'url': 'https://mil.ru/images/military/gallery/2019/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/14' },
    { 'url': 'https://mil.ru/images/military/icons/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/15' },
    { 'url': 'https://mil.ru/scripts/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/16' },
    { 'url': 'https://mil.ru/scripts/military/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/17' },
    { 'url': 'https://mil.ru/scripts/military/minified/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/18' },
    { 'url': 'https://mil.ru/sn/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/19' },
    { 'url': 'https://mil.ru/styles/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/20' },
    { 'url': 'https://mil.ru/styles/military/', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/21' },
    { 'url': 'https://mil.ru/styles/military/styles_ru.min.css', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/22' },
    { 'url': 'https://mil.ru/styles/military/styles_ru.min.css?20210624', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i2/23' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://mil.ru/sfi9876.svg', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'https://mil.ru/sfi9876.htm', 'extra': 'during 404 response checks', 'sid': '0', 'dir': '_i3/1' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'https://mil.ru/images/military/gallery/2019/', 'extra': '', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://mil.ru/', 'extra': '', 'sid': '0', 'dir': '_i5/0' } ]
  },
  { 'severity': 0, 'type': 10801, 'samples': [
    { 'url': 'https://mil.ru/sfi9876', 'extra': 'application/binary', 'sid': '0', 'dir': '_i6/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://mil.ru/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'https://mil.ru/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'https://mil.ru/sfi9876.svg', 'extra': '', 'sid': '0', 'dir': '_i7/2' },
    { 'url': 'https://mil.ru/sfi9876.svg', 'extra': '', 'sid': '0', 'dir': '_i7/3' },
    { 'url': 'https://mil.ru/sfi9876.htm', 'extra': '', 'sid': '0', 'dir': '_i7/4' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://mil.ru/', 'extra': 'X-Server', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'https://mil.ru/', 'extra': 'X-Server', 'sid': '0', 'dir': '_i8/1' },
    { 'url': 'https://mil.ru/', 'extra': 'X-Cache', 'sid': '0', 'dir': '_i8/2' },
    { 'url': 'https://mil.ru/', 'extra': 'X-Time', 'sid': '0', 'dir': '_i8/3' },
    { 'url': 'https://mil.ru/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i8/4' },
    { 'url': 'https://mil.ru/', 'extra': 'X-XSS-Protection', 'sid': '0', 'dir': '_i8/5' },
    { 'url': 'https://mil.ru/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i8/6' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://mil.ru/', 'extra': 'nginx', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'https://mil.ru/', 'extra': 'Ministry of Defence of the Russian Federation', 'sid': '0', 'dir': '_i9/1' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'https://mil.ru/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i10/0' } ]
  },
  { 'severity': 0, 'type': 10101, 'samples': [
    { 'url': 'https://mil.ru/', 'extra': '/C=BE/O=GlobalSign nv-sa/CN=AlphaSSL CA - SHA256 - G2', 'sid': '0', 'dir': '_i11/0' } ]
  }
];

