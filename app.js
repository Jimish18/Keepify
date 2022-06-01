console.log("Jay Shree Ram");

let moveToAvatar = document.getElementById("moveToAvatar");
let avatarPage = document.getElementById("avatarPage");
let signUpArea = document.getElementById("signUpArea");
let backArrow = document.getElementById("backArrow");


let userName = document.getElementById("name");
let dob = document.getElementById("dob");
let email = document.getElementById("email");
let password = document.getElementById("password");

let avatarName = document.getElementById("avatarName");

moveToAvatar.addEventListener("click",(e)=>
{
    if(avatarPage.classList.contains("classAvatarOut") || signUpArea.classList.contains("classSignUpPageIn"))
    {
        avatarPage.classList.remove(`classAvatarOut`);        

        signUpArea.classList.remove(`classSignUpPageIn`);
        
    }

    avatarPage.classList.add(`classAvatarIn`);
    signUpArea.classList.add(`classSignUpPageOut`);

    console.log(userName.value + " " + dob.value + " " + email.value + " " + password.value);
    avatarName.innerHTML = userName.value;
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