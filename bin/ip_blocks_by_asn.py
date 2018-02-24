# Based on script by Tomas Wolf at https://superuser.com/a/1072705
# Update hardcoded filenames for input and output below as needed
# or refactor to take arguments for input / output.
# uses ipinfo.io for IP block queries
import requests
from bs4 import BeautifulSoup
import re


url_base = 'http://ipinfo.io/'
as_base = 'AS'

output = open('ip_per_asn.csv', 'w')
with open('asns.txt') as f:
    lines = f.read().splitlines()
    for asn in lines:
        ASN = as_base + asn
        page = requests.get(url_base+ASN)
        html_doc = page.content
        soup = BeautifulSoup(html_doc, 'html.parser')
        for link in soup.find_all('a'):
            if asn in link.get('href'):
                auxstring = '/'+as_base+asn+'/'
                line = re.sub(auxstring, '', link.get('href'))
                printstring = asn+','+line+'\n'
                if 'AS' not in printstring:
                    output.write(printstring)
        print asn+'\n'

print 'script finished'
