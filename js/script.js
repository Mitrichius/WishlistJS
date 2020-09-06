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
    if (data.config.description) {
        document.getElementsByClassName('common-header')[0].innerHTML = '<div class="description">' + data.config.description + '</div>'
    }
})

function showItems() {
    let items = data.items
    let containerHtml = document.querySelector('.items')
    let lineLength = 4

    items.sort(function(a, b) {
        a.priority = a.priority || 10000000000000
        b.priority = b.priority || 10000000000000
        return parseInt(a.priority) - parseInt(b.priority);
    });

    let archivedItems = []
    let counter = 0
    for (let i = 0; i < items.length; i++) {
        item = items[i]
        if (item['archived'] === 1 && data.config.show_archived !== 1) {
            continue
        }

        let archivedClassName = item['archived'] === 1 ? 'archived' : ''
        let itemCode = `<item-element class="${archivedClassName}"
            name="${item['name']}" 
            description="${item['description']}"
            price="${item['price']}" 
            currency="${item['currency']}" 
            image="${item['image']}" 
            tags="${item['tags']}" 
            url="${item['url']}" 
            date="${item['date']}"
            multi="${item['multi']}"
        />`
        
        if (item['archived'] === 1) {
            archivedItems.push(itemCode)
            continue
        }
        containerHtml.insertAdjacentHTML('beforeend', itemCode)
        counter++
    }

    for (let i = 0; i < archivedItems.length; i++) {
        containerHtml.insertAdjacentHTML('beforeend', archivedItems[i])
        counter++
    }

    let placeholderItemsCount = Math.ceil(counter / 4) * lineLength - counter

    for (let i = 0; i < placeholderItemsCount; i++) {
        containerHtml.insertAdjacentHTML('beforeend', '<item-element class="hidden"/>')
    }
}

function is_touch_device() {
    return 'ontouchstart' in window;
}
