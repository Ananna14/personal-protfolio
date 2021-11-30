// -----------------------toggol-navbar-------------------------------
// ------------------------------------------------------------------
const navToggler = document.querySelector(".nav-toggle");
navToggler.addEventListener("click", ()=>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling")
    // console.log('hi')
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out")
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

// ----------------------Active-section--------------------
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling")
        }
        setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
        },500);
    }
})

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
