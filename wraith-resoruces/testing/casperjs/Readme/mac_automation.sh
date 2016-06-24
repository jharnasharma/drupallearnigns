#!/bin/bash
# This script will check phantomJs-casperJs is installed or not, and will run the test suite respectively

echo "Checking if CasperJS is installed or not."
#whereis casperjs
if which casperjs >/dev/null; then
   echo -e "Casperjs is already installed now running the automation script"
   casperjs test --ignore-ssl-errors=true ../Test_Scenarios/About_CGU.js
   casperjs test ../Test_Scenarios/About_CGU.js --xunit=report.xml
else
    echo -e "Casper JS does not exist installing it now"
brew install casperjs --devel
    echo -e "Everything looks good Now lets run the script"
    casperjs test --ignore-ssl-errors=true About_CGU.js
    casperjs test About_CGU.js --xunit=report.xml