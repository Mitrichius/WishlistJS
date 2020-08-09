# Wishlist [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT) [![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.com/paypalme/mitrichius/1)

Wishlist — small JS page/application for making public wishlist. MVP stage.

<img src="https://raw.githubusercontent.com/Mitrichius/wishlist/master/images/screenshot-web.png" height="300px"> <img src="https://raw.githubusercontent.com/Mitrichius/wishlist/master/images/screenshot-mobile.png" height="300px">

## Features
- Easy handling of items — no databases, just JSON config
- Customizing via CSS

## Installation
It's a static html-page with JS/CSS so all you need is some web-server, e.g. [nginx](https://github.com/Mitrichius/wishlist/blob/master/nginx.conf).

## Getting started
Create new directory for project and initialize git repository:
```
mkdir wishlist
cd wishlist
git init
```

Run these commands within directory: 
```
git submodule add https://github.com/mitrichius/wishlist.git src
ln -s src/index.html index.html
cp src/js/data.dist.js data.js
```
After it fill in `data.js` file with your wished items.  
Target your webserver to `index.html` and you're ready to go!

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

## Contributing
If you find a bug or have an idea for a feature, feel free to write an issue or make a PR.

## TODO
See [issues](https://github.com/Mitrichius/wishlist/issues).

## Credits
[Wish List icon](https://icons8.com/icons/set/wish-list) icon by [Icons8](https://icons8.com)

## License
MIT  
© Dmitry Kolosov 2020