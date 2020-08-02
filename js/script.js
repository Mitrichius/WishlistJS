document.addEventListener("DOMContentLoaded", function(event) { 
    showItems()
})

function showItems() {
    let items = data.items
    let containerHtml = document.querySelector('.items')
    let lineLength = 4

    while (items.length > 0) {
        for (let i = 0; i < lineLength; i++) {
            item = items.shift()
            if (item !== undefined) {
                containerHtml.insertAdjacentHTML('beforeend', `
                <item-element 
                    name="${item['name']}" 
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