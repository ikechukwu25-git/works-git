const technologyButtons =
    document.querySelectorAll(".technology-selector button");


const technologyImages =
    document.querySelectorAll(".technology-images img");


const technologyContent =
    document.querySelectorAll(".technology-content");



technologyButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        technologyImages.forEach((image) => {
            image.style.display = "none";
        });


        technologyContent.forEach((content) => {
            content.style.display = "none";
        });


        technologyImages[index].style.display = "block";


        technologyContent[index].style.display = "block";

    });

});