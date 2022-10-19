window.onload=function(){
    
    var bodomenu = document.getElementById ("botaodomenu")
    bodomenu.addEventListener("click", funcao)

    function funcao () {
        const nav = document.getElementById ("link")
        nav.classList.toggle ('active')
        const nav2 = document.getElementById ("link2")
        nav2.classList.toggle ('active')
    }
    
}

 