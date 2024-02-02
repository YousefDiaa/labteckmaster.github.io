let components = [
{
    type: "computers",
    Quantity: 24,
    running: 20,
    Damage: 4,
    comments: ["pc1 damage" , "Pc2 damage"],
},
{
    type: "chairs",
    Quantity: 26,
    running: 23, 
    Damage: 3,
    comments:  ["pc1 damage" , "Pc2 damage"]  , 
},
{
    type: "Keyboards",
    Quantity: 24,
    running: 23,
    Damage: 1,
    comments: ["pc1 damage" , "Pc2 damage"],
},
{
    type: "Mouses",
    Quantity: 26,
    running: 26,
    Damage: 0,
    comments:[] , 
}
]
let computers= [
    {
        name:"pc1",
        staute:"?"
    },
    {
        name:"pc2",
        staute:"?"
    },
    {
        name:"pc3",
        staute:"?"
    },
    {
        name:"pc4",
        staute:"?"
    },
    {
        name:"pc5",
        staute:"?"
    },
    {
        name:"pc6",
        staute:"?"
    },

]
var btns = document.getElementsByClassName("btn-primary");
var bodycom = document.getElementById("bodycom");
var bodycomutes = document.getElementById("bodycomutes");
var alertt=document.getElementById("alert");
var writecomment = document.querySelector(".writecomment");
var input = document.getElementById("inputcomment");
var addc = document.querySelector(".addc");
var comment = document.getElementsByClassName("comment");
var close = document.getElementById("close") 
function display(){
    var tcomputers=``
    var cartona=``;
    for (i = 0; i < components.length; i++) {
        cartona += `
    <tr> 
        <td> ${i+1} </td> 
        <td> ${components[i].type} </td>
        <td> ${components[i].Quantity} </td>
        <td> ${components[i].running} </td>
        <td> ${components[i].Damage} </td>
        <td > <ul class="comment"> ${ components[i].comments.length==0? "No Comments" : components[i].comments.join(" || ")}  </ul> </td>
        <td> <button onclick="add(${i})" class="btn btn-outline-primary" >Add Comment</button> </td>
    `  
}
    for(i=0 ; i<computers.length ; i++) {
        tcomputers+=`
        <tr>
            <td> ${i+1} </td>
            <td> ${computers[i].name} </td>
            <td> ${computers[i].staute} </td>
            <td> <button class="btn btn-outline-info"> Connect </button>  </td>
        </tr>
        `
    }
    bodycom.innerHTML = cartona;
    bodycomutes.innerHTML= tcomputers; 
}
display()
function add(index) {
    writecomment.style.display="block";
    addc.onclick=function(){
        let reg = /\w{2,}/ig; 
        let stat = reg.test(input.value);
        if(stat) {
            alertt.classList.add("d-none")
            writecomment.style.display = "none";
            components[index].comments.push(input.value)
            display() ;
            input.value = "";
        } else {
            alertt.classList.remove("d-none")
        }
    }
} 
close.addEventListener("click" , function(){
    writecomment.style.display="none";
    alertt.classList.add("d-none");
    input.value="" ;
}) ;
