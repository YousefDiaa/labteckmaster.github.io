let labs=[
    {
        name:"LAB 1" ,
        Desc:" lab 1 in the Administration building And in the second round" ,
        img:"img1.jpeg" ,
    },
    {
        name:"LAB 2" ,
        Desc:" lab 2 in the Administration building And in the second round" ,
        img:"img2.jpeg",
    }, 
    {
        name:"LAB 3" ,
        Desc:" lab 3 in the Administration building And in the second round" ,
        img:"img3.jpeg" ,
    },
    {
        name:"LAB 4" ,
        Desc:" lab 4 in the Administration building And in the second round" ,
        img:"img4.jpeg" ,
    },
]


let labat=document.getElementById("labat")

function displaylabs() {
    let cartona=`` ;
    for(i=0 ; i<labs.length ; i++) {
        cartona+=`
                        <article class="card">
                    <img class="card__background" src="${labs[i].img}" alt="IMG_can't dawnload" />
                    <div class="card__content | flow">
                        <div class="card__content--container | flow">
                            <h2 class="card__title">${labs[i].name}</h2>
                            <p class="card__description">
                                ${labs[i].Desc || "No Descraption"}
                            </p>
                        </div>
                        <div>
                            <a class="card__button" href="Exampale of lab for admin.html">View</a>
                            <button onclick="editlab(${i})" class="card__button" >Edit</button>
                            <button onclick="deletelab(${i})" id="deletelab" class=" card__button" btn btn-danger" >Delete</button>
                            
                        </div> 
                    </div>
                </article>
        `
    }
    cartona+=`<div class="addlab" id="addlabc">
                    <button id="addlab" onclick="addnewlab()" class="btn btn-outline-dark"> <i class="fa-solid fa-plus"></i> Create new Lab
                    </button>
                </div>`
    labat.innerHTML=cartona
 }

displaylabs()




let imgs = document.querySelectorAll(".img");
var src = null;
let addlabcont=document.getElementById("addlabc");
let addlab = document.getElementById("addlab");
let modellab = document.getElementById("modellab");
let createlab = document.getElementById("createlab");
var links = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"];
let close = document.getElementById("close");
let contoflabat = document.getElementById("labat");
let labname = document.getElementById("name");
let labinfo = document.getElementById("info");
imgs.forEach(function(img){
    img.onclick = function () {
        imgs.forEach(function (i) { 
            i.classList.remove("active");
        })
        img.classList.add("active"); 
        src = img.getAttribute("src")
    }
})


function addnewlab() {
    createlab.innerHTML="Create Lab"
    modellab.style.display = "block";
    createlab.onclick = function () {
        let ex = /\w{3,}/ig;
        let stat = ex.test(labname.value);
        let random = Math.floor(Math.random() * links.length);
        if (stat){
            labname.classList.remove("is-invalid");
            modellab.style.display = "none";
            let newlab = {
                name:labname.value,
                Desc:labinfo.value,
                img:src || links[random],
            }
            labs.push(newlab) ;
            displaylabs()
            labname.value = ""; 
            labinfo.value = "";
            src=null;
            imgs.forEach(function (img) {
                img.classList.remove("active");
            })
        } else {
            labname.classList.add("is-invalid");
        }
    }
        close.onclick = function () {
        modellab.style.display = "none";
        labname.value="";
        labinfo.value="";
        imgs.forEach(function (img) {
            img.classList.remove("active");
    })
    }
}

function editlab(index) {
    modellab.style.display="block";
    createlab.innerHTML="Edit Lab"
    let random = Math.floor(Math.random() * links.length);

    labname.value=labs[index].name;
    labinfo.value=labs[index].Desc || "No Descraption" ;
    createlab.onclick=function() {
        labs[index].name=labname.value ;
        labs[index].Desc=labinfo.value ;
        labs[index].img=src || links[random] ;
        displaylabs();
        modellab.style.display="none" ;
        labname.value="";
        labinfo.value="";
        src=null;
        imgs.forEach(function (img) {
            img.classList.remove("active");
        })
    }
    close.onclick = function () {
        modellab.style.display = "none";
        labname.value="";
        labinfo.value="";
        imgs.forEach(function (img) {
            img.classList.remove("active");
        })
    }
}


let mssfordeletelab=document.getElementById("mssfordeletelab") ; 
let yes=document.getElementById("yes") ;
let no =document.getElementById("no") ; 
let closemssforadmin =document.getElementById("closemssforadmin") ;
function deletelab(index) {
    mssfordeletelab.classList.replace("d-none" , "d-block") ;
    yes.onclick=function() {
        labs.splice(index , 1); 
        displaylabs()
        mssfordeletelab.classList.replace("d-block" , "d-none") ;
    }
    no.onclick=function(){
        mssfordeletelab.classList.replace("d-block" , "d-none") ;
    }
    closemssforadmin.onclick=function() {
        mssfordeletelab.classList.replace("d-block" , "d-none") ;
    }
}