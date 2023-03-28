#!/bin/sh

if [ $# -gt 1 ] ; then
docker build -t dropseek:$1 -t  dropseek:latest  .
else
docker build -t  dropseek:latest  .
fi