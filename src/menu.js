
const menuContent = document.createElement('div')

function foodData(){
const main = [
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
  ];
const drink = [
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
];
const side = [
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
  ];
  return{main,drink,side}
}

//menu items in object/array
class MenuItem{
    static count = 0
    constructor(name,type){
        this.name = name

        MenuItem.count++
    }
    static{
    }

    price;
    description;
    photo;
    type; //food types: main, side, drink
    index

 
}


function generateMenuItemForType(numOfItems, type){
    if(type !== main || type !== drink || type !==side) return
    
    const randNum = Math.floor(Math.random() * foodData().drink.length)
    const testItem = new MenuItem(
       foodData()[type][randNum] ) //pick random index in "drink"
    

    const menuItem = []
    for(const i = 0; i < menuItem; i++)
    {
        menuItem[i] = new MenuItem(
            Math.floor(Math.random() * foodData().drink.length)
        )
    }

    return testItem
}

// const menu1 = new MenuItem('name')
// const menu2 = new MenuItem('name2')
// const menu3 = new MenuItem('name3')
// const menuArr = [menu1,menu2,menu3]

const menuItem = []



console.log(MenuItem.count);
//use classes for UL LI

function createLI(){
   
}




