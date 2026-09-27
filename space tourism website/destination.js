const destinationButtons =
    document.querySelectorAll(".destination-tabs button");

const destinationImages =
    document.querySelectorAll(".destination-images img");

const destinationContent =
    document.querySelectorAll(".destination-content");


destinationButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        destinationImages.forEach((image) => {
            image.style.display = "none";
        });


        destinationContent.forEach((content) => {
            content.style.display = "none";
        });


        destinationImages[index].style.display = "block";


        destinationContent[index].style.display = "block";

    });

});