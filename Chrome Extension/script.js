const inputBtn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.querySelector("#tab-btn")

tabBtn.addEventListener("click", () => {
    // 1st we access the crome(obect)then te access the tabs(object),
    // then we ask for specific task(query),
    // then we set "active:true" to access the the active tab ,
    // then we set the "currentWndow:true" by this if there are multiple chome windows are open in PC we choose the current one,
    //  and at the last we write a function to do a task
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){ 
        myLeads.push(tab[0].url)
        localStorage.setItem("myleads", JSON.stringify(myLeads))
        rander(myLeads);
    })
    
})


let RenderLeads = JSON.parse(localStorage.getItem("myLeads"))
if (RenderLeads) {
    myLeads = RenderLeads
    rander(myLeads)
}

deleteBtn = document.getElementById("delete-btn")

deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear()
    myLeads = []
    //         argument  
    rander(myLeads);
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // we use localStoragr to store the links even after the  page refresh 
    // localStorage only stores the string,but here myLeads in Array type so to convert the array to string
    // we use JSON.stringify(name_Of_Array)
    // but then we can not use operation like push and remove so we use it like
    //JSON.parse(arrayNAme) and store it in a variable
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    rander(myLeads)

})
//              parameters
function rander(Leads) {
    let listItem = ""
    for (let i = 0; i < Leads.length; i++) {
        //   listItem+="<li> <a  target='_blank' href=' "+myLeads[i]+" ' >"+myLeads[i]+"</a></li>"
        listItem += `
     <li>
         <a target="_blank" href="${Leads[i]}">
              ${Leads[i]}
         </a>
     </li>
     `
    }
    ulEl.innerHTML = listItem

}


// truthy
// falsy

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

//tmper letrals
// `${greeting}, ${name} ${emoji}`