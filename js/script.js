function checkRange(event) {
    var fourthQuestion = document.getElementById("fourth-question")
    if (event.target.value >= 7) {
        fourthQuestion.style.display = "none";
    }
    if (event.target.value <= 6) {
        fourthQuestion.style.display = "block";
    }
}





function validateForm(event) {
    event.prevent.default()
    console.log(1)
    var req = document.getElementById(form).querySelectorAll("[required]")

    req.forEach(el => el.style.borderColor = "green")
}




// document.addEventListener("DOMContentLoaded", function() {
//     var elements = document.getElementsByTagName("INPUT");
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].oninvalid = function(e) {
//             e.target.setCustomValidity("");
//             if (!e.target.validity.valid) {
//                 e.target.setCustomValidity("This field cannot be left blank");
//             }
//         };
//         elements[i].oninput = function(e) {
//             e.target.setCustomValidity("");
//         };
//     }
// })



// window.onload = function () {
//     var form = document.getElementById('#main-form');
//     form.onsubmit = function () {
//         for (var i = 0; i < form.elements.length; i++) {
//             if (form.elements[i].value === '' && form.elements[i].hasAttribute('required')) {
//                 alert('There are some required fields!');
//                 return false;
//             }
//         }
//         form.submit();
//     };
// };









