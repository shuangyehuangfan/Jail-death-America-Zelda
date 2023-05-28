let data = [];

// Load the dataset
Papa.parse('all_deaths.csv', {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: function(results) {
        data = results.data;
    }
});

function searchData(event) {
    event.preventDefault();
    const searchValue = document.getElementById('search-bar').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';  // Clear previous results
    data.forEach(item => {
        for (const property in item) {
            if (item[property].toString().includes(searchValue)) {
                // If the search value is in the item, show it
                resultsDiv.innerHTML += JSON.stringify(item) + '<br>';
                break;
            }
        }
    });
}
