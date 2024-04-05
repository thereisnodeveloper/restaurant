import './style.css'
import Placeholder from './assets/placeholder.png'

// import {mainMenuUL,sideMenuUL,drinkMenuUl} from "./menu.js"
import {menuContent} from "./menu.js"

export {appendChildBulk}

function initContent(){
   const content = document.querySelector("#content")

   const img = new Image()
   img.src = Placeholder
   img.height = 100
   content.appendChild(img)

   const title = document.createElement("h1")
   title.textContent = "Bad Burgers"

   const description = document.createElement("p")
   description.textContent = `Welcome to our burger restaurant, where we serve up delicious, hearty burgers made with the freshest ingredients. Our menu features a wide variety of burger options, from classic cheeseburgers to specialty burgers with unique toppings. We pride ourselves on using only the highest quality beef, freshly baked buns, and locally sourced produce to create the perfect burger experience for our customers. In addition to burgers, we also offer a selection of sides, salads, and drinks to complete your meal. Whether you're grabbing a quick lunch or enjoying a night out with friends and family, we're confident that you'll love our food and our friendly, welcoming atmosphere. Come visit us today and see what sets us apart!`
   content.append(title,description)
   return
}
initContent()

//append in bulk
function appendChildBulk(elemToAppendTo, ...args){
 args.forEach(arg => {
    elemToAppendTo.appendChild(arg)
 })     
}


// appendToBulk(content, ...elemArray)


// #region Event Listeners
const elemButtonHome = document.querySelector(".home")
const elemButtonMenu = document.querySelector(".menu")

   function resetContent(){
      const content = document.querySelector('#content')
      content.innerHTML = ""
   }
   function switchToHome(){
      resetContent()
      initContent()
   }

   function switchToMenu(){
      // const elemArray = [mainMenuUL,sideMenuUL,drinkMenuUl]

      resetContent()
      // initContent()
      appendChildBulk(content, menuContent)
   }

   elemButtonMenu.addEventListener("click", switchToMenu)
   elemButtonHome.addEventListener("click", switchToHome)
// #endregion