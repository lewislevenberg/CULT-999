#!/bin/bash

# script to determine IP addresses per CIDR block 
# in a given list of CIDR blocks.
# format of input files: one CIDR block per line
# uses nmap

input_file=""
if [ $# -gt 0 ]; then
  input_file=$1
fi

nmap_breakdown() {
	nmap -sL $line | grep "Nmap scan report" | awk '{print $NF}'
}

while read line; do
	nmap_breakdown
done < $1
