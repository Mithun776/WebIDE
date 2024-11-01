let htmlinput = document.querySelector(".html-editor textarea");
let cssinput = document.querySelector(".css-editor textarea");
let jsinput = document.querySelector(".js-editor textarea");
let save = document.querySelector("#save");
let output = document.querySelector("#output");
let outputConatiner = document.querySelector(".output-container");
let full = document.querySelector("#full")
let copy = document.querySelectorAll(".copy")


save.addEventListener("click",()=>{
    output.contentDocument.body.innerHTML = htmlinput.value;  // For HTML to be given in the output
    output.contentDocument.head.innerHTML = `<style>${cssinput.value}</style>`; // For CSS to be given in the output
    output.contentWindow.eval(jsinput.value); // For JS to be given in the output
})

full.addEventListener("click",()=>{
    outputConatiner.classList.toggle("output-full-active"); // For Full screen
    if(outputConatiner.classList.contains("output-full-active")){
        full.style.transform = "rotate(180deg)"
    }else{
        full.style.transform = "rotate(0deg)"
    }
})

// For Copy button navigation.clipboard is like default syntax
copy.forEach((e) => {
    e.addEventListener("click", () => {
        if(e.classList.contains("copy1")){
            navigator.clipboard.writeText(htmlinput.value)
        }
        else if(e.classList.contains("copy2")){
            navigator.clipboard.writeText(cssinput.value)
        }
        else{
            navigator.clipboard.writeText(jsinput.value)
        }
    })
})