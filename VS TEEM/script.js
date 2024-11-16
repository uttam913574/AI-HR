let page=document.querySelector(".page");
let about=document.querySelector("#about-btn");
let home=document.querySelector("#home");
let interview=document.querySelector("#interview");
let toggel=document.querySelector("#toggle");
let toggelBtn=document.querySelector(".toggle-btn")

let msgcontaner=document.querySelector(".msg");
let hide=document.querySelector(".About-us");
 
/* show about section */
let comment=()=>{
    msgcontaner.classList.remove("hide");
    hide.classList.remove("hide");
    msgcontaner.style.backgroundColor="yellow";
};
let commentHide=()=>{
    msgcontaner.classList.add("hide");
    hide.classList.add("hide");
    msgcontaner.style.backgroundColor="yellow";
};
let toggleSignup=()=>{
    if(toggel.checked==true){
        window.location.href="loginPage.html";
        window.location.replace="loginPage.html";
    }
    else{
        window.location.href="signup.html";
        window.location.replace="signup.html";
    }
};
let togglelogin=()=>{
    if(toggel.checked==false){
        window.location.href="signup.html";
        window.location.replace="signup.html";
    }
    else{
        window.location.href="loginPage.html";
        window.location.replace="loginPage.html";
        
    }
};
about.addEventListener("dblclick",comment);
about.addEventListener("click",commentHide);
toggel.addEventListener("click",toggleSignup);
toggel.addEventListener("click",togglelogin);