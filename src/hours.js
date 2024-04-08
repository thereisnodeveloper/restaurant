export  {hoursContent}
import { appendChildBulk } from "./index.js"

const hoursContent = document.createElement("div")
hoursContent.classList.add("hours-content")

const elemHours = document.createElement("p")
elemHours.innerHTML = `
<strong>Tuesday - Wednesday</strong><br>
DINNER: 4:00 pm - 10:00 pm<br>
<br>
<strong>Thursday - Saturday </strong><br>
LUNCH & DINNER 11:00 am - 10:00 pm <br>
<br>

<strong>Sunday</strong><br>
BRUNCH: 11 am - 3 pm<br>
DINNER: 4:30 pm - 9:30 pm<br>
<br>

<strong>CLOSED MONDAY</strong>`

hoursContent.append(elemHours)

const elemLocation = document.createElement("p")
elemLocation.innerHTML = `
<br>
<br>

<strong>LOCATION</strong><br>

5460 E Nice St,
Cantebury, MO 32145
`

hoursContent.append(elemLocation)