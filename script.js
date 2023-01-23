let card_name_input = document.querySelector(".card-name-input")
let card_number_input = document.querySelector(".card-number-input")
let card_mm_input = document.querySelector(".card-mm-input")
let card_yy_input = document.querySelector(".card-yy-input")
let card_cvc_input = document.querySelector(".card-cvc-input")


let card_name_holder = document.querySelector(".card-name-holder")
let card_number_holder = document.querySelector(".card-number-holder")
let card_mm_holder = document.querySelector(".card-mm-holder")
let card_yy_holder = document.querySelector(".card-yy-holder")
let card_cvc_holder = document.querySelector(".card-cvc-holder")


let form_complete = document.querySelector(".form-complete")
let form = document.querySelector(".form")
let form_btn = document.querySelector(".form-btn")
let form_btn_complete = document.querySelector(".form-btn-complete")



card_name_input.addEventListener("keyup", () => {
    let text = card_name_input.getElementsByTagName("input")[0].value
    card_name_holder.textContent = text
    if (text !== "") card_name_input.classList.add("valid")
    else card_name_input.classList.remove("valid")
})
card_number_input.addEventListener("keyup", () => {
    let text = card_number_input.getElementsByTagName("input")[0].value
    card_number_holder.textContent = text
    if (text !== "") card_number_input.classList.add("valid")
    else card_number_input.classList.remove("valid")
})
card_mm_input.addEventListener("keyup", () => {
    let text = card_mm_input.getElementsByTagName("input")[0].value
    card_mm_holder.textContent = text
    if (text !== "") card_mm_input.classList.add("valid")
    else card_mm_input.classList.remove("valid")
})
card_yy_input.addEventListener("keyup", () => {
    let text = card_yy_input.getElementsByTagName("input")[0].value
    card_yy_holder.textContent = text
    if (text !== "") card_yy_input.classList.add("valid")
    else card_yy_input.classList.remove("valid")
})
card_cvc_input.addEventListener("keyup", () => {
    let text = card_cvc_input.getElementsByTagName("input")[0].value
    card_cvc_holder.textContent = text
    if (text !== "") card_cvc_input.classList.add("valid")
    else card_cvc_input.classList.remove("valid")
})


form_btn.addEventListener("click", (e) => {
    e.preventDefault()

    let success = true;
    if (isEmptyText(card_name_input.getElementsByTagName("input")[0].value)) {
        card_name_input.classList.add("error")
        success = false;
    } else card_name_input.classList.remove("error")

    if (isEmptyText(card_number_input.getElementsByTagName("input")[0].value)) {
        card_number_input.classList.add("error")
        success = false;
    } else card_number_input.classList.remove("error")

    if (isEmptyText(card_mm_input.getElementsByTagName("input")[0].value)) {
        card_mm_input.classList.add("error")
        success = false;
    } else card_mm_input.classList.remove("error")

    if (isEmptyText(card_yy_input.getElementsByTagName("input")[0].value)) {
        card_yy_input.classList.add("error")
        success = false;
    } else card_yy_input.classList.remove("error")

    if (isEmptyText(card_cvc_input.getElementsByTagName("input")[0].value)) {
        card_cvc_input.classList.add("error")
        success = false;
    } else card_cvc_input.classList.remove("error")


    if (success) {
        form_complete.classList.add("active")
        form.classList.remove("active")
    }

})

form_btn_complete.addEventListener("click", (e) => {
    e.preventDefault()

    form_complete.classList.remove("active")
    form.classList.add("active")
    EmptyFromInput()
})

function isEmptyText(text) {
    return text === null || text === ""
}

function EmptyFromInput() {
    card_name_input.getElementsByTagName("input")[0].value = ""
    card_number_input.getElementsByTagName("input")[0].value = ""
    card_mm_input.getElementsByTagName("input")[0].value = ""
    card_yy_input.getElementsByTagName("input")[0].value = ""
    card_cvc_input.getElementsByTagName("input")[0].value = ""

    card_name_input.classList.remove("valid")
    card_number_input.classList.remove("valid")
    card_mm_input.classList.remove("valid")
    card_yy_input.classList.remove("valid")
    card_cvc_input.classList.remove("valid")
}

