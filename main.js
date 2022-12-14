(function navListeners() {
    const burgerIcon = document.querySelector(".header__burgerButton");
    const nav = document.querySelector(".header__nav");
    const dropdown = document.querySelectorAll(".header__nav__dropdownBtn");
    const dropdownList = document.querySelectorAll(".header__nav__dropdownList")

    // Toggle Burger Icon and Nav
    burgerIcon.addEventListener("click", () => {
        nav.classList.toggle("expanded");
        burgerIcon.classList.toggle("active");

        // Reset dropdown and dropdownList on every burgerIcon click
        if(nav.classList.contains("expanded")) {
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
            // Close the siblings when switching
            for(let i = 0; i < dropdown.length; i++) {
                if (i !== index) {
                    dropdown[i].classList.remove("expanded")
                    dropdownList[i].classList.remove("expanded")
                }
            }

            item.classList.toggle("expanded");
            dropdownList[index].classList.toggle("expanded")
        })
    })

})();