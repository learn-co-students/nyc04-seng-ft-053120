let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});




let toyCollectionDiv = document.querySelector("#toy-collection")
let toyForm = document.querySelector(".add-toy-form")





fetch("http://localhost:3000/toys")
  .then(res => res.json())
  .then(toysArr => {

    toysArr.forEach((singleToy) => {
      turnToyToHTML(singleToy)
    })

  })



  

let turnToyToHTML = (toyObj) => {
  // {id: 1, name: "Woody", likes: 2} -> <div></div>
    // React's Render method

  // 1) Create the outermost element
  let outerToyDiv = document.createElement("div")
    outerToyDiv.className = "card"


  // 2) Fill the contents of the box
  let nameH2 = document.createElement("h2")
    nameH2.innerText = toyObj.name

  let toyImage = document.createElement("img")
    toyImage.src = toyObj.image
    toyImage.className = "toy-avatar"

  let likesP = document.createElement("p")
    likesP.innerText = `${toyObj.likes} Likes`
  
  let likeButton = document.createElement("button")
    likeButton.className = "like-btn"
    likeButton.innerText = "Like <3"

  outerToyDiv.append(nameH2, toyImage, likesP, likeButton)


  // 3) Slap the box on the DOM
  toyCollectionDiv.append(outerToyDiv)

  // 4) Find the elements in the box
  // 5) Add Event Listeners

  likeButton.addEventListener("click", (evt) => {
    // Update the object in memory {}
    toyObj.likes += 1

    fetch(`http://localhost:3000/toys/${toyObj.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        likes: toyObj.likes
      })
    })
      .then(res => res.json())
      .then((updatedToy) => {
        // Update what the user sees on the DOM
        likesP.innerText = `${updatedToy.likes} Likes`
      })
  })



}





toyForm.addEventListener("submit", (evt) => {
  evt.preventDefault()
  let toyName = evt.target.name.value
  let toyImg = evt.target.image.value

  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: {
      "Content-type": "Application/json"
    },
    body: JSON.stringify({
      name: toyName,
      image: toyImg,
      likes: 0 
    })
  })
    .then(res => res.json())
    .then((newlyCreatedToy) => {
      turnToyToHTML(newlyCreatedToy)
    })
})





// let turnToyToHTML2 = (toyObj) => {
//   // {id: 1, name: "Woody", likes: 2} -> <div></div>
//     // React's Render method

//   // 1) Create the outermost element
//   let outerToyDiv = document.createElement("div")
//     outerToyDiv.className = "card"


//   // 2) Fill the contents of the box
//   outerToyDiv.innerHTML = `<h2>${toyObj.name}</h2>
//   <img src="${toyObj.image}" class="toy-avatar" />
//   <p>${toyObj.likes} Likes </p>
//   <button class="like-btn">Like <3</button>`


//   // 3) Slap the box on the DOM
//   toyCollectionDiv.append(outerToyDiv)

//   // 4) Find the elements in the box
//   let likeButton = outerToyDiv.querySelector(".like-btn")
//   let likesP = outerToyDiv.querySelector("p")
//   // 5) Add Event Listeners

//   likeButton.addEventListener("click", (evt) => {
//     // Update the object in memory {}
//     toyObj.likes += 1

//     fetch(`http://localhost:3000/toys/${toyObj.id}`, {
//       method: "PATCH",
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({
//         likes: toyObj.likes
//       })
//     })
//       .then(res => res.json())
//       .then((updatedToy) => {
//         // Update what the user sees on the DOM
//         likesP.innerText = `${updatedToy.likes} Likes`
//       })

//   })


// }