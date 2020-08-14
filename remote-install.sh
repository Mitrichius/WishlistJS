#!/usr/bin/env bash

git init
git submodule add https://github.com/mitrichius/WishlistJS.git src
cp -R src/exampleSite/. ./
ln -s src/index.html index.html
ln -s src/favicon.png favicon.png
