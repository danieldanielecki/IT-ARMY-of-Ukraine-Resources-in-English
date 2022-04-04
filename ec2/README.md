# Instruction

After [creating AWS EC2 instance](https://docs.aws.amazon.com/efs/latest/ug/gs-step-one-create-ec2-resources.html) you can set up, for example `Kali Linux` instance.

## Connect to AWS EC2

You can do it by executing these commands in your `terminal`:
1. `chmod 400 path/to/your/key/filename.pem`
2. `ssh -i path/to/your/key/filename.pem ec2-user@xx.xx.xx.xx:22` (using `Public IPv4 address`) or `ssh -i path/to/your/key/filename.pem ec2-user@ec2-xx.xx.xx.xx.us-east-2.compute.amazonaws.com` (using `Public IPv4 DNS`) and you should be in
3. Alternatively, you can use `vim ~/.ssh/config` and then set up the `SSH Config File`:
```
Host ec2
  Hostname ec2-xx.xx.xx.xx.us-east-2.compute.amazonaws.com
  user kali
  IdentityFile path/to/your/key/filename.pem
```
with connecting by using `ssh ec2` straight away from your `terminal`.
