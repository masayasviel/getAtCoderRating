const getRatingButton = document.getElementById("getRatingButton");

const colouring = rate=>{
    if(0 <= rate && rate <= 399) return "#848484";
    else if(rate <= 799) return "#8A4B08";
    else if(rate <= 1199) return "#04B404";
    else if(rate <= 1599) return "#00FFFF";
    else if(rate <= 1999) return "#0000FF";
    else if(rate <= 2399) return "#FFFF00";
    else if(rate <= 2799) return "#FF8000";
    else if(rate <= 3199) return "#FF0000";
    else return "#000000";
};

getRatingButton.addEventListener("click", ()=>{
    let username = document.getElementById("nameBox").value;
    if(!username.trim()) username= "tourist";
    const query = "http://localhost:3000/?username=" + username;
    fetch(query, {
        mode: "cors",
      })
        .then(res=>res.json())
        .then(res=>{
            let div = document.createElement("div");
            const color = colouring(res.rating);
            div.textContent = username + ": " + res.rating;
            div.setAttribute("color", color);
            document.getElementById("ratings").appendChild(div);
        }, err=>console.error('Error:', err));
}, false);