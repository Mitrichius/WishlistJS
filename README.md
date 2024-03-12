# Wishlist [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Wishlist — small pure JS page/application for making public wishlist.  

[Demo](https://wishlistjs-demo.mitrich.me/)  

<p align="center">
    <img src="https://raw.githubusercontent.com/Mitrichius/WishlistJS/master/images/screenshot.png" height="300px">
</p>

## Features
- Easy handling of items — no databases, just JSON config
- Mobile support
- Multicurrency price
- Item description
- Multi-gift flag
- Items archivation
- Show archived items if needed

## Installation
It's a static html-page with JS/CSS so all you need is some web-server, e.g. [nginx](https://github.com/Mitrichius/WishlistJS/blob/master/nginx.conf) or cloud solutions like Netlify or Github Pages.

## Getting started
Create new directory for project and open it:
```
mkdir wishlist
cd wishlist
```

Run install script:  
```
bash -c "`curl -fsSL https://raw.github.com/mitrichius/WishlistJS/master/remote-install.sh`"  
```

After it fill in `data.js` file with your wished items.  
Target your webserver to `index.html` or just open it in browser.  

### Config (data.js)

#### Config section
- `image-default` — default image for items 
- `currency_default` — default currency suffix to price value
- `description` - optional html code on top of the page (header)
- `show_archived` (0/1) - show archived items (with opacity and text strikethrough)

#### Items section
All parameters except `name` are optional.
- `name`
- `description`
- `price` (just number)
- `currency`
- `tags` (array)
- `url` 
- `image`
- `date`
- `archived` (0 - not archived, 1 - archived)
- `priority` - for additional sorting, ASC-order
- `multi` - show that item can be gifted several times
- `properties` - array of objects with "key" and "value" keys
```
"properties": [
    {
        "key": "Size",
        "value": "M"
    }
]
```

### Deploy

#### Selfhosted 
Just rsync your directory to the server and configure webserver to this path:  
`rsync -vrzl --delete ./ <server_name>:/var/www`  

[Nginx config](https://github.com/Mitrichius/WishlistJS/blob/master/nginx.conf)

#### Netlify 
Push your directory to new repository on Github (it could be private).  
Go to Netlify and connect this repository. Config already included.  

## Get app's new version and features
Run this command in your repo: 
`git submodule update --init --remote`

## Contributing
If you find a bug or have an idea for a feature, feel free to write an issue or make a PR.

## TODO
See [issues](https://github.com/Mitrichius/WishlistJS/issues).

## Credits
Icons are provided by [Icons8](https://icons8.com):
- [wish List](https://icons8.com/icons/set/wish-list)
- [info](https://icons8.com/icons/set/info) 
- [infinity](https://icons8.com/icons/set/infinity--v2)
- [properties](https://icons8.com/icons/set/add-property-1)

## License
MIT  
© Dmitry Kolosov 2020
