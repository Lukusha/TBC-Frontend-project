function scrollLeft() {
    const cards = document.querySelector('.cards');
    const cardsContainer = document.querySelector('.cards-container');

    cards.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}

function scrollRight() {
    const cards = document.querySelector('.cards');
    const cardsContainer = document.querySelector('.cards-container');

    cards.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}

$(document).ready(function () {
    // Initialize Bootstrap dropdowns
    $('.dropdown-toggle').dropdown();

    // Handle dropdown item selection
    $('.dropdown-item').on('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the selected language text
        var selectedText = $(this).text();

        // Update the selected language span
        $('#selectedLanguage').text(selectedText);

        // Hide the dropdown menu
        $('.dropdown-menu').removeClass('show');
    });
});

$(document).ready(function () {


    // Add event listeners for the scroll buttons
    document.querySelector('.scroll-button.left').addEventListener('click', scrollLeft);
    document.querySelector('.scroll-button.right').addEventListener('click', scrollRight);
});


