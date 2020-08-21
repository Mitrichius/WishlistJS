class ItemElement extends HTMLElement {
    constructor() {
        super();
        this.config = data.config
        this.htmlCode = ''
    }
    
    connectedCallback() {
        this.render()
        this.innerHTML = this.htmlCode
    }

    appendHtml(htmlCode) {
        this.htmlCode += htmlCode
    }

    render() {        
        let imageCode = this.image 
            ? `<img class="item_image" src="${this.image}"/>` 
            : ''

        let nameCode = `<div class="item_name">${this.name}</div>`

        let priceCode = this.price 
            ? `<div class="item_price">${this.price} ${this.currency}</div>` 
            : ''

        let descriptionCodeDesktop = this.description
            ? ` <div class="item_description_desktop" title="${this.description}"><img src="src/images/info-icon.png" height="25px" /></div>`
            : ''

        let descriptionCodeMobile = this.description
            ? ` <div class="item_description_mobile">${this.description}</div>`
            : ''

        if (this.url) {
            imageCode = `<a href="${this.url}"/><div class="item_image_container">${imageCode}${priceCode}${descriptionCodeDesktop}</div></a>`
            nameCode = `<div class="item_name"><a href="${this.url}"/>${this.name}</a></div>`
        }

        this.appendHtml(imageCode)
        
        this.appendHtml('<div class="item_info_container">')
        this.appendHtml(nameCode)
        this.appendHtml(descriptionCodeMobile)
        this.appendHtml('</div>')

        if (this.tags) {
            this.appendHtml('<div class="item_tags">')
            this.appendHtml(this.tags.map(tag => `<a class="item_tag" href="#">#${tag.trim()}</a>`).join(''))
            this.appendHtml('</div>')
        }

        if (this.date) {
            this.appendHtml(`<div class="item_date">${this.date}</div>`)
        }
    }
    
    get name() {
        return this.getAttribute('name') !== 'undefined' 
            ? this.getAttribute('name') 
            : undefined;
    }

    get description() {
        return this.getAttribute('description') !== 'undefined' 
            ? this.getAttribute('description') 
            : undefined;
    }

    get price() {
        return this.getAttribute('price') !== 'undefined' 
            ? this.getAttribute('price') 
            : undefined;
    }

    get image() {
        let image = this.getAttribute('image')
        return (image !== 'undefined')
            ? image 
            : this.config.image_default;
    }

    get tags() {
        let tags = this.getAttribute('tags')
        return tags !== 'undefined' && tags 
            ? tags.split(',') 
            : undefined;
    }

    get url() {
        return this.getAttribute('url') !== 'undefined' 
            ? this.getAttribute('url') 
            : undefined;
    }

    get date() {
        return this.getAttribute('date') !== 'undefined' 
            ? this.getAttribute('date') 
            : undefined;
    }

    get currency() {
        return this.getAttribute('currency') !== 'undefined' 
            ? this.getAttribute('currency') 
            : this.config.currency_default;
    }
}

if ('customElements' in window) {
    customElements.define('item-element', ItemElement);
}
