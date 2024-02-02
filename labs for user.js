let labs=[
    {
        name:"LAB1" ,
        Desc:" lab 1 in the Administration building And in the second round" ,
        img:"img1.jpeg" ,

    } ,
    {
        name:"LAB2" ,
        Desc:" lab 2 in the Administration building And in the second round" ,
        img:"img2.jpeg",

    } ,
    {
        name:"LAB3" ,
        Desc:" lab 3 in the Administration building And in the second round" ,
        img:"img3.jpeg" ,
    } ,
    {
        name:"LAB4" ,
        Desc:" lab 4 in the Administration building And in the second round" ,
        img:"img4.jpeg" ,
    } , 
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
                            <a class="card__button"  href="Exampale of lab for user.html">View</a>
                        </div> 
                    </div>
                </article>
        `
    }
    labat.innerHTML=cartona
 }

displaylabs()



