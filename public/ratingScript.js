// Add an event listener to the form that upon submits creates a new rating
// When the rating is created redirect to the ratings page
const create = document.querySelector("form")

const ratingForms = document.querySelector("ratingForms")
ratingForms.addEventListener("submit", async(e)=>{
    e.preventDefault();

const formsData = new FormData(createForm)
const reqBody = Object.fromEntries(formsData)

console.log(reqBody)

const response = await fetch("/add", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(reqBody)
})


})
