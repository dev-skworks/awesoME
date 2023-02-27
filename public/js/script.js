const remindButton = document.getElementById("getRandom")
const dateElement = document.getElementById("date")
const noteElement = document.getElementById("postNote")
const fromElement = document.getElementById("postFrom")
const categoryElement = document.getElementById("postCategory")
const newNoteElement = document.getElementById("newPostNote")
const newFromElement = document.getElementById("newPostFrom")
const newCategoryElement = document.getElementById("newPostCategory")


remindButton.addEventListener("click", () => {
    fetch("/post/random")
        .then(res => res.json())
        .then(res => {
            dateElement.innerText = res.post.createdAt.split("T")[0]
            noteElement.innerText = res.post.note
            fromElement.innerText = res.post.from
            categoryElement.innerText = `Categories: ${res.post.category.join(", ")}`
            newNoteElement.innerText = res.post.note
            newFromElement.innerText = res.post.from
            newCategoryElement.innerText = `Categories: ${res.post.category.join(", ")}`
        })
        .then(console.log)
})