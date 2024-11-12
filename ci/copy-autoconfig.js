/* add thunderbird autoconfig xml to dist directory */
const fs = require('fs');

fs.mkdir('dist/.well-known/autoconfig/mail', {recursive: true}, (err) => {
   if (err) throw err;
   console.log("dir created");
});

// fs.readdir('.', (err, files) => {
//     files.forEach(file => {
//         console.log(file);
//     });
// });

fs.copyFile('./autoconfig.xml', 'dist/.well-known/autoconfig/mail/config-v1.1.xml', (err) => {
    if (err) throw err;
    console.log("Copied!");
});
