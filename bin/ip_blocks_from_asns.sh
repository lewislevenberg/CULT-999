#!/bin/bash

# script to determine IP address blocks in a given list of ASNs.
# Give one argument, the path to a file formatted with one ASN per line.
# Queries are made against the RADB database, following notes at:
# http://www.radb.net/support/query2.php

input_file=""
if [ $# -gt 0 ]; then
  input_file=$1
fi

radb_lookup() {
	whois -h whois.radb.net "!g$line" | grep -Eo "([0-9.]+){4}/[0-9]+"
}

while read line; do
	radb_lookup
done < $1
