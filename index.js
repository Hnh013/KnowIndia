let aSide = document.querySelector(".aside-docs");
let addBtn = document.querySelector(".add-btn");
let closeBtn = document.querySelector(".close-btn");
const add = () => { aSide.classList.add("responsive"); addBtn.style.display = "none"; }
const remove = () => { aSide.classList.remove("responsive"); addBtn.style.display = "block"; }
closeBtn.addEventListener("click", remove);
addBtn.addEventListener("click", add);