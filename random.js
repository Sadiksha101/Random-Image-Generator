const imgContEl=document.querySelector(".image-container");
const btnEl=document.querySelector(".btn");
btnEl.addEventListener("click",()=>{
    addImg();
})
imgNum=10;
function addImg(){
    for (let index = 0; index < imgNum; index++) {
        const newImg=document.createElement("img");
        newImg.src=`https://picsum.photos/300?random = ${Math.floor(Math.random()*2000)}`;
        imgContEl.appendChild(newImg); 
        
    }
    
}