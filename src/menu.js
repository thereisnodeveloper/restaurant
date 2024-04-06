
// export {mainMenuUL,sideMenuUL,drinkMenuUl}
export {menuContent}
import {appendChildBulk as appendChildBulk} from './index.js'



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
    constructor(name,foodGroup){
        this.name = name;
        this.price = Math.floor(Math.random()*20 + 4)
        this.description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        this.foodGroup = foodGroup
        
        this.index = MenuItem.count
        MenuItem.count++

    }
    static{
    }
    name;
    price;
    description;
    photo;
    foodGroup; //food types: main, side, drink
    index
 
}

/**@param {Object[]} [numOfItems=5]  */
function generateMenuItemForType(type, numOfItems=5,foodGroupName){
    //generating enough times
    if(!type) return
    const itemArray = new Array(numOfItems).fill(null)
    const doubleChecker = []    
    for(let i = 0; i < numOfItems; i++)
    {
        // let j = 0
        let randNum = Math.floor(Math.random() * type.length)
        while(doubleChecker.some(cell => cell === randNum) 
            // && j < 15
            )
            {
             randNum = Math.floor(Math.random() * type.length)
            }
            doubleChecker.push(randNum)

            itemArray[i] = new MenuItem(type[randNum], foodGroupName)

            // j++
        
        
    }

    return itemArray
}
console.log();
const [mainMenu,drinkMenu,sideMenu] = [
    generateMenuItemForType(foodData.main, 8, Object.keys(foodData)[0]),
    generateMenuItemForType(foodData.drink, 5, Object.keys(foodData)[1]),
    generateMenuItemForType(foodData.side, 5, Object.keys(foodData)[2]),
] 


function createElemLI(menuItem){
    // const propArray = []
    const elemLI = document.createElement('li')
    const elemNamePrice = document.createElement('div')
    elemNamePrice.className = 'wrapper-name-price'
    Object.entries(menuItem).forEach(entry => {
        if(["photo", "type", "index", "foodGroup"].includes(entry[0])) return;

        const propElem = document.createElement("div")
        propElem.classList.add(entry[0]) //adds key name to class (i.e. "price")

        propElem.textContent = entry[1] //change text to value

        propElem.className === "description" 
        ? elemLI.appendChild(propElem) 
        : elemNamePrice.appendChild(propElem)
    }) 
    elemLI.insertAdjacentElement("afterbegin", elemNamePrice)
    
    return elemLI
}
/**@param {Object} category  */
function createElemUL(category, className){        
    const ulElem = document.createElement('ul')
    ulElem.className = className
    category.forEach(item => {
        ulElem.appendChild(createElemLI(item))
    })
    return ulElem
}


const mainMenuUL = createElemUL(mainMenu, "menu-main")
const sideMenuUL = createElemUL(sideMenu, "menu-side")
const drinkMenuUl = createElemUL(drinkMenu, "menu-drink")



const menuContent = document.createElement('div')
menuContent.classList.add("menu-content")
appendChildBulk(menuContent, mainMenuUL,sideMenuUL,drinkMenuUl)

