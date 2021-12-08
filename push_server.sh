#!/bin/bash
dir="/var/www/moiworking.com/"
#ssht+="sudo rm -Rf build"
ssht+=" unzip build.zip"
ssht+=" && sudo chown -R ubuntu.ubuntu ${dir}"
ssht+=" && sudo rm -Rf ${dir}/*"
ssht+=" && sudo mv build/* ${dir}/"
ssht+=" && sudo chown -R www-data.www-data ${dir}"
ssht+=" && rm -Rf build/"
ssht+=" && rm build.zip"
ssht+=" && sudo cp ~/.htaccess ${dir}"
ssht+=" && sudo chmod -R 777 ${dir}public/"

npm run-script build
rm build.zip
zip -r build.zip build/*
scp -i /Users/gux3/aws-moises.pem build.zip ubuntu@3.135.79.164:/home/ubuntu/
ssh -t -i /Users/gux3/aws-moises.pem ubuntu@3.135.79.164 "$ssht"