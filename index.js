let life = 5
console.log(document.querySelector("#hangman").getAttribute('data'))
document.addEventListener("keypress", (e) => {
    let failure = true
    for (l of document.querySelectorAll(".letters > span")) {
        if (l.innerText === e.key.toUpperCase()) {
            l.classList.remove("hidden")
            failure = false
        }
        if (document.querySelectorAll(".letters > span.hidden").length === 0) {
            alert("winner")
        }
        if (failure) {
            life -= 1
            break
        }
    }
    console.log(life)
    if (life < 1) {
        alert("you lose")
    }
})

function generate() {
    const words = ["TOOL", "HEDGEHOG", "FIRE", "WIZARD", "LASAGNA"]
    const letters = document.querySelector(".letters")
    let word = words[Math.round(Math.random() * words.length)]
    for (l of word) {
        let clone = document.querySelector("#letter").cloneNode(true).content
        clone.querySelector("span").innerText = l.toUpperCase()
        letters.appendChild(clone)
    }
}
generate()