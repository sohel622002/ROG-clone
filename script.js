const closeIcon = document.querySelector(".cross-icon")

const mobileNavigation = document.querySelector(".mobile-navigation")
closeIcon.addEventListener("click", () => {
    mobileNavigation.style.transform = 'translateX(-101%)'
})

const naviBars = document.querySelector(".navigation-bars")

naviBars.addEventListener("click", () => {
    mobileNavigation.style.transform = 'translateX(-0%)'    
})