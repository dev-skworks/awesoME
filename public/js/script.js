const remindButton = document.getElementById("getRandom")
const dateElement = document.getElementById("date")
const noteElement = document.getElementById("postNote")
const fromElement = document.getElementById("postFrom")
const categoryElement = document.getElementById("postCategory")


remindButton.addEventListener("click", () => {
    fetch("/post/random")
        .then(res => res.json())
        .then(res => {
            dateElement.innerText = res.post.createdAt
            noteElement.innerText = res.post.note
            fromElement.innerText = res.post.from
            categoryElement.innerText = `Categories: ${res.post.category.join(", ")}`
        })
        .then(console.log)
})