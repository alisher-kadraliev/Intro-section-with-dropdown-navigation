// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    const navBtns = document.querySelector('.nav__btns')
    const secHero = document.querySelector('.section__hero')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
            navBtns.classList.add('active')
            secHero.classList.add('all')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
            navBtns.classList.remove('active')
            secHero.classList.remove('all')

        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
            navBtns.classList.remove('active')
            secHero.classList.remove('all')

        }
    })
}
burgerMenu()


//dropdown

function submenu(){
    const submenu = document.querySelector(".submenu")
    const trigger = document.querySelector(".with__submenu")
    const arrow = document.querySelector(".submenu__arrow")

    trigger.addEventListener("click", () => {
        submenu.classList.toggle("active")
        arrow.classList.toggle("active")
    } )
}
submenu()




function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
