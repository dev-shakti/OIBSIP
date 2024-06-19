const hamburger=document.querySelector(".hamburger")
const navlist=document.querySelector(".navlist")


hamburger.addEventListener("click" ,() => {
    console.log("clicked")
    navlist.classList.toggle("active")
    hamburger.classList.toggle("open");
})