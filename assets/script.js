// identifying button elements for redirect

let resume = document.querySelectorAll("button[data-site= 'resume']");
let gitHub = document.querySelectorAll("button[data-site= 'github']")
let linkedIn = document.querySelectorAll("button[data-site= 'linkedin']")

$(resume).on("click",(event)=>{
    window.open("./assets/BrianREllisResume.pdf");
})
$(linkedIn).on("click",(event)=>{
    window.open("https://www.linkedin.com/in/brian-ellis-8a259483/"); 
})
$(gitHub).on("click",(event)=>{
    window.open("https://github.com/thebrellis")
})
