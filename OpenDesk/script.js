let toggleBtn= ()=>{
    var elemnt = document.querySelector(".mobile-responsive");
    var humMenu = document.querySelector(".humbger_menu ")
  if(elemnt.style.display == "block"){
    elemnt.style.display = "none"

    humMenu.classList.remove("fa-xmark")
    humMenu.classList.add("fa-bars")
    humMenu.style.color="white"

  }else{
    elemnt.style.display = "block"
    humMenu.style.color="grey"


    humMenu.classList.remove("fa-bars")
    humMenu.classList.add("fa-xmark")
}

}
