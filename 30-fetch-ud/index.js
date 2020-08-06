console.log("%c Hello! Please write some nice Javascript code here.", "color: lightseagreen")

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
        <button class="increase">Increment</button>
        <button class="delete-button">X</button>`
    
    // 3) Slap the outer box on the DOM
    
        groceryListOl.append(foodLi)
        
    // 4) Find specific elements from the contents of the box
        // You generally want to grab elements that you put in the box during step 2
    // 5) Add your event listeners


        // DELETE
        
        let deleteButton = foodLi.querySelector("button.delete-button")

        deleteButton.addEventListener("click", (evt) => {
            fetch(`http://localhost:3000/foods/${foodObj.id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then((emptyObject) => {
                    foodLi.remove()
                })
        })



        // UPDATE

        let increaseButton = foodLi.querySelector(".increase")
        // FINDING THE ELEMENT
        let spanNum = foodLi.querySelector("span")

        increaseButton.addEventListener("click", (evt) => {
            // UPDATING THE OBJECT IN MEMORY
            foodObj.count += 1
            // UPDATING THE BACKEND
            fetch(`http://localhost:3000/foods/${foodObj.id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'Application/json'
                },
                body: JSON.stringify({
                    count: foodObj.count 
                })
            })
                .then(res => res.json())
                .then((updatedFood) => {
                    // UPDATING WHAT THE USER SEES ON THE DOM
                    spanNum.innerText = updatedFood.count
                })

        })

    // Rinse and repeat steps 4 and 5 as much as you need
 
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




