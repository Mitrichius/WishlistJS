document.addEventListener("DOMContentLoaded", function(event) { 
    showItems()
    if (is_touch_device()) {
        var descriptionElements = document.getElementsByClassName('item_description_desktop')
    } else {
        var descriptionElements = document.getElementsByClassName('item_description_mobile')
    }
    for (let element of descriptionElements) {
        element.style.display = 'none'
    }
})

function showItems() {
    let items = data.items
    let containerHtml = document.querySelector('.items')
    let lineLength = 4

    while (items.length > 0) {
        for (let i = 0; i < lineLength; i++) {
            item = items.shift()
            if (item !== undefined) {
                if (item['archived'] === 1) {
                    continue
                }
                containerHtml.insertAdjacentHTML('beforeend', `
                <item-element 
                    name="${item['name']}" 
                    description="${item['description']}"
                    price="${item['price']}" 
                    currency="${item['currency']}" 
                    image="${item['image']}" 
                    tags="${item['tags']}" 
                    url="${item['url']}" 
                    date="${item['date']}"
                />`)
            } else {
                containerHtml.insertAdjacentHTML('beforeend', '<item-element class="hidden"/>')
            }
        }
    }
}

function is_touch_device() {
    return 'ontouchstart' in window;
}
