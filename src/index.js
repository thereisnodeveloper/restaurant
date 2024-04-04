import './style.css'
import Placeholder from './assets/placeholder.png'

const content = document.querySelector("#content")


const img = new Image()
img.src = Placeholder
img.height = 100
content.appendChild(img)