#!/bin/sh

#client
cd client
npm run build

cd ..
rm -rf static

cp -r ./client/dist ./static

#server
sh ./server.sh