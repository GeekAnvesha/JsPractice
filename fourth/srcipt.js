const list = document.querySelector("ul");
const btn = document.querySelector("button");
const input = document.querySelector("input");

var li;

btn.addEventListener("click", function () {
  if (input.value.trim() === "") {
  } else {
    li = document.createElement("li");
    li.innerText = input.value;
    list.appendChild(li);
    input.value = "";
  }
});
