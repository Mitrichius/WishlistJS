document.addEventListener('DOMContentLoaded', function(event) { 
    let filters = document.getElementsByClassName('filter')
    let getParams = retrieveGetParameters()
    for (let filter of filters) {
        filter.addEventListener('click', function() {
            triggerFilter(filter)

        })
        let filterDirection = getFilterDirectionFromGetParams(filter.getAttribute('id'), getParams)
        if (filterDirection) {
            applyFilterDirection(filter, filterDirection)
        }
    }
    showItems()
    if (is_touch_device()) {
        var descriptionElements = document.getElementsByClassName('item_description_desktop')
        var propertiesElements = document.getElementsByClassName('item_properties_desktop')
    } else {
        var descriptionElements = document.getElementsByClassName('item_description_desktop')
        var propertiesElements = document.getElementsByClassName('item_properties_mobile')
    }

    Array.from(descriptionElements).forEach(function(element, index, array) {
        element.parentNode.removeChild(element)
    });

    Array.from(propertiesElements).forEach(function(element, index, array) {
        element.parentNode.removeChild(element)
    });

    if (data.config.description) {
        document.getElementsByClassName('description')[0].innerHTML = data.config.description
    }
})

function showItems() {
    // clone object
    let items = JSON.parse(JSON.stringify(data.items))
    let containerHtml = document.querySelector('.items')
    let elementWidth = 375
    let lineLength = Math.floor(window.innerWidth / elementWidth) - 1
    let getParams = retrieveGetParameters()

    sortItems(items, getParams)

    let archivedItems = []
    let counter = 0
    let properties = []
    let propertiesString = ''
    for (let i = 0; i < items.length; i++) {
        item = items[i]
        if (item['archived'] === 1 && data.config.show_archived !== 1) {
            continue
        }

        properties = []
        if (item['properties'] && Object.keys(item['properties']).length > 0) {
            item['properties'].forEach(function(property, index, array) {
                properties.push(property['key'] + ': ' + property['value'])
            });
        }
        propertiesString = properties.join('\n')

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
            properties="${propertiesString}"
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

    let placeholderItemsCount = Math.ceil(counter / lineLength) * lineLength - counter

    for (let i = 0; i < placeholderItemsCount; i++) {
        containerHtml.insertAdjacentHTML('beforeend', '<item-element class="hidden"/>')
    }
}

function is_touch_device() {
    return 'ontouchstart' in window
}

function retrieveGetParameters() {
    var prmstr = window.location.search.substr(1)
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {}
}

function transformToAssocArray(prmstr) {
    var params = {}
    var prmarr = prmstr.split("&")
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=")
        params[tmparr[0]] = tmparr[1]
    }
    return params
}

function getFilterDirectionFromGetParams(filterId, getParams) {
     if (
        typeof(getParams[filterId]) != "undefined" 
        && getParams[filterId] !== null
        && getParams[filterId] !== 'none'
    ) {
        return getParams[filterId]
    } else {
        return undefined;
    }
}

function sortItems(items, getParams) {
    let sortName = getFilterDirectionFromGetParams('sort-name', getParams)
    if (sortName) {
        sortItemsByName(items, sortName)
        return
    }
      
    items.sort(function(a, b) {
        a.priority = a.priority || 10000000000000
        b.priority = b.priority || 10000000000000
        return parseInt(a.priority) - parseInt(b.priority)
    })
}

function sortItemsByName(items, direction) {    
    if (direction == 'asc') {
        items.sort(function(a, b) {
            return a.name.localeCompare(b.name)
        })
    }
    if (direction == 'desc') {
        items.sort(function(a, b) {
            return b.name.localeCompare(a.name)
        })
    }
}

function triggerFilter(filter) {
    let currentDirection = filter.getAttribute('data-direction')
    let nextDirection = getNextDirection(currentDirection)
    applyFilterDirection(filter, nextDirection)
    document.getElementsByClassName('items')[0].innerHTML = ''
    showItems()
}

function applyFilterDirection(filter, direction) {
    filter.setAttribute('data-direction', direction)
    addGetParam(filter.getAttribute('id'), direction)
}

function getNextDirection(direction) {
    if (direction == 'asc') {
        return 'desc'
    }
    if (direction == 'desc') {
        return 'none'
    }
    return 'asc'
}

function addGetParam(key, value) {
    key = encodeURIComponent(key)
    value = encodeURIComponent(value)

    var keyValue = document.location.search.substr(1).split('&')
    let i = 0
    for (; i  < keyValue.length; i++) {
        if (keyValue[i].startsWith(key + '=')) {
            let pair = keyValue[i].split('=')
            pair[1] = value
            keyValue[i] = pair.join('=')
            break
        }
    }

    if (i >= keyValue.length) {
        keyValue[keyValue.length] = [key,value].join('=')
    }
    let params = keyValue.join('&')

    let newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + params
    window.history.pushState({ path: newUrl }, '', newUrl)
}