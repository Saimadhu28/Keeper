let display = document.querySelector(".display");

function addtext(){
    let text = document.getElementById("text").value;
    if(text===""){
        return;
    }
    let date = new Date().toLocaleString();
    localStorage.setItem(date,text);
    document.getElementById("text").value="";
}


function displayall(){
    display.innerHTML = "";
    for(let i=0;i<localStorage.length;i++){
        let key = localStorage.key(i);
        let val = localStorage.getItem(key);
        let card = document.createElement("div");
        card.textContent = `Date Created: ${key}\n${val}`;
        display.appendChild(card);
    }
}


// to clear all the local storage
function deleteall(){
    display.innerHTML = "";
    localStorage.clear();

}


