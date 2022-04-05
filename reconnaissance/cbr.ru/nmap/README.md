# cbr.ru nmap on 05.04.2022

## The most popular ports

```
Starting Nmap 7.92 ( https://nmap.org ) at 2022-04-05 13:21 EDT
Nmap scan report for ddos-guard.net (185.178.208.7)
Host is up (0.0094s latency).
Not shown: 28 filtered tcp ports (no-response)
PORT    STATE SERVICE
80/tcp  open  http
443/tcp open  https

Nmap done: 1 IP address (1 host up) scanned in 1.81 seconds
```

## All reserved `TCP` ports

```
Starting Nmap 7.92 ( https://nmap.org ) at 2022-04-05 13:25 EDT
Initiating Ping Scan at 13:25
Scanning cbr.ru (185.178.208.7) [4 ports]
Completed Ping Scan at 13:25, 0.03s elapsed (1 total hosts)
Initiating Parallel DNS resolution of 1 host. at 13:25
Completed Parallel DNS resolution of 1 host. at 13:25, 0.24s elapsed
Initiating SYN Stealth Scan at 13:25
Scanning cbr.ru (185.178.208.7) [1000 ports]
Discovered open port 443/tcp on 185.178.208.7
Increasing send delay for 185.178.208.7 from 0 to 5 due to 11 out of 14 dropped probes since last increase.
Increasing send delay for 185.178.208.7 from 5 to 10 due to 11 out of 11 dropped probes since last increase.
Increasing send delay for 185.178.208.7 from 10 to 20 due to 11 out of 11 dropped probes since last increase.
Discovered open port 1083/tcp on 185.178.208.7
Discovered open port 27353/tcp on 185.178.208.7
Discovered open port 9535/tcp on 185.178.208.7
Discovered open port 1001/tcp on 185.178.208.7
Discovered open port 2179/tcp on 185.178.208.7
Discovered open port 9000/tcp on 185.178.208.7
Discovered open port 6100/tcp on 185.178.208.7
Discovered open port 44443/tcp on 185.178.208.7
Discovered open port 4005/tcp on 185.178.208.7
SYN Stealth Scan Timing: About 65.77% done; ETC: 13:26 (0:00:31 remaining)
Discovered open port 50002/tcp on 185.178.208.7
Discovered open port 1175/tcp on 185.178.208.7
Discovered open port 8654/tcp on 185.178.208.7
Discovered open port 4444/tcp on 185.178.208.7
Discovered open port 7938/tcp on 185.178.208.7
Discovered open port 1050/tcp on 185.178.208.7
Discovered open port 65000/tcp on 185.178.208.7
Discovered open port 1024/tcp on 185.178.208.7
Discovered open port 1037/tcp on 185.178.208.7
Discovered open port 8291/tcp on 185.178.208.7
Discovered open port 3333/tcp on 185.178.208.7
Discovered open port 1174/tcp on 185.178.208.7
Discovered open port 1119/tcp on 185.178.208.7
Discovered open port 5566/tcp on 185.178.208.7
Discovered open port 3017/tcp on 185.178.208.7
Discovered open port 9666/tcp on 185.178.208.7
Discovered open port 1028/tcp on 185.178.208.7
Discovered open port 9/tcp on 185.178.208.7
Discovered open port 500/tcp on 185.178.208.7
Discovered open port 54328/tcp on 185.178.208.7
Discovered open port 1000/tcp on 185.178.208.7
Discovered open port 61900/tcp on 185.178.208.7
Discovered open port 80/tcp on 185.178.208.7
SYN Stealth Scan Timing: About 75.90% done; ETC: 13:27 (0:00:32 remaining)
Completed SYN Stealth Scan at 13:27, 128.24s elapsed (1000 total ports)
Nmap scan report for cbr.ru (185.178.208.7)
Host is up (0.0043s latency).
rDNS record for 185.178.208.7: ddos-guard.net
Not shown: 967 filtered tcp ports (no-response)
PORT      STATE SERVICE
9/tcp     open  discard
80/tcp    open  http
443/tcp   open  https
500/tcp   open  isakmp
1000/tcp  open  cadlock
1001/tcp  open  webpush
1024/tcp  open  kdm
1028/tcp  open  unknown
1037/tcp  open  ams
1050/tcp  open  java-or-OTGfileshare
1083/tcp  open  ansoft-lm-1
1119/tcp  open  bnetgame
1174/tcp  open  fnet-remote-ui
1175/tcp  open  dossier
2179/tcp  open  vmrdp
3017/tcp  open  event_listener
3333/tcp  open  dec-notes
4005/tcp  open  pxc-pin
4444/tcp  open  krb524
5566/tcp  open  westec-connect
6100/tcp  open  synchronet-db
7938/tcp  open  lgtomapper
8291/tcp  open  unknown
8654/tcp  open  unknown
9000/tcp  open  cslistener
9535/tcp  open  man
9666/tcp  open  zoomcp
27353/tcp open  unknown
44443/tcp open  coldfusion-auth
50002/tcp open  iiimsf
54328/tcp open  unknown
61900/tcp open  unknown
65000/tcp open  unknown

Read data files from: /usr/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 128.92 seconds
           Raw packets sent: 4036 (177.212KB) | Rcvd: 129 (5.456KB)
```
