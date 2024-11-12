#!/usr/bin/env node

/* add thunderbird autoconfig xml to dist directory */
const fs = require('fs');
const path = require('path');
const autoconfigPath = path.join(__dirname, '../autoconfig.xml');

console.log("Creating dir");
fs.mkdir(path.join(__dirname, '../dist/.well-known/autoconfig/mail'), {recursive: true}, (err) => {
  if (err) throw err;
  console.log("dir created");
});

console.log("Listing files");
fs.readdir('.', (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});

console.log("Copying autoconfig");
fs.copyFile(autoconfigPath, path.join(__dirname,'../dist/.well-known/autoconfig/mail/config-v1.1.xml'), (err) => {
  if (err) throw err;
  console.log("Copied!");
});
