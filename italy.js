//background hovery navbar
window.addEventListener("scroll", function(){
    var nav=this.document.querySelector(".navbar");
    nav.classList.toggle("nv", scrollY> 0);

    var logo=this.document.querySelector(".logo");
    logo.classList.toggle("logo2", scrollY> 0);
  
    var navList=this.document.querySelectorAll(".a");
   for(var i=0; i<navList.length; i++){
    navList[i].classList.toggle("a2", scrollY> 0);
   }
})



// scroll reveal


ScrollReveal({
    reset: false,
    distance: "90px",
    duration: 2000,
    delay: 300,
  });
  ScrollReveal().reveal(".solo-img,.logo,.list,.sign-in,.Italy-three,.couple-text,.couple-button, .family-text", {origin:"top"});
  ScrollReveal().reveal(".bottom-text,.solo-text,.couple-img,.family-img", {origin:"bottom"});
  ScrollReveal().reveal(".fixed-bg-text-rigth", {origin:"right"});
  ScrollReveal().reveal(".fixed-bg-text-left", {origin:"left"});

