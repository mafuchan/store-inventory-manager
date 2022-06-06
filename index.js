const item_input = document.querySelector("#item-input")
const stock = document.querySelector("#stock")
const stockPile = document.querySelector(".pile")
const date = new Date().toLocaleDateString("en-US")

let inventory = [{
    item: "+5 Dexterity Vest",
    sell_in: 10,
    quality: 20,
    category: "none",
    date_added: today
},
{
    item: "Aged Brie",
    sell_in: 2,
    quality: 0,
    category: "Aged Brie",
    date_added: today
},
{
    item: "Elixir of the Mongoose",
    sell_in: 5,
    quality: 7,
    category: "none",
    date_added: today
},
{
    item: "Sulfuras, Hand of Ragnaros",
    sell_in: 0,
    quality: 80,
    category: "Sulfuras",
    date_added: today
},
{
    item: "Backstage passes to a TAFKAL80ETC concert",
    sell_in: 15,
    quality: 20,
    category: "Backstage Passes",
    date_added: today
},
{
    item: "Conjured Mana Cake",
    sell_in: 3,
    quality: 8,
    category: "Conjured",
    date_added: today
},
]

input.addEventListener("submit", (event) => {
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

})


function degradeQuality(item) {
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