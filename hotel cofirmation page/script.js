const menuBtn = document.querySelector("#menuBtn");
const sidebar = document.querySelector("#sidebar");

menuBtn.addEventListener("click", function () {

    sidebar.classList.toggle("open");

});


const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        sidebar.classList.remove("open");

    });

});



const copyBtn = document.querySelector("#copyBtn");
const wifiPassword = document.querySelector("#wifiPassword");
const copyMessage = document.querySelector("#copyMessage");

copyBtn.addEventListener("click", function () {

    const password = wifiPassword.textContent.trim();

    navigator.clipboard.writeText(password)
        .then(function () {

            copyMessage.style.display = "block";

            copyBtn.textContent = "Copied!";

            setTimeout(function () {

                copyMessage.style.display = "none";

                copyBtn.textContent = "Copy";

            }, 2000);

        })
        .catch(function () {

            alert("Unable to copy password.");

        });

});



const printBtn = document.querySelector("#printBtn");

printBtn.addEventListener("click", function () {

    window.print();

});

