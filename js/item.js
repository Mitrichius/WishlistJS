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
        let imageCode = this.image ? `<img class="item_image" src="${this.image}"/>` : ''
        let nameCode = `<div class="item_name">${this.name}</div>`

        if (this.url) {
            imageCode = `<a href="${this.url}"/>${imageCode}</a>`
            nameCode = `<a href="${this.url}"/>${nameCode}</a>`
        }

        this.appendHtml(imageCode)
        this.appendHtml('<div class="item_info">')
        this.appendHtml(nameCode)
        
        if (this.price) {
            this.appendHtml(`<div class="item_price">${this.price} ${this.currency}</div>`)
        }

        if (this.tags) {
            this.appendHtml('<div class="item_tags">')
            this.appendHtml(this.tags.map(tag => `<a class="item_tag" href="#">#${tag.trim()}</a>`).join(''))
            this.appendHtml('</div>')
        }

        if (this.date) {
            this.appendHtml(`<div class="item_date">${this.date}</div>`)
        }

        this.appendHtml('</div>')   
    }
    
    get name() {
        return this.getAttribute('name') !== 'undefined' 
            ? this.getAttribute('name') 
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
