console.log("Jay Shree Ram");

/* ------------------> Grab Elements <--------------------- */
let sidebarSpan = document.querySelectorAll(".sideBarSections span");
let sideBar = document.getElementById("sideBar");
let refresh = document.getElementById("refresh");
let view = document.getElementById("view");
let notesSection = document.getElementById("notesSection");
// let noteCard = document.querySelectorAll(".noteCard");
let noteCard = document.getElementsByClassName("noteCard")
let frontTitleDiv = document.getElementById("frontTitleDiv");
let backTitleDiv = document.getElementById("backTitleDiv");
let noteTitle = document.getElementById("noteTitle");
let noteText = document.getElementById("noteText");

displayNotes();

// --------------------------> Utility Functions <--------------------------- //
function getElementFromString(string)
{
    let div = document.createElement(`div`);
    div.classList.add("noteCard");
    div.classList.add(`gridViewNoteCard`);
    div.innerHTML = string;
    return div;
}


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
    // kept Code for debuggig
    // noteCard.forEach((e) =>
    // {
    //     if(e.classList.contains("gridViewNoteCard"))
    //     {
    //         notesSection.style.display = `block`;
    //         e.classList.remove("gridViewNoteCard");
    //         e.classList.add("listViewNoteCard");
    //     }
    //     else
    //     {
    //         notesSection.style.display = `grid`;
    //         e.classList.add("gridViewNoteCard");
    //         e.classList.remove("listViewNoteCard");
    //     }
    // })

    for(item of noteCard)
    {
        if(item.classList.contains("gridViewNoteCard"))
        {
            notesSection.style.display = `block`;
            item.classList.remove("gridViewNoteCard");
            item.classList.add("listViewNoteCard");
        }
        else
        {
            notesSection.style.display = `grid`;
            item.classList.add("gridViewNoteCard");
            item.classList.remove("listViewNoteCard");
        }
    }
})

frontTitleDiv.addEventListener("click",()=>
{
    frontTitleDiv.style.display = 'none';
    backTitleDiv.style.display = 'block';
})

document.addEventListener("click",(event) =>
{   

    if(backTitleDiv.style.display === 'block')
    {
        if(!backTitleDiv.contains(event.target) && !frontTitleDiv.contains(event.target) && !view.contains(event.target))
        {
            frontTitleDiv.style.display = 'flex';
            backTitleDiv.style.display = 'none';
    
            addNoteToList();
        }        
    }

})


/* ---------------------------> Functions <-------------------------- */


// -----------------> Function To ADD Notes <---------------- //
function addNoteToList()
{
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = []
    }
    else
    {
        notesObj = JSON.parse(notes)
    }

    let note = 
    {
        title : noteTitle.value,
        content : noteText.value
    }

    if(note.title !== `` || note.content !== ``)
    {
        notesObj.push(note);
        localStorage.setItem("notes",JSON.stringify(notesObj));
    }
    

    noteTitle.value = "";
    noteText.value = "";

    displayNotesAfterPageLoad();
}

// -----------------> Function To Display Notes on Page Load <---------------- //
function displayNotes()
{
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = []
    }
    else
    {
        notesObj = JSON.parse(notes)
    }
    
    // let html = ``;
    // notesSection.innerHTML = html;

    notesObj.forEach((item,index) => 
    {
        let string =    `   <div class="notedTitleText">${item.title}</div>
                                
                            <div class="notedContent scroll">${item.content}</div>
                            
                            <div class="noteManipulationMenu">
                                <img src="images/notification-bell.png" >
                                <img src="images/delete.png" id = "${index}" onclick = "deleteNoteFromList(this.id)">
                                <img src="images/palette.png">
                                <img src="images/image.png">
                                <img src="images/download-file.png">
                                <img src="images/more.png">
                            </div>
                        `
        let noteCardDiv = getElementFromString(string);

        notesSection.appendChild(noteCardDiv);

    })

    
}

// -----------------> Function To Display Notes After Page Load <---------------- //
function displayNotesAfterPageLoad()
{
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = []
    }
    else
    {
        notesObj = JSON.parse(notes)
    }
    
    notesSection.innerHTML = ``;

    notesObj.forEach((item,index) => 
    {
        let string =    `   <div class="notedTitleText">${item.title}</div>
                                
                            <div class="notedContent scroll">${item.content}</div>
                            
                            <div class="noteManipulationMenu">
                                <img src="images/notification-bell.png" >
                                <img src="images/delete.png" id = "${index}" onclick = "deleteNoteFromList(this.id)">
                                <img src="images/palette.png">
                                <img src="images/image.png">
                                <img src="images/download-file.png">
                                <img src="images/more.png">
                            </div>
                        `
        let noteCardDiv = getElementFromString(string);

        notesSection.appendChild(noteCardDiv);        
    })
    
}

// -----------------> Function To Delete Note <------------------ //
function deleteNoteFromList(indexID)
{
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = []
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(indexID,1);

    localStorage.setItem("notes",JSON.stringify(notesObj));

    displayNotesAfterPageLoad();
}