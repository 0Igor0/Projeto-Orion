var x=0;
var barra= document.querySelector(".nav-list")
var sombra = document.querySelector(".sombra")


sombra.addEventListener("click",function(){
  desativarbarra()
  sombra.classList.remove("sombra-ativada")
})

class MobileNavbar {
  
    constructor(mobileMenu, navList, navLinks) {//mobile menu sao as 3 barrinhas
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      
    
      if(x%2==0){
        barra.style.backgroundColor = "#23232e";
        sombra.classList.add("sombra-ativada")
      }
      else{
        barra.style.backgroundColor = "";
      }
      x++
     
      ativarbarra()

    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
    
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  /*pendencias: 
  -
  */