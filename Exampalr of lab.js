let components = [
{
    type:"computers" ,
    Quantity:24 ,
    running:20,
    Damage:4 ,
    comments: `
        <li> pc1 damage </li> 
        <li> pc2 damage </li> 
    `,
}, 
{
    type:"chairs" ,
    Quantity:26 ,
    running:23,
    Damage:3 ,
    comments: `  
        <li> pc1 damage </li> 
        <li> pla pla  </li> 
        <li> pla pla </li> 
    `,
}, 
{
    type:"Keyboards" ,
    Quantity:24 ,
    running:23,
    Damage:1 ,
    comments: `  
        <li> key damage </li> 
        <li> pla pla </li> 
    `,
} ,
{
    type:"Mouses" ,
    Quantity:26,
    running:26 , 
    Damage:0,
    comment:""
}
]
let computers= [
    {
        name:"pc1",
        staute:"yes"
    },
    {
        name:"pc2",
        staute:"no"
    },
    {
        name:"pc3",
        staute:"yes"
    },
    {
        name:"pc4",
        staute:"yes"
    },
    {
        name:"pc5",
        staute:"no"
    },
    {
        name:"pc6",
        staute:"yes"
    },
    {
        name:"pc7",
        staute:"yes"
    },
    {
        name:"pc8",
        staute:"no"
    }
]
var btns = document.getElementsByClassName("btn-primary");
var bodycom = document.getElementById("bodycom");
var bodycomutes = document.getElementById("bodycomutes");
var tcomputers=``
var cartona=``;
var alertt=document.getElementById("alert");
var writecomment = document.querySelector(".writecomment");
var input = document.querySelector(".form-control");
var addc = document.querySelector(".addc");
var comment = document.getElementsByClassName("comment");
var close = document.getElementById("close") 
function display(){
    for (i = 0; i < components.length; i++) {
        cartona += `
    <tr> 
        <td> ${i+1} </td> 
        <td> ${components[i].type} </td>
        <td> ${components[i].Quantity} </td>
        <td> ${components[i].running} </td>
        <td> ${components[i].Damage} </td>
        <td > <ul class="comment"> ${components[i].comments || "No Comments"}  </ul> </td>
        <td> <button onclick="add(${i})" class="btn btn-primary" >Add Comment</button> </td>
    `   
    }
    for(i=0 ; i<computers.length ; i++) {
        tcomputers+=`
        <tr>
            <td> ${i+1} </td>
            <td> ${computers[i].name} </td>
            <td> ${computers[i].staute} </td>
            <td> <button class="btn btn-outline-danger"> Connect </button>  </td>
        </tr>
        `
    }
    bodycom.innerHTML = cartona;
    bodycomutes.innerHTML= tcomputers; 
}
display()

addc.addEventListener("click", function () {
    let reg=/\w{2,}/ig;
    let stat=reg.test(input.value);
    if(stat) {
        alertt.classList.add("d-none")
        writecomment.style.display = "none";
        var index = this.getAttribute("data-index");
        comment[index].innerHTML += `<li> ${input.value} </li>`;
        components[index].comments += `<li> ${input.value} </li>`;
        input.value = "";   
    } else {
        alertt.classList.remove("d-none")
}
});
close.addEventListener("click" , function(){
    writecomment.style.display="none";
    alertt.classList.add("d-none");
    input.value=""
})
function add(index) {
    writecomment.style.display = "block";
    addc.setAttribute("data-index", index); 
}