# Інструкція

Після [creating AWS EC2 instance](https://docs.aws.amazon.com/efs/latest/ug/gs-step-one-create-ec2-resources.html) ви можете налаштувати, наприклад, екземпляр `Kali Linux`.

## Підключитися до AWS EC2

Ви можете зробити це, виконавши ці команди у вашому 'терміналі':
1. `chmod 400 path/to/your/key/filename.pem`
2. `ssh -i path/to/your/key/filename.pem ec2-user@xx.xx.xx.xx:22` (using `Public IPv4 address`) або `ssh -i path/to/your/key/filename.pem ec2-user@ec2-xx.xx.xx.xx.us-east-2.compute.amazonaws.com` (використання `Public IPv4 DNS`) і ви повинні бути в
3. альтернативно, ви можете використовувати `vim ~/.ssh/config` а потім налаштуйте `SSH Config File`:
```
Host ec2
  Hostname ec2-xx.xx.xx.xx.us-east-2.compute.amazonaws.com
  user kali
  IdentityFile path/to/your/key/filename.pem
```
з підключенням за допомогою `ssh ec2` відразу з вашого "терміналу".
