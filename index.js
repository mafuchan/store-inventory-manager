const form = document.querySelector("#item-input")
const stock = document.querySelector("#stock")
const stockPile = document.querySelector(".pile")
const date = new Date().toLocaleDateString("en-US")

let inventory = [{
    name: "+5 Dexterity Vest",
    sell_in: 10,
    quality: 20,
    category: "none",
    date_added: date
},
{
    name: "Aged Brie",
    sell_in: 2,
    quality: 0,
    category: "Aged Brie",
    date_added: date
},
{
    name: "Elixir of the Mongoose",
    sell_in: 5,
    quality: 7,
    category: "none",
    date_added: date
},
{
    name: "Sulfuras, Hand of Ragnaros",
    sell_in: 0,
    quality: 80,
    category: "Sulfuras",
    date_added: date
},
{
    name: "Backstage passes to a TAFKAL80ETC concert",
    sell_in: 15,
    quality: 20,
    category: "Backstage Passes",
    date_added: date
},
{
    name: "Conjured Mana Cake",
    sell_in: 3,
    quality: 8,
    category: "Conjured",
    date_added: date
},
]

showInventory(inventory)

form.addEventListener("submit", event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const item = {
        name: formData.get("item"),
        sell_in: +formData.get("sell_in"),
        quality: +formData.get("quality"),
        date_added: date,
    }
    inventory = [...inventory, item]
    checkCategory(item)
    qualityCheck(item)
    showInventory(item)
})

stock.addEventListener("click", event => {
    event.preventDefault()
    inventory.forEach(item => {
        
        qualityAssurance(item)
        qualityCheck(item)
        sellByDate(item)
        showInventory(item)
    })
})

function showInventory() {
    stockPile.innerHTML = ``
    inventory.map(item => {
        const inventoryList = document.createElement("div")
        inventoryList.classList.add("inventory-list")
        inventoryList.innerHTML = ` 
            <h3> Item: ${item.name}</h3>
            <p> Sell In: ${item.sell_in}</p>
            <p> Quality: ${item.quality}</p>
            <p> Date Added: ${item.date_added}</p>
            <p> Category: ${item.category}</p>
            `
        return inventoryList
    }).forEach((inventoryList) => {
        stockPile.append(inventoryList)
    })
}

function checkCategory(item) {
    if (item.name.includes("Aged Brie") || item.name.includes("aged brie")) {
        item.category = "Aged Brie"
    } else if (item.name.includes("Sulfuras") || item.name.includes("sulfuras")) {
        item.category = "Sulfuras"
    } else if (item.name.includes("Backstage") || item.name.includes("backstage")) {
        item.category = "Backstage passes"
    } else if (item.name.includes("Conjured") || item.name.includes("conjured")) {
        item.category = "Conjured"
    } else {
        item.category = "none"
    }
    return item
}

function sellByDate(item) {
     if (item.category === "Sulfuras") {
        return item.sell_in = ${item.sell_in}
    } else if (item.sell_in > 0) {
        return item.sell_in = item.sell_in - 1
    }
}

function qualityCheck(item) {
     if (item.category === "Sulfuras") {
        return item.quality = 80
    } else if (item.category === "Aged Brie" && item.quality < 50) {
        return item.quality
    } else if (item.category === "Backstage passes" && item.quality < 50) {
        return item.quality
    } else if (item.quality > 50) {
        return item.quality = 50
    } else if (item.quality <= 0) {
        return item.quality = 0
    } else {
        return item.quality
    }
}

function qualityAssurance(item) {
    if (item.category === "Sulfuras") {
        return item.quality = 80
    } else if (item.category === "Conjured") {
        return item.quality -= 2
    } else if (item.category === "Backstage passes" && item.sellIn === 0) {
        return item.quality = 0
    } else if (item.category === "Backstage passes" && item.sellIn > 10) {
        return item.quality = item.quality + 1
    } else if (item.category === "Backstage passes" && item.sellIn <= 10 && item.sellIn > 5) {
        return item.quality = item.quality + 2
    } else if (item.category === "Backstage passes" && item.sellIn <= 5) {
        return item.quality = item.quality + 3
    } else if (item.category === "Aged Brie") {
        return item.quality = item.quality + 1
    } else if (item.sellIn <= 0) {
        return item.quality -= 2
    } else {
        return item.quality -= 1
    }
}