function menuMobile(){
    var menu = document.getElementById("menu-mobile");
    var openMenu = document.getElementById("open-menu");
    if(menu.style.display === "flex"){
        menu.style.display = "none";    
        openMenu.style.left = "0px";    
    } else {
        menu.style.display = "flex";
        openMenu.style.left = "-200px"; 
    }
}

function alerta(){
    alert("Mensagem Enviada!!");   
}
