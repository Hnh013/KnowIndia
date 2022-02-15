let aSide = document.querySelector(".aside-docs");
let addBtn = document.querySelector(".add-btn");
let closeBtn = document.querySelector(".close-btn");
const add = () => { aSide.classList.add("responsive"); addBtn.style.display = "none"; }
const remove = () => { aSide.classList.remove("responsive"); addBtn.style.display = "block"; }
closeBtn.addEventListener("click", remove);
addBtn.addEventListener("click", add);


const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".open-modal");
const closeModalBtn = document.querySelector(".close-modal");

if (openModalBtn !== null) {
openModalBtn.addEventListener("click", () => modal.style.display = "block");
closeModalBtn.addEventListener("click" , () => modal.style.display = "none");
window.onclick = (event) => event.target == modal ? modal.style.display = "none" : '';
}