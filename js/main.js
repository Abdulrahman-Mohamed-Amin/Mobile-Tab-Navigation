// start mobile tags 

let box = document.querySelectorAll(".nav .box")
let img = document.querySelectorAll(".img_cont .img")

box.forEach((b , idx) =>{
    b.addEventListener("click" , (e) =>{

        box.forEach(b2 =>{
            b2.classList.remove("active")
        })

        b.classList.add("active")
        img.forEach(im =>{
            im.classList.remove("active")
        })
        img[idx].classList.add("active")
    })
})
