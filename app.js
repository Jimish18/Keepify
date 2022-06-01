console.log("Jay Shree Ram");

let moveToAvatar = document.getElementById("moveToAvatar");
let avatarPage = document.getElementById("avatarPage");
let signUpArea = document.getElementById("signUpArea");
let backArrow = document.getElementById("backArrow");

moveToAvatar.addEventListener("click",(e)=>
{
    if(avatarPage.classList.contains("classAvatarOut") || signUpArea.classList.contains("classSignUpPageIn"))
    {
        avatarPage.classList.remove(`classAvatarOut`);        

        signUpArea.classList.remove(`classSignUpPageIn`);
        
    }

    avatarPage.classList.add(`classAvatarIn`);
    signUpArea.classList.add(`classSignUpPageOut`);
    e.preventDefault();
})

backArrow.addEventListener("click",()=>
{
    if(avatarPage.classList.contains("classAvatarIn") || signUpArea.classList.contains("classSignUpPageOut"))
    {
        avatarPage.classList.remove(`classAvatarIn`);        

        signUpArea.classList.remove(`classSignUpPageOut`);
        
    }

    avatarPage.classList.add(`classAvatarOut`);
    signUpArea.classList.add(`classSignUpPageIn`);
})