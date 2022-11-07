const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)
const menuLists=$$('.menu-bar-iem')
menuLists.forEach((menu,_index)=>{
    menu.onclick=function(){
        $('.menu-bar-iem.menu-bar-active').classList.remove('menu-bar-active')
        this.classList.add('menu-bar-active')
    }
})
// click vào đăng nhập
const loggins = $('.login')
const formLogginOverlay = $('.form-loggin-overlay')
loggins.onclick = function(){
    formLogginOverlay.style.display = "block"
    overlayRight.style.transform = "translateX(0)"
    overlayRight.style.transition = "transform 0.6s ease-in-out"
    overlayLeft.style.transform = "translateX(-20%)"
    overlayLeft.style.transition = "transform 0.6s ease-in-out"
    formSignIn.style.transform = "translateX(-100%)"
    formSignIn.style.transition = "transform 0.6s ease-in-out"
    formSignUp.style.transform = "translateX(100%)"
    formSignUp.style.transition = "transform 0.6s ease-in-out"
}
// click vào đăng kí
const logout = $('.logout')
logout.onclick = function(){
    formLogginOverlay.style.display = "block"
    overlayRight.style.transform = "translateX(-100%)"
    overlayRight.style.transition = "transform 0.6s ease-in-out"
    overlayLeft.style.transform = "translateX(74%)"
    overlayLeft.style.transition = "transform 0.6s ease-in-out"
    formSignIn.style.transform = "translateX(0)"
    formSignIn.style.transition = "transform 0.6s ease-in-out"
    formSignUp.style.transform = "translateX(0)"
    formSignUp.style.transition = "transform 0.6s ease-in-out"

}
const closeOverlay = $('.close-overlay')
closeOverlay.onclick=function(){
    formLogginOverlay.style.display="none"
}
const signUpButton = $('.signUp');
const signInButton = $('.signIn');
const overlayRight = $('.overlay-right');
const overlayLeft = $('.overlay-left');
const formSignIn = $('.form-sign-in')
const formSignUp = $('.form-sign-up')

const container = document.getElementById('loggin__container');
signUpButton.onclick = function(){
    overlayRight.style.transform = "translateX(-100%)"
    overlayRight.style.transition = "transform 0.6s ease-in-out"
    overlayLeft.style.transform = "translateX(74%)"
    overlayLeft.style.transition = "transform 0.6s ease-in-out"
    formSignIn.style.transform = "translateX(0)"
    formSignIn.style.transition = "transform 0.6s ease-in-out"
    formSignUp.style.transform = "translateX(0)"
    formSignUp.style.transition = "transform 0.6s ease-in-out"
}
signInButton.onclick = function(){
    overlayRight.style.transform= "translateX(0)"
    overlayRight.style.transition= "transform 0.6s ease-in-out"
    overlayLeft.style.transform= "translateX(-20%)"
    overlayLeft.style.transition= "transform 0.6s ease-in-out"
    formSignIn.style.transform = "translateX(-100%)"
    formSignIn.style.transition = "transform 0.6s ease-in-out"
    formSignUp.style.transform = "translateX(100%)"
    formSignUp.style.transition = "transform 0.6s ease-in-out"
}

// slider JS

window.addEventListener("load", function(){
    const slide = $('.slider')
    const sliderMain = $('.slider-main')
    const sliderItems = $$('.slider-item')
    const nextBtn = $('.slider-next')
    const prevBtn = $('.slider-prev')
    const dotItems = $$('.slider-dot-item')
    const dotItemActive = $('slider-dot-item.active')
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;
    let positionX = 0;
    let index = 0
    nextBtn.addEventListener("click",function(){
        handle(1);
    });
    prevBtn.addEventListener("click",function(){
        handle(-1);
    });
    [...dotItems].forEach(item => 
        item.addEventListener("click",function(e){
            [...dotItems].forEach(el => el.classList.remove("active"))
            const slideIndex = parseInt(e.target.dataset.index);
            index = slideIndex;
            positionX = -1*index * sliderItemWidth
            sliderMain.style = `transform: translateX(${positionX}px)`
            e.target.classList.add('active')
        })
    );
    function handle(direction){
        if(direction===1 && index<1){
            index ++;
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`
            
        }
        else if(direction===-1 && index>0){
            index--;
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`
            
        }
    }
})