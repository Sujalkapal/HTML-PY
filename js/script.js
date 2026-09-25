const searchBox = document.querySelector("main input");

searchBox.addEventListener("focus", function () {
    searchBox.style.border = "2px solid #e23744";
});

searchBox.addEventListener("blur", function () {
    searchBox.style.border = "none";
});

searchBox.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        const searchText = searchBox.value.trim();

        if (searchText === "") {
            alert("Please enter a restaurant, cuisine or dish.");
        } else {
            alert("Searching for: " + searchText);
        }
    }
});


/* Logo click animation */

const logo = document.querySelector(".logo img");

logo.addEventListener("click", function () {

    logo.style.transform = "scale(0.8)";

    setTimeout(function () {
        logo.style.transform = "scale(1)";
    }, 200);
});


/* Header link animation */

const links = document.querySelectorAll("header ul li a");

links.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        alert("This feature will be added soon!");
    });

});