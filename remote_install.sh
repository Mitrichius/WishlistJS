#!/usr/bin/env bash

function install_selfhosted 
{
    git init
    git submodule add -b submodule https://github.com/mitrichius/wishlist.git src
    cp -R src/exampleSite/* ./
    ln -s src/index.html index.html
}

function install_netlify
{
    git init
    git submodule add -b submodule https://github.com/mitrichius/wishlist.git src
    cp -R src/exampleSite/* ./
    rm -rf ./src
}

echo -n 'Choose deployment type:
1) Selfhosted
2) Netlify
'
read type
case $type in
    1)
        install_selfhosted
        ;;
    2)
        install_netlify
        ;;
    *) 
        echo "Invalid type $REPLY"
        ;;
esac
