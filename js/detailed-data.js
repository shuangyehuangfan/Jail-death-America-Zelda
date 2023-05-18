window.addEventListener('DOMContentLoaded', (event) => {
    // Get the dropdown menu element
    var dropdown = document.getElementById('parameters-dropdown');

    // Get the content div
    var contentDiv = document.getElementById('parameter-content');

    // Add an event listener for dropdown menu change
    dropdown.addEventListener('change', function() {
        // Determine the HTML file to fetch based on the selected option
        var filename;
        switch (this.value) {
            case 'Suicide':
                filename = 'Suicide.html';
                break;
            case 'Drugs / Alcohol':
                filename = 'DrugsAlcohol.html';
                break;
            // add more cases as needed
        }

        // Fetch and display the HTML file
        if (filename) {
            fetch(filename)
            .then(response => response.text())
            .then(text => contentDiv.innerHTML = text);
        } else {
            contentDiv.innerHTML = '';
        }
    });
});
