class ItemElement extends HTMLElement {
	constructor() {
        super();
        this.config = data.config
    }
    
	connectedCallback() {
		this.render();
    }

    render() {
        // TODO: проверка на name

        let htmlCode = ''
        let imageUrl = this.config.image_default
        let imageCode = ''

        if (this.image !== 'undefined' && this.image) {
            imageUrl = this.image
        }
        imageCode += `<img class="item_image" src="${imageUrl}"/>`

        if (this.url !== 'undefined' && this.url) {
            htmlCode += `<a href="${this.url}"/>${imageCode}</a>`
        } else {
            htmlCode += imageCode
        }

        htmlCode += '<div class="item_info">'
        
        let nameCode = `<div class="item_name">${this.name}</div>`
        if (this.url !== 'undefined' && this.url) {
            htmlCode += `<a href="${this.url}"/>${nameCode}</a>`
        } else {
            htmlCode += nameCode
        }

        if (this.price !== 'undefined' && this.price) {
            let currency = this.currency !== 'undefined' ? this.currency : this.config.currency_default
            htmlCode += `<div class="item_price">${this.price} ${currency}</div>`
        }

        if (this.tags !== 'undefined' && this.tags) {
            let tags = this.tags.split(',')
            htmlCode += '<div class="item_tags">'
            for (let i = 0; i < tags.length; i++) {
                htmlCode += `<a class="item_tag" href="#">#${tags[i].trim()}</a>`
            }
            htmlCode += '</div>'
        }

        if (this.date !== 'undefined' && this.date) {
            htmlCode += `<div class="item_date">${this.date}</div>`
        }

        htmlCode += '</div>'
        
		this.innerHTML = htmlCode;
    }
    
    get name() {
        return this.getAttribute('name');
    }

    get price() {
        return this.getAttribute('price');
    }

    get image() {
        return this.getAttribute('image');
    }

    get tags() {
        return this.getAttribute('tags');
    }

    get url() {
        return this.getAttribute('url');
    }

    get date() {
        return this.getAttribute('date');
    }

    get currency() {
        return this.getAttribute('currency');
    }
}

if ('customElements' in window) {
	customElements.define('item-element', ItemElement);
}
