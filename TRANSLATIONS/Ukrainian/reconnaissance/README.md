# Maltego

Це інструмент для дослідження https://www.maltego.com.
Це безкоштовно, з обмеженням до 12 записів на категорію, яку ви шукаєте, і певну дату.

## Інший WWW-based інструменти

1. https://whois.domaintools.com - основна інформація про власника цілі.
2. https://sitereport.netcraft.com - технології, які використовує ціль.
3. https://www.robtex.com - вичерпну інформацію про ціль. Функція "пошук" не працює, показуючи "404" у кожному запиті. Застосуйте його безпосередньо з URL-адреси, наприклад, `https://www.robtex.com/dns-lookup/cbr.ru`, а потім змініть `cbr.ru` на потрібну ціль. Деякі більш детальні розділи вимагають увійти в систему за допомогою системи єдиного входу (SSO).

## Knockpy

Відкрийте для себе субдомени за допомогою
https://github.com/guelfoweb/knock бігаючи `knockpy [domain]`, e.g., `knockpy cbr.ru`

## recon-ng

Відкрийте для себе хости за допомогою `recon-ng`, вбудований `Kali Linux`, необхідні кроки:

1. `Kali Linux`
2. `recon-ng`
3. `marketplace install all`
4. `db insert domains`
5. `[domain]`, e.g., `cbr.ru`
6. `modules load recon/domains-hosts/hackertarget`
7. `options set SOURCE default`
8. `run`

На основі https://medium.com/@bibinrajbs/using-recon-ng-in-kali-2020-cc76aa3a4a6d

## https://github.com/m0rtem/CloudFail

## nmap

### Скануйте `20` найпопулярніших портів за допомогою `nmap`, вбудованого в `Kali Linux`, необхідні кроки:

1. `Kali Linux`
2. `nmap --top-ports 20 [IP_ADDRESS]`, e.g., `185.178.208.7`

### Скануйте всі зарезервовані порти `TCP`, необхідні кроки:

1. `Kali Linux`
2. `nmap -v [domain]`, e.g., `cbr.ru`

На основі <https://www.varonis.com/blog/nmap-commands> і <https://nmap.org/book/man-examples.html>
