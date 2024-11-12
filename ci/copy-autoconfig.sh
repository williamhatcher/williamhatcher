#!/bin/sh

mkdir -p $GITHUB_WORKSPACE/dist/.well-known/autocnfig/mail
ls $GITHUB_WORKSPACE

cp $GITHUB_WORKSPACE/autoconfig.xml $GITHUB_WORKSPACE/dist/.well-known/autocnfig/mail/config-v1.1.xml
