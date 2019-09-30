const NAV_A = document.querySelectorAll("nav a")
const NAV_A_LENGTH = 4
const NAV_BAR = document.querySelector(".nav-bar")
const DROP_DOWN_CONTENT = document.querySelector(".drop-down-content")
var size = window.matchMedia("(max-width: 899px)")

function drop_down() {
    DROP_DOWN_CONTENT.classList.toggle("hide")
}

// hiding or displaying the different links to sections when changing the display size
function reveal(size) {
    // for width: 899px or below
    if (size.matches) { 
        for (var i = 0; i < NAV_A_LENGTH; i++) {
            NAV_A[i].classList.add("hide")
        }

        NAV_BAR.classList.remove("hide")
    } else { // for width above: 899px
        for (var i = 0; i < NAV_A_LENGTH; i++) {
            NAV_A[i].classList.remove("hide")
        }
        
        NAV_BAR.classList.add("hide")

        if(!DROP_DOWN_CONTENT.classList.contains("hide")) {
            DROP_DOWN_CONTENT.classList.toggle("hide")
        }
    }
}

// if the window is clicked, dropdown menu options will disappear
window.onclick = function(event) {
    console.log("testing 1")
    if (!event.target.matches(".nav-bar")) {
        console.log("testing 2")
        if(!DROP_DOWN_CONTENT.classList.contains("hide")) {
            DROP_DOWN_CONTENT.classList.toggle("hide")
            console.log("testing 3")
        }
    }
}

drop_down() // call function at run time
reveal(size) // call listener function at run time
size.addListener(reveal) // attach listener function on state changes
  


