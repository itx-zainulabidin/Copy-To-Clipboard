const copyText = document.querySelector(".copy-text");
const inputText = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const hi = document.querySelector(".hi");
btn.addEventListener("click", () => {
    navigator.clipboard.writeText(inputText.value);
    copyText.classList.add("active");
    setTimeout(() => {
        copyText.classList.remove("active");
    }, 2000);
});
