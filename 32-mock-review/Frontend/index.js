let shoesUl = document.querySelector("#shoe-list") 
let shoeImg = document.querySelector("#shoe-image")
let shoeName = document.querySelector("#shoe-name")
let shoePrice = document.querySelector("#shoe-price")
let shoeDescription = document.querySelector("#shoe-description")
let reviewsUl = document.querySelector("#reviews-list")
let formContainer = document.querySelector("#form-container")





fetch('http://localhost:3000/shoes')
    .then(res => res.json())
    .then((shoesArr) => {

        shoesArr.forEach((singleShoe) => {
            turnShoeToSideBarLI(singleShoe)
        })

        renderMainShoe(shoesArr[0])
    })






let turnShoeToSideBarLI = (shoeObj) => {
    // {} -> <li></li>
    let sidebarShoeLi = document.createElement("li")
        sidebarShoeLi.classList.add("list-group-item")
        // sidebarShoeLi.className = "list-group-item"

    sidebarShoeLi.innerText = shoeObj.name

    shoesUl.append(sidebarShoeLi)

    sidebarShoeLi.addEventListener("click", (evt) => {
        renderMainShoe(shoeObj)
    })

}





let renderMainShoe = (singleShoe) => {

    // DESCRIPTION OF THE SINGLE SHOE
    shoeImg.src = singleShoe.image
    shoeName.innerText = singleShoe.name
    shoePrice.innerText = singleShoe.price
    shoeDescription.innerText = singleShoe.description


    // CLEARS THE UL
    reviewsUl.innerHTML = ""

    // SLAPS EACH OF THE REVIEWS ONTO THE UL
    singleShoe.reviews.forEach((reviewObj) => {
        let reviewLi = document.createElement("li")
            reviewLi.className = "list-group-item"
        reviewLi.innerText = reviewObj.content
        reviewsUl.append(reviewLi)
    })

    // CLEAR OUT THE FORM CONTAINER
    formContainer.innerHTML = ""

    // ADD A NEW FORM

    let newFormForShoe = document.createElement("form")
        newFormForShoe.id = "new-review"
    
    newFormForShoe.innerHTML = `<div class="form-group">
        <textarea class="form-control" id="review-content" rows="3"></textarea>
        <input type="submit" class="btn btn-primary"></input>
    </div>`

    formContainer.append(newFormForShoe)

    // ADD EVENT LISTENER

    newFormForShoe.addEventListener("submit", (evt) => {
        evt.preventDefault()
        let whatTheUserTyped = evt.target["review-content"].value

        fetch(`http://localhost:3000/shoes/${singleShoe.id}/reviews`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: whatTheUserTyped
            })
        })
            .then(res => res.json())
            .then((newReviewObj) => {
                // UPDATES THE DOM
                let reviewLi = document.createElement("li")
                    reviewLi.className = "list-group-item"
                reviewLi.innerText = newReviewObj.content
                reviewsUl.append(reviewLi)

                // UPDATE THE OBJECT IN MEMORY
                singleShoe.reviews.push(newReviewObj)
            })
    })


    


}


