let text = document.getElementById("disntlike")
let button = document.querySelector("button")

button.addEventListener("mousedown", () => text.innerHTML = ("Текст заменён"))
button.addEventListener("mouseup", () => text.innerHTML = "Опять текст")

/*
selectors 
# - id
. - classname
tag - tag
*/
// prompt("Вопрос")
// alert("Ответ")
// if (condition) {} - Условие
// addEventListener - слушатель событий