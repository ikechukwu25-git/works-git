const crewButtons =
    document.querySelectorAll(".crew-selector input");

const crewImages =
    document.querySelectorAll(".crew-image img");

const crewMembers =
    document.querySelectorAll(".crew-member");


crewButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        crewImages.forEach((image) => {
            image.style.display = "none";
        });


        crewMembers.forEach((member) => {
            member.style.display = "none";
        });


        crewImages[index].style.display = "block";


        crewMembers[index].style.display = "block";

    });

});