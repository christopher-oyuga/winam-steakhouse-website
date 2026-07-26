// ================= RESERVATION BUTTON FUNCTION =================

const reserveButton = document.getElementById("reserveBtn");


if(reserveButton){

    reserveButton.addEventListener("click", function(){

        alert(
            "Thank You for Trusting us. Your position is RESERVED."
        );

    });

}
// ================= STORY IMAGE ANIMATION =================

const storyBox = document.querySelector(".story-box");
const storyImage = document.querySelector(".story-image");


if (storyBox && storyImage) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                storyImage.classList.add("show");

                observer.unobserve(storyBox);

            }

        });

    }, {

        threshold:0.3

    });


    observer.observe(storyBox);

}


// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const closeMenu = document.getElementById("closeMenu");
const navLinks = document.getElementById("navLinks");


if(menuToggle && navLinks){

    menuToggle.addEventListener("click", ()=>{

        navLinks.classList.add("active");

    });


}


if(closeMenu && navLinks){

    closeMenu.addEventListener("click", ()=>{

        navLinks.classList.remove("active");

    });

}
