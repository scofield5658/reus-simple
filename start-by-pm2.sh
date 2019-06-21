#!/bin/sh
CUR_DIR=$(cd "$(dirname "$0")";pwd)
cd $CUR_DIR

pm2 delete reus-simple-starter

REUS_PROJECT_ENV=prod REUS_PROJECT_DIR=${CUR_DIR} pm2 start ./node_modules/reus.js/bin/app.js -i 2 -n reus-simple-starter
