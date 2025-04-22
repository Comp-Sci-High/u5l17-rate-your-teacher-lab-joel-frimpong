// Add an event listener to the form that upon submits creates a new teacher
// When the teacher is created redirect to the teachers page
const create = document.querySelector("form")

const teacherForms = document.querySelector("teacherForms")
teacherForms.addEventListener("submit", async(e)=>{
    e.preventDefault();

const teachersData = new FormData(createForm)
const reqBody = Object.fromEntries(teachersData)

console.log(reqBody)

const response = await fetch("/add", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(reqBody)
})


})
