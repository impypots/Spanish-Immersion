let burger = document.getElementById("burger");
let navbar = document.getElementById("navbar");
let tuitionHeader1 = document.getElementById("tuition-header1");
let tuitionHeader2 = document.getElementById("tuition-header2");
let tuitionHeader3 = document.getElementById("tuition-header3");
let tuitionText1 = document.getElementById("tuition-text1");
let tuitionText2 = document.getElementById("tuition-text2");
let tuitionText3 = document.getElementById("tuition-text3");

 burger.addEventListener("click", () => {
     navbar.style.transform === "translateY(-86%)" ? navbar.style.transform = "translateY(0)" : navbar.style.transform = "translateY(-86%)";
 });

tuitionHeader1.addEventListener("click", ()=> {
    if(tuitionHeader1.classList.contains("gray")) {
        tuitionHeader1.classList.remove("gray")
        tuitionHeader1.classList.add("white")
        tuitionHeader2.classList.add("gray")
        tuitionHeader2.classList.add("gray")
        tuitionHeader2.classList.remove("white")
        tuitionHeader3.classList.add("gray")
        tuitionHeader3.classList.remove("white")
        tuitionText1.classList.add("visible")
        tuitionText2.classList.remove("visible")
        tuitionText3.classList.remove("visible")
    }
})

tuitionHeader2.addEventListener("click", ()=> {
    if(tuitionHeader2.classList.contains("gray")) {
        tuitionHeader2.classList.remove("gray")
        tuitionHeader2.classList.add("white")
        tuitionHeader1.classList.add("gray")
        tuitionHeader1.classList.remove("white")
        tuitionHeader3.classList.add("gray")
        tuitionHeader3.classList.remove("white")
        tuitionText2.classList.add("visible")
        tuitionText1.classList.remove("visible")
        tuitionText3.classList.remove("visible")
    }
})

tuitionHeader3.addEventListener("click", ()=> {
    if(tuitionHeader3.classList.contains("gray")) {
        tuitionHeader3.classList.remove("gray")
        tuitionHeader3.classList.add("white")
        tuitionHeader1.classList.add("gray")
        tuitionHeader1.classList.remove("white")
        tuitionHeader2.classList.add("gray")
        tuitionHeader2.classList.remove("white")
        tuitionText3.classList.add("visible")
        tuitionText2.classList.remove("visible")
        tuitionText1.classList.remove("visible")
    }
})
 

 

// function navbarSlide() {
//     navbar.style.transform === "translateY(-86%)" ? navbar.style.transform = "translateY(0)" : navbar.style.transform = "translateY(-86%)";
// }