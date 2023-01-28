const remindButton = document.getElementById("getRandom")
const dateElement = document.getElementById("date")
const noteElement = document.getElementById("postNote")
const fromElement = document.getElementById("postFrom")


remindButton.addEventListener("click", () => {
    fetch("/post/random")
        .then(res => res.json())
        .then(res => {
            dateElement.innerText = res.post.createdAt
            noteElement.innerText = res.post.note
            fromElement.innerText = res.post.from
        })
        .then(console.log)
})