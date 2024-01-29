const parts = [
    document.getElementById("legs"),
    document.getElementById("arms"),
    document.getElementById("body"),
    document.getElementById("head"),
    document.getElementById("scaffold"),
    document.getElementById("ground"),
]

const typed = []

let life = parts.length - 1

function win() {
    for (l of document.querySelectorAll(".letters .letter")) {
        l.classList.add("success")
    }
    document.querySelector(".message").innerText = "You win! Press a key to play again..."
}

function lose() {
    for (l of document.querySelectorAll(".letters .letter.hidden")) {
        l.classList.remove("hidden")
        l.classList.add("failure")
    }
    document.querySelector(".message").innerText = "You lose! Press a key to try again..."
}

document.addEventListener("keypress", (e) => {
    if (document.querySelectorAll(".letters .letter.hidden").length === 0) {
        generate()
        return
    }
    if (typed.includes(e.key.toUpperCase())) {
        return
    }
    typed.push(e.key.toUpperCase())
    document.querySelector(".message").innerText = typed.reduce((a, b) => a + " " + b, "")
    let failure = true
    for (l of document.querySelectorAll(".letters .letter.hidden")) {
        if (l.innerText === e.key.toUpperCase()) {
            l.classList.remove("hidden")
            failure = false
        }
        if (document.querySelectorAll(".letters .letter.hidden").length === 0) {
            win()
        }
    }
    if (failure) {
        parts[life].style.opacity = 1
        life -= 1
    }
    if (life < 0) {
        lose()
    }
})

function generate() {
    life = parts.length - 1
    const words = [
        "TOOL",
        "HEDGEHOG",
        "FIRE",
        "WIZARD",
        "LASAGNA",
        "EXPLOSION",
        "CLOCK",
        "HEADPHONES",
        "CONTROLLER",
        "KEYBOARD",
        "GRASS",
        "ICE CREAM",
        "PANTS",
        "PILLOW",
        "TIME TO LOSE!"
    ]
    typed.length = 0
    const letters = document.querySelector(".letters")
    for (p of parts) {
        p.style.opacity = 0
    }
    document.querySelector(".message").innerText = "Press a key to guess..."
    letters.replaceChildren()
    let word = words[Math.round(Math.random() * words.length)]
    for (l of word) {
        let clone = document.querySelector("#letter").cloneNode(true).content
        clone.querySelector("span").innerText = l.toUpperCase()
        letters.appendChild(clone)
    }
}
generate()