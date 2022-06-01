console.log("Jay Shree Ram");

// ----------------> Grab forward and back Buttons & Sections <--------------- //
let moveToAvatar = document.getElementById("moveToAvatar");
let avatarPage = document.getElementById("avatarPage");
let signUpArea = document.getElementById("signUpArea");
let backArrow = document.getElementById("backArrow");

// ------------------> Grab Input Field Details <----------------  //
let userName = document.getElementById("name");
let dob = document.getElementById("dob");
let email = document.getElementById("email");
let password = document.getElementById("password");

// ------------> Grab Selected Avatar Image and Name Section <-------- //
let avatarName = document.getElementById("avatarName");
let selectedAvatar = document.getElementById("selectedAvatar");


// ----------> EL oncliking submitting signUp form <------------ //
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

// -----------> EL on clicking back button of Avatar section Area <---------- //
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

// -----------------> Function to show selected Avatar <------------ //
function avatarSelection(number)
{
    if(number < 5)
    {
        selectedAvatar.src = `images/avatar/female${number}.png`;
    }
    if(number > 4)
    {
        selectedAvatar.src = `images/avatar/male${number-4}.png`;
    }
}