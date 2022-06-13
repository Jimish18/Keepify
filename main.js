console.log("Jay Shree Ram");

let sidebarSpan = document.querySelectorAll(".sideBarSections span");
let sideBar = document.getElementById("sideBar");
let refresh = document.getElementById("refresh");

// -----------------> SideBar <------------------------ //
function viewSidebar()
{
    sidebarSpan.forEach((e)=>
    {
        if(e.classList.value === `hide`)
        {
            e.classList.remove("hide");
            e.classList.add("visible");
        }
        else
        {
            e.classList.remove("visible");
            e.classList.add("hide");
        }
    })
}

sideBar.addEventListener("mouseover",() =>
{
    sidebarSpan.forEach((e)=>
    {
        
        e.classList.remove("hide");
        e.classList.add("visible");
    })
})

sideBar.addEventListener("mouseleave",() =>
{
    sidebarSpan.forEach((e)=>
    {
        e.classList.remove("visible");
        e.classList.add("hide");
    })
})

refresh.addEventListener("click",()=>
{
    location.reload();
})