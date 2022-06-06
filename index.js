const item_input = document.querySelector("#item-input")
const stock = document.querySelector("#stock")
const stockPile = document.querySelector(".pile")
const date = new Date().toLocaleDateString("en-US")

let inventory = [{
    item: "+5 Dexterity Vest",
    sell_in: 10,
    quality: 20,
    category: "none",
    date_added: date
},
{
    item: "Aged Brie",
    sell_in: 2,
    quality: 0,
    category: "Aged Brie",
    date_added: date
},
{
    item: "Elixir of the Mongoose",
    sell_in: 5,
    quality: 7,
    category: "none",
    date_added: date
},
{
    item: "Sulfuras, Hand of Ragnaros",
    sell_in: 0,
    quality: 80,
    category: "Sulfuras",
    date_added: date
},
{
    item: "Backstage passes to a TAFKAL80ETC concert",
    sell_in: 15,
    quality: 20,
    category: "Backstage Passes",
    date_added: date
},
{
    item: "Conjured Mana Cake",
    sell_in: 3,
    quality: 8,
    category: "Conjured",
    date_added: date
},
]

showInventory(inventory)

stock.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const item = {
        item: formData.get("item"),
        sell_in: formData.get("sell_in"),
        quality: formData.get("quality"),
        category: "none",
        date_added: formData.get("date_added"),
    }
    setCategory(item)
    qualityAssurance(item)
    inventory = [...inventory, item]
    return inventory
})

item_input.addEventListener("submit", (event) => {
    event.preventDefault()
    inventory.forEach(item => {
        // degradeQuality(item)
        qualityAssurance(item)
        sellByDate(item)
        showInventory(item)
    })
})

function showInventory() {
    stockPile.innerHTML = ``
    inventory.map(items => {
        const inventoryList = document.createElement("div")
        inventoryList.classList.add("inventory-list")
        inventoryList.innerHTML = ` 
            <h3> Item: ${items.item}</h3>
            <p> Sell In: ${items.sell_in}</p>
            <p> Quality: ${items.quality}</p>
            <p> Date Added: ${items.date_added}</p>
            <p> Category: ${items.category}</p>
            `
        return inventoryList
    }).forEach((inventoryList) => {
        stockPile.append(inventoryList)
    })
}

function sellByDate(inventory) {
    let sellBy = inventory.sellBy
    if (sellBy < 0) {
        return sellBy = 0
    } else {
        return sellBy
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




