window.addEventListener("load",()=>{
        document.body.classList.remove("preload");
      })
        document.addEventListener("DOMContentLoaded",()=>{
          const nav =document.querySelector(".nav");
          const button =document.querySelector("#btnNav");
          const overlay =document.querySelector(".nav__overlay");
          button.addEventListener("click",function(){
           nav.classList.add("nav--open")
          })
          overlay.addEventListener("click",function(){
           nav.classList.remove("nav--open")
          })
        })
