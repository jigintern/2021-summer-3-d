#!/bin/sh

#client
cd client
npm run build

cd ..
rm -r static

cp -r ./client/dist ./static

#server
./server.sh