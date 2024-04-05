
const menuContent = document.createElement('div')

const foodData = {
    main:[
        "Sandwich",
        "Fried Chicken",
        "Burger",
        "Tacos",
        "Fries",
        "Fish and Chips",
        "Hot Dog",
        "Burrito",
        "Pizza",
        "Falafel"
    ],
    drink:[
    "Cola",
    "Lemonade",
    "Iced Tea",
    "Milkshake",
    "Coffee",
    "Smoothie",
    "Water",
    "Orange Juice",
    "Root Beer",
    "Slushie"
    ],
    side:[
        "French Fries",
        "Onion Rings",
        "Coleslaw",
        "Mozzarella Sticks",
        "Garlic Bread",
        "Caesar Salad",
        "Corn on the Cob",
        "Baked Beans",
        "Sweet Potato Fries",
        "Macaroni and Cheese"
    ],
}

//menu items in object/array
class MenuItem{
    static count = 0
    constructor(name,type){
        this.name = name;
        this.price = Math.floor(Math.random()*20)
        this.description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, consectetur."
        this.type = type
        
        this.index = MenuItem.count
        MenuItem.count++

    }
    static{
    }
    name;
    price;
    description;
    photo;
    type; //food types: main, side, drink
    index
 
}
// const testItem = new MenuItem('babo','type')
// console.log(testItem);

/**@param {Object[]} [numOfItems=5]  */
function generateMenuItemForType(type, numOfItems=5){
    if(!type) return
    //TODO: make random generator skip ones that exist
    const itemArray = new Array(numOfItems).fill(null)
    const doubleChecker = []    
    for(let i = 0; i < numOfItems; i++)
    {
        let j = 0
        let randNum = Math.floor(Math.random() * type.length)
        while(
            (!doubleChecker.some(cell => cell === randNum) 
            && j < 15) 
            || doubleChecker.length === 0
            )

            {
            doubleChecker.push(randNum)

            itemArray[i] = new MenuItem(type[randNum], type)

            j++
        }
        
    }

    return itemArray
}

const [mainMenu,drinkMenu,sideMenu] = [
    generateMenuItemForType(foodData.main, 5),
    generateMenuItemForType(foodData.drink, 5),
    generateMenuItemForType(foodData.side, 5),
] 




//TODO: generate li for each MenuItem


function createElemLI(menuItem){
    // const propArray = []
    const li = document.createElement('li')
    Object.entries(menuItem).forEach(entry => {
        if(["photo", "type", "index"].includes(entry[0])) return;

        const propElem = document.createElement("div")
        propElem.classList.add(entry[0])

        propElem.textContent = entry[1]

        li.appendChild(propElem)
        // propArray.push(propElem)
    }) 
    return li
}

/**@param {Object} category  */
function createElemUL(category){
    const ulElem = document.createElement('ul')
    ulElem.className = {category}
    category.forEach(item => {
        ulElem.appendChild(createElemLI(item))
    })
    return ulElem
}

document.body.appendChild(createElemUL(mainMenu))



// export {createElemUL}