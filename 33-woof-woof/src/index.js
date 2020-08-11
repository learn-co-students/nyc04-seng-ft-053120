let dogBar = document.querySelector("div#dog-bar")
let dogMainDiv = document.querySelector("#dog-info")
let bonusButton = document.querySelector("button#good-dog-filter")



fetch("http://localhost:3000/pups")
    .then(res => res.json())
    .then((dogsArr) => {
        dogsArr.forEach((singleDog) => {
            turnDogToSpan(singleDog)
        })
    })





let turnDogToSpan = (dogObj) => {
    let outerDogSpan = document.createElement("span")
        outerDogSpan.innerText = dogObj.name

    dogBar.append(outerDogSpan)

    outerDogSpan.addEventListener("click", (evt) => {
        renderMainDog(dogObj)
    })
}

// function turnDogToSpan(dogObj){
// }






let renderMainDog = (dogObj) => {
    let dogImage = document.createElement("img")
        dogImage.src = dogObj.image
    let dogNameH2 = document.createElement("h2")
        dogNameH2.innerText = dogObj.name
    let dogButton = document.createElement("button")

    if(dogObj.isGoodDog){
        dogButton.innerText = "Best Dog"
    } else {
        dogButton.innerText = "Room for Improvement Dog"
    }
     // dogButton.innerText = dogObj.isGoodDog ? "Best Dog" : "Room For Improvement Dog"
    dogMainDiv.innerHTML = ""




    dogMainDiv.append(dogImage, dogNameH2, dogButton)




    dogButton.addEventListener("click", (evt) => {
        fetch(`http://localhost:3000/pups/${dogObj.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                isGoodDog: !dogObj.isGoodDog
            })
        })
            .then(res => res.json())
            .then((updatedDog) => {
                // UPDATING THE OBJECT IN MEMORY
                dogObj.isGoodDog = updatedDog.isGoodDog
                // dogObj.isGoodDog = !dogObj.isGoodDog
                
                // objectInMemory.key += NumToIncrement
                
                // UPDATING THE DOM
                dogButton.innerText = updatedDog.isGoodDog ? "Best Dog" : "Room For Improvement Dog"
            })
    })
}











// BONUS

bonusButton.addEventListener("click", (evt) => {
    let isTheButtonOn = bonusButton.innerText === "Filter good dogs: ON"

    fetch(`http://localhost:3000/pups`)
        .then(res => res.json())
        .then((allDoggies) => {

            dogBar.innerHTML = ""
                
            if (isTheButtonOn){

                allDoggies.forEach((singleDog) => {
                    turnDogToSpan(singleDog)
                })
          
                bonusButton.innerText = "Filter good dogs: OFF"
                
            } else {

                allDoggies.forEach((singleDog) => {
                    if(singleDog.isGoodDog){
                        turnDogToSpan(singleDog)
                    }
                })
                bonusButton.innerText = "Filter good dogs: ON"
                 
            }
        })
})