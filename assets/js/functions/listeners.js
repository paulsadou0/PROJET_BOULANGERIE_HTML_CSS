var nav = document.getElementById('menu')
var fa_bars = document.getElementById('.navbar .menu-top .menu-left bars')
var listes = document.querySelectorAll('.aside ul li')

/**
 * objet contenant les gestionnaires d'évènements
 **/
var listenersFunctions = {
    opeNav: () =>{
        nav.style.display = "block"
    },
    closeNav: () =>{
        nav.style.display = "none"
    }
}
/**
 * Fonction qui réalise les abonnements
 */
var setupListeners = () =>{
    bars.onmouseover = listenersFunctions.opeNav
    nav.onmouseleave= listenersFunctions.closeNav

    for (let index = 0; index < listes.length; index++) {
        const li = listes[index];
        li.onclick = listenersFunctions.closeNav
        
    }
}

