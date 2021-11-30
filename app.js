document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("view-project-btn")){
      togglePortfolioPopup()
      document.querySelector(".protfolio-popup").scrollTo(0,0);
      protfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup(){
    document.querySelector(".protfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hiden-scrolling");
    document.querySelector(".main").classList.toggle("fade-out")
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

//hidden popup when clicking outside of it
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup()
    };
})

function protfolioItemDetails(protfolioItem){
   document.querySelector(".pp-thumbnail img").src = 
   protfolioItem.querySelector(".protfolio-item-thumbnail img").src;

   document.querySelector(".pp-header h3").innerHTML = 
   protfolioItem.querySelector(".protfolio-item-title").innerHTML;

   document.querySelector(".pp-body").innerHTML = 
   protfolioItem.querySelector(".protfolio-item-details").innerHTML;
}