#! /usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');

var version;


fs.readFile('./package.json', 'utf8', parseVersion);


function parseVersion(err, response) {
    if (err) {
        console.log();
    }

    var pkg = JSON.parse(response);

    if ( !pkg.version ) {
        throw 'Could not read version from package.json. Is the file correctly formatted?';
    }

    console.log('Current version is', pkg.version);
}
