#!/bin/sh

#server
rm ./project.db
deno run -A --watch server.js