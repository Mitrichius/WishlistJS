# Wishlist [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT) [![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.com/paypalme/mitrichius/1)

Wishlist — small JS page/application for making public wishlist. MVP stage.

<img src="https://raw.githubusercontent.com/Mitrichius/wishlist/master/images/screenshot-web.png" height="300px"> <img src="https://raw.githubusercontent.com/Mitrichius/wishlist/master/images/screenshot-mobile.png" height="300px">

## Features
- Easy handling of items — no databases, just JSON config
- Customizing via CSS

## Installation
It's a static html-page with JS/CSS so all you need is some web-server, e.g. [nginx](https://github.com/Mitrichius/wishlist/blob/master/nginx.conf) or cloud solutions like Netlify or Github Pages.

## Getting started
Create new directory for project and open it:
```
mkdir wishlist
cd wishlist
```

Run install script:  
```
bash -c "`curl -fsSL https://raw.github.com/mitrichius/wishlist/submodule/remote-install.sh`"  
```

After it fill in `data.js` file with your wished items.  
Target your webserver to `index.html` or just open it in browser.  

### Config (data.js)

#### Config section
- `image-default` — defatul image for items 
- `currency_default` — default currency suffix to price value

#### Items section
All items except `name` are optional.
- `name`
- `price` (just number)
- `currency`
- `tags` (array)
- `url` 
- `image`
- `date`

### Deploy

#### Selfhosted 
Just rsync your directory to the server and configure webserver to this path:  
`rsync -vrzl --delete ./<wishlist_directory>/* <server_name>:<path_to_webserver_dir>`  

[Nginx config](https://github.com/Mitrichius/wishlist/blob/master/nginx.conf)

#### Netlify 
Push your directory to new repository on Github (it could be private).  
Go to Netlify and connect this repository. Config already included.  

## Contributing
If you find a bug or have an idea for a feature, feel free to write an issue or make a PR.

## TODO
See [issues](https://github.com/Mitrichius/wishlist/issues).

## Credits
[Wish List icon](https://icons8.com/icons/set/wish-list) icon by [Icons8](https://icons8.com)

## License
MIT  
© Dmitry Kolosov 2020
