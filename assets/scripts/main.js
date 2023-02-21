let buttons = document.querySelectorAll(".btn")
let countNumber = document.querySelector(".counter__number")
let counter = 0

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
        let classList = btn.classList;
        if (classList.contains("plus")) {
            counter++
        }
        else if (classList.contains("minus")) {
            counter--
        }
        else {
            counter = 0
        }
        countNumber.textContent = counter
    })
})