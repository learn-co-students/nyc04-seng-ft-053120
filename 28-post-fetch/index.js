let foxButton = document.getElementById('hello-button')
let foxesUl = document.querySelector("#foxes")
let newFoxForm = document.querySelector("#fox-form")

// element.addEventListener("EVENT_TYPE", (evt) => {
  // GET SOME VARIABLES TO HELP WITH YOUR FETCH

  // fetch("URL", {})
    // .then(res => res.json())
    // .then((theResponseThatIsNice) => {
      // MANIPULATE DOM HERE
    // })

// })

// headers -> I am sending a JSON
// BODY ->  THIS IS THE OBJECT I AM SENDING
  // Body of your fetch enters Rails params
  // Body should match the attributes from your backend



newFoxForm.addEventListener("submit", (evt) => {
  evt.preventDefault()

  let theNewFoxNameThatTheUserTyped = evt.target.f_name.value
  let theNewFoxImage = evt.target.f_img.value

  fetch("http://localhost:3000/foxes", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      name: theNewFoxNameThatTheUserTyped,
      img_url: theNewFoxImage
    })
  })
    .then(r => r.json())
    .then((newlyCreatedFox) => {
      // console.log(newlyCreatedFox)
      turnFoxObjToHTML(newlyCreatedFox)
    })




})










foxButton.addEventListener("click", (evt) => {
  
  fetch("http://localhost:3000/foxes/random")
    .then(r => r.json())
    .then((singularFox) => {
      turnFoxObjToHTML(singularFox)
    })

})



  
let turnFoxObjToHTML = (foxObj) => {
  // {id: 1, name: "Ozzy", img_url: ""} => <li><img src="" /></li>
  let foxLi = document.createElement("li")
  let foxImg = document.createElement("img")

  foxImg.src = foxObj.img_url
  foxImg.alt = foxObj.name

  foxLi.append(foxImg)
  foxesUl.append(foxLi)


  foxLi.addEventListener("click", () => {
    foxLi.remove()
  })

}
