import './style.css'
import Placeholder from './assets/placeholder.png'
import menuContent from './menu'

import createElemUL from "./menu.js"


const content = document.querySelector("#content")

const img = new Image()
img.src = Placeholder
img.height = 100
content.appendChild(img)

const title = document.createElement("h1")
title.textContent = "Bad Burgers"

const description = document.createElement("p")
description.textContent = `Welcome to our burger restaurant, where we serve up delicious, hearty burgers made with the freshest ingredients. Our menu features a wide variety of burger options, from classic cheeseburgers to specialty burgers with unique toppings. We pride ourselves on using only the highest quality beef, freshly baked buns, and locally sourced produce to create the perfect burger experience for our customers. In addition to burgers, we also offer a selection of sides, salads, and drinks to complete your meal. Whether you're grabbing a quick lunch or enjoying a night out with friends and family, we're confident that you'll love our food and our friendly, welcoming atmosphere. Come visit us today and see what sets us apart!`

//append in bulk
content.append(title,description)


