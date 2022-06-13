console.log("Jay Shree Ram");

/* ------------------> Grab Elements <--------------------- */
let sidebarSpan = document.querySelectorAll(".sideBarSections span");
let sideBar = document.getElementById("sideBar");
let refresh = document.getElementById("refresh");
let view = document.getElementById("view");
let notesSection = document.getElementById("notesSection");
let noteCard = document.querySelectorAll(".noteCard");
let frontTitleDiv = document.getElementById("frontTitleDiv");
let backTitleDiv = document.getElementById("backTitleDiv");

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

/* -----------------------> Refresh <-------------------- */
refresh.addEventListener("click",()=>
{
    location.reload();
})

/* ------------------------> View change <------------------ */
view.addEventListener("click",() =>
{
    noteCard.forEach((e) =>
    {
        if(e.classList.contains("gridViewNoteCard"))
        {
            notesSection.style.display = `block`;
            e.classList.remove("gridViewNoteCard");
            e.classList.add("listViewNoteCard");
        }
        else
        {
            notesSection.style.display = `grid`;
            e.classList.add("gridViewNoteCard");
            e.classList.remove("listViewNoteCard");
        }
    })
})

frontTitleDiv.addEventListener("click",()=>
{
    frontTitleDiv.style.display = 'none';
    backTitleDiv.style.display = 'block';
})

document.addEventListener("click",(event) =>
{
    if(!backTitleDiv.contains(event.target) && !frontTitleDiv.contains(event.target))
    {
        frontTitleDiv.style.display = 'flex';
        backTitleDiv.style.display = 'none';
    }
})
