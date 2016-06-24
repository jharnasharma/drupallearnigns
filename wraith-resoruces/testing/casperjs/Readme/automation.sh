#!/bin/bash
# This script will check phantomJs-casperJs is installed or not, and will run the test suite respectively

echo "Checking if CasperJS is installed or not."
#whereis casperjs
if which casperjs >/dev/null; then
    echo -e "Casperjs is installed now running the automation script"
    casperjs test --ignore-ssl-errors=true ../Test_Scenarios/About_CGU.js
    casperjs test ../Test_Scenarios/Feedback.js --xunit=report.xml
else
	echo -e "Casper JS does not exist installing it now"
#		if [[ $EUID -ne 0 ]]; then
#			echo "This script must be run as root" 1>&2
#		exit 1
#		fi
	PHANTOM_VERSION="phantomjs-1.9.8"
	ARCH=$(uname -m)
	if ! [ $ARCH = "x86_64" ]; then
		$ARCH="i686"
	fi
	PHANTOM_JS="$PHANTOM_VERSION-linux-$ARCH"
	sudo apt-get update
	sudo apt-get install build-essential chrpath libssl-dev libxft-dev -y
	sudo apt-get install libfreetype6 libfreetype6-dev -y
	sudo apt-get install libfontconfig1 libfontconfig1-dev -y
	cd ~
	wget https://bitbucket.org/ariya/phantomjs/downloads/$PHANTOM_JS.tar.bz2
	sudo tar xvjf $PHANTOM_JS.tar.bz2
	sudo mv $PHANTOM_JS /usr/local/share
	sudo ln -sf /usr/local/share/$PHANTOM_JS/bin/phantomjs /usr/local/bin

	echo "Phantom JS has sucessfully installed now installing casperJS"
	git clone git://github.com/n1k0/casperjs.git
	cd casperjs
	sudo ln -sf `pwd`/bin/casperjs /usr/local/bin/casperjs
	echo -e "Everything looks good Now lets run the script"
	casperjs test --ignore-ssl-errors=true About_CGU.js
	casperjs test Feedback.js --xunit=report.xml
fi
