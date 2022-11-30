let form = document.getElementById("main-form")
let q_1 = document.getElementById("first-time")
let q_2 = document.getElementById("not-first-time")
let q_3 = document.getElementById("q-2-yes")
let q_4 = document.getElementById("q-2-yesno")
let q_5 = document.getElementById("q-2-no")
let errorMessage1 = document.querySelector('.error1')
let errorMessage2 = document.querySelector('.error2')




form.onsubmit = function (e) {
    // q2 VALIDATE

    if (!q_3.checked && !q_4.checked && !q_5.checked) {
        e.preventDefault()
        errorMessage2.style.display = 'block'
        window.scrollTo({
            top: 300,
            left: 0,
            behavior: 'smooth'
        });
    }

    // q1 VALIDATE
    if (q_1.checked === false && q_2.checked === false) {
        e.preventDefault()
        errorMessage1.style.display = 'block'
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }









}