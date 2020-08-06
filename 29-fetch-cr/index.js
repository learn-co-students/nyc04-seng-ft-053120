console.log("%c Hello! Please write some nice Javascript code here.", "color: lightseagreen")

// document.addEventListener("DOMContentLoaded", (evt) => {
//     let aVariableName = "hello"
// })

const groceryListOl = document.querySelector("#grocery-list")
const newFoodForm = document.querySelector("#new-food")

// We used Defer in index.html - Guarantees that the page (HTML elements) has been loaded
fetch("http://localhost:3000/foods")
    .then(res => res.json())
    .then((foodsArray) => {

        foodsArray.forEach((singleFoodObj) => {
            turnFoodToHTML(singleFoodObj)
        })
        
    })





let turnFoodToHTML = (foodObj) => {
    // {"id": 1, "name": "Cinnamon", "count": 5} -> <li><span>Cinnamon - 5</span></li>
    // 1) Create the outer box 
        let foodLi = document.createElement("li")
            foodLi.classList.add("item")
            // foodLi.className = "item"

    // 2) Fill the contents of the box

        foodLi.innerHTML = `<p class="js-food middle aligned content"> ${foodObj.name} - <span>${foodObj.count}</span></p>
        <button>Increment</button>
        <button class="delete-button">X</button>`
 
    // 3) Slap the outer box on the DOM

        groceryListOl.append(foodLi)

    // 4)
    // 5) 

}






newFoodForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    let theFoodName = evt.target.food_name.value

    fetch("http://localhost:3000/foods", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: theFoodName,
            count: 1
        })
    })
        .then(res => res.json())
        .then((newlyCreatedFood) => {
            turnFoodToHTML(newlyCreatedFood)
            evt.target.reset()
        })
})