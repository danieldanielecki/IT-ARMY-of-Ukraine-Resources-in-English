# Maltego

That's the tool for exploration https://www.maltego.com.
It's free, with limitations to 12 records per searched category, and certain date.

## Other WWW-based tools

1. https://whois.domaintools.com - basic information about the owner of the target.
2. https://sitereport.netcraft.com - technologies used by the target.
3. https://www.robtex.com - comprehensive information about the target. The `search` functionality doesn't work by showing `404` on each query. Apply it directly from the URL, for example, `https://www.robtex.com/dns-lookup/cbr.ru`, then change the `cbr.ru` to your desired target. Some more detailed sections require you to log in with `Google` Single Sign On (SSO).

## Knockpy

Discover subdomains using https://github.com/guelfoweb/knock by running `knockpy [domain]`, e.g., `knockpy cbr.ru`

## recon-ng

Discover hosts using `recon-ng`, built in `Kali Linux`, required steps:

1. `Kali Linux`
2. `recon-ng`
3. `marketplace install all`
4. `db insert domains`
5. `[domain]`, e.g., `cbr.ru`
6. `modules load recon/domains-hosts/hackertarget`
7. `options set SOURCE default`
8. `run`

Based on https://medium.com/@bibinrajbs/using-recon-ng-in-kali-2020-cc76aa3a4a6d

## https://github.com/m0rtem/CloudFail
