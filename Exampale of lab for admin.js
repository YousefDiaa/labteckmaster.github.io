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
let computers = [
{
    name: "pc1",
    staute: "?"
},
{
    name: "pc2",
    staute: "?"
},
{
    name: "pc3",
    staute: "?"
},
{
    name: "pc4",
    staute: "?"
},
{
    name: "pc5",
    staute: "?"
},

]
var btns = document.getElementsByClassName("btn-primary");
var bodycom = document.getElementById("bodycom");
var bodycomutes = document.getElementById("bodycomutes");
var alertt = document.getElementById("alert");
var writecomment = document.querySelector(".writecomment");
var input = document.getElementById("inputcomment");
var addc = document.querySelector(".addc");
var comment = document.getElementsByClassName("comment");
var close = document.getElementById("close");
var editation = document.getElementById("editation");
var addedit = document.getElementById("Edit"); 
var inputtype=document.getElementById("type");
var inputquant =document.getElementById("quantity");
var inputrun =document.getElementById("run");
var inputdamage =document.getElementById("damage");
var inputqcomments =document.getElementById("comments");
var closeEdatation = document.getElementById("closeedit");
var alertfortype=document.getElementById("alertfortype");
var alertforq=document.getElementById("alertforq");
var alertforsum=document.getElementById("alertforsum");
var contaddpc=document.getElementById("contaddpc");
var addpc=document.getElementById("addpc");
var inputnamepc=document.getElementById("namepc");
var inputpcstat=document.getElementById("stauteconntct");
var createpc=document.getElementById("createpc");
var alertforstatpc=document.getElementById("alertforstatpc");
var alertfornamepc=document.getElementById("alertfornamepc");
var closeaddpc=document.getElementById("closeaddpc")
var contofeditpc=document.getElementById("contofeditpc")
var nameofedit=document.getElementById("editnamepc") ;
var btnedirpc=document.getElementById("btneditpc");
var alertnameedit=document.getElementById("alertfornameedit")
var closeeditpc=document.getElementById("closeeditpc")


function display() {
    var cartona = ``;
for (i = 0; i < components.length; i++) {
    cartona += `
    <tr> 
        <td> ${i + 1} </td> 
        <td> ${components[i].type} </td>
        <td> ${components[i].Quantity} </td>
        <td> ${components[i].running} </td>
        <td> ${components[i].Damage} </td>
        <td > <ul class="comment"> ${ components[i].comments.length==0? "No Comments" : components[i].comments.join(" || ")}  </ul> </td>
        <td> <button onclick="add(${i})" class="btn btn-outline-primary" >Add Comment</button> </td>
        <td> <button onclick="edit(${i})" class="btn btn-outline-info" >Edit</button> </td>
        <td> <button onclick="removecom(${i})" class="btn btn-outline-danger" >Remove</button> </td>

    `
}
var tcomputers = ``;
for (i = 0; i < computers.length; i++) {
    tcomputers += `
    <tr>
        <td> ${i + 1} </td>
        <td> ${computers[i].name} </td>
        <td> ${computers[i].staute} </td>
        <td> <button class="btn btn-outline-info"> Connect </button>  </td>
        <td> <button onclick="editpc(${i})" class="btn btn-outline-primary"> Edit </button>  </td>
        <td> <button onclick="deletee(${i})" class="btn btn-outline-danger"> Remove </button>  </td>
    </tr>
`
}
bodycom.innerHTML = cartona;
bodycomutes.innerHTML = tcomputers;
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




close.addEventListener("click", function () {
    writecomment.style.display = "none";
    alertt.classList.add("d-none");
    input.value = ""
})

function lol() {
    howwritecomment.classList.replace("d-none" , "d-block")
}

var howwritecomment =document.getElementById("howwritecomment")
function edit(index) {
    howwritecomment.classList.replace( "d-block" , "d-none" )
    addedit.innerHTML="Edit"
    editation.classList.replace("d-none","d-block");
    inputtype.value=components[index].type;
    inputquant.value=components[index].Quantity;
    inputrun.value=components[index].running;
    inputdamage.value=components[index].Damage;
    inputqcomments.value=components[index].comments.join(" , ")||"No Comments";
    addedit.onclick=function(){
        let regnumber=/\d{1,}/ig;
        let regtype=/\w{2,}/ig;
        let typestat=regtype.test(inputtype.value);
        let qstaut=regnumber.test(inputquant.value);
        let sum= +inputrun.value + +inputdamage.value === +inputquant.value;
        if(typestat && qstaut && (sum === true || (inputrun.value==="" && inputdamage.value===""))) {
            components[index].type = inputtype.value;
            components[index].Quantity = inputquant.value;
            components[index].running = inputrun.value || "Unknown";
            components[index].Damage = inputdamage.value || "Unknown";
            components[index].comments =inputqcomments.value=="" ?[]: inputqcomments.value.split(",");
            editation.classList.replace("d-block", "d-none")
            alertforq.classList.replace("d-block", "d-none")
            alertforsum.classList.replace("d-block", "d-none")
            alertfortype.classList.replace("d-block", "d-none")
            display() ; 
            howwritecomment.classList.replace( "d-block" , "d-none" ) ; 
        } else {
            if(typestat==false) {
                alertfortype.classList.replace("d-none" , "d-block")
                alertforq.classList.replace("d-block", "d-none")
                alertforsum.classList.replace("d-block", "d-none")
            } else if(qstaut === false) {
                alertfortype.classList.replace("d-block", "d-none")
                alertforq.classList.replace("d-none", "d-block")
                alertforsum.classList.replace("d-block", "d-none")
            } else if(sum === false) {
                alertfortype.classList.replace("d-block", "d-none")
                alertforq.classList.replace("d-block", "d-none")
                alertforsum.classList.replace("d-none", "d-block")
            }
        }
}
}
closeEdatation.addEventListener("click" , function(){
    editation.classList.replace("d-block" , "d-none");
    editation.classList.replace("d-block", "d-none")
    alertforq.classList.replace("d-block", "d-none")
    alertforsum.classList.replace("d-block", "d-none")
    alertfortype.classList.replace("d-block", "d-none");
    howwritecomment.classList.replace( "d-block" , "d-none" ) ; 
})


var addcom=document.getElementById("addcom");
addcom.onclick=function(){
    addedit.innerHTML="Add"
    howwritecomment.classList.replace( "d-block" , "d-none" ) ; 
    inputtype.value="";
    inputquant.value="";
    inputrun.value="";
    inputdamage.value="";
    inputqcomments.value="";
    editation.classList.replace("d-none" , "d-block");
    addedit.onclick=function(){
        let regnumber=/\d{1,}/ig;
        let regtype=/\w{2,}/ig;
        let typestat=regtype.test(inputtype.value);
        let qstaut=regnumber.test(inputquant.value);
        let sum= +inputrun.value + +inputdamage.value === +inputquant.value;
        if(typestat && qstaut && (sum === true || (inputrun.value==="" && inputdamage.value===""))) {
            let newcom={
                type: inputtype.value,
                Quantity: inputquant.value,
                running: inputrun.value||"Unknown",
                Damage: inputdamage.value||"Unknown",
                comments:  inputqcomments.value=="" ?[]: inputqcomments.value.split(",") //` <li> ${inputqcomments.value || "No Comments"}</li> `
            }
            components.push(newcom);
            display()
            editation.classList.replace("d-block" , "d-none");
            alertforq.classList.replace("d-block", "d-none")
            alertforsum.classList.replace("d-block", "d-none")
            alertfortype.classList.replace("d-block", "d-none")
        } else {
            if(typestat===false) {
                alertfortype.classList.replace("d-none" , "d-block")
                alertforq.classList.replace("d-block", "d-none")
                alertforsum.classList.replace("d-block", "d-none")
            } else if(qstaut === false) {
                alertfortype.classList.replace("d-block", "d-none")
                alertforq.classList.replace("d-none", "d-block")
                alertforsum.classList.replace("d-block", "d-none")
            } else if(sum === false) {
                alertfortype.classList.replace("d-block", "d-none")
                alertforq.classList.replace("d-block", "d-none")
                alertforsum.classList.replace("d-none", "d-block")
            }
        }
    }

}
function removecom(index) {
    components.splice(index,1);
    display()
}


addpc.onclick=function(){
    contaddpc.classList.replace("d-none" , "d-block")
    createpc.onclick=function(){
        let regtype=/\w{2,}/ig;
        let stautofname=regtype.test(inputnamepc.value);
        if(stautofname==true) {
        contaddpc.classList.replace("d-block","d-none" )
        let newpc={
            name:inputnamepc.value,
            staute:"?"
        }
        computers.push(newpc);
        display()
        inputnamepc.value="";
        inputpcstat.value="";
        alertfornamepc.classList.replace( "d-block" , "d-none");
        } else {
            
                alertfornamepc.classList.replace("d-none" , "d-block");
            
        }
        }
    }

closeaddpc.onclick=function(){
    contaddpc.classList.replace("d-block" , "d-none");
    alertfornamepc.classList.replace( "d-block" , "d-none");
    inputnamepc.value="";
    inputpcstat.value="";
}



function editpc(index) {
    contofeditpc.classList.replace("d-none" , "d-block");
    nameofedit.value=computers[index].name;
    btnedirpc.onclick=function(){
        let regname=/\w{2,}/ig;
        let statname=regname.test(nameofedit.value);
        if(statname===true) {
            computers[index].name=nameofedit.value;
            display()
            nameofedit.value=""
            contofeditpc.classList.replace("d-block" , "d-none")
            alertnameedit.classList.replace(  "d-block" , "d-none")
        } else {
            alertnameedit.classList.replace("d-none" , "d-block")
        }
    }
} 
closeeditpc.onclick=function(){
    contofeditpc.classList.replace("d-block" , "d-none");
    alertnameedit.classList.replace(  "d-block" , "d-none");
}


function deletee(index){
    computers.splice(index,1);
    display()
}