let burger = document.getElementById("burger");
let navbar = document.getElementById("navbar");

 burger.addEventListener("click", () => {
     navbar.style.transform === "translateY(-86%)" ? navbar.style.transform = "translateY(0)" : navbar.style.transform = "translateY(-86%)";
 })

// function navbarSlide() {
//     navbar.style.transform === "translateY(-86%)" ? navbar.style.transform = "translateY(0)" : navbar.style.transform = "translateY(-86%)";
// }