(function navListeners() {
    const burgerIcon = document.querySelector(".header__navButton");
    const nav = document.querySelector(".header__nav");
    const dropdown = document.querySelectorAll(".header__nav__group__dropdownBtn");
    const dropdownList = document.querySelectorAll(".header__nav__group__dropdownList")

    // Toggle Burger Icon and Nav
    burgerIcon.addEventListener("click", () => {
        nav.classList.toggle("expanded");
        burgerIcon.classList.toggle("active");

        // Reset dropdown and dropdownList on every burgerIcon click
        if(!nav.classList.contains("expanded")) {
            dropdown.forEach(item => {
                item.classList.remove("expanded");
            })
            dropdownList.forEach(item => {
                item.classList.remove("expanded");
            })
        }
    });

    dropdown.forEach( (item, index) => {
        item.addEventListener("click", () => {
            item.classList.toggle("expanded");
            dropdownList[index].classList.toggle("expanded")
        })
    })


})();