// Get the form element
var form = document.querySelector('form');

// Load the dataset
Papa.parse("all_death.csv", {
    download: true,
    header: true,
    complete: function(results) {
        window.dataset = results.data;
    }
});

// Listen for the form submission
document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();
    search();
});

function search() {
    var input, filter, filteredData;
    input = document.getElementById('search-bar');
    filter = input.value.toUpperCase();
    // Filter the dataset based on the filter text
    filteredData = window.dataset.filter(function(row) {
        // Check if any of the fields in the row match the filter text
        return Object.values(row).some(function(field) {
            return field.toUpperCase().includes(filter);
        });
    });
    // Now you have the filtered data. You can display this to the user in some way.
    console.log(filteredData);
}
