console.log("Jay Shree Ram");

let sidebarSpan = document.querySelectorAll(".sideBarSections span");


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