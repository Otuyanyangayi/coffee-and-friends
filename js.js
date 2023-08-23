const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchForm.addEventListener('submit' , function(event){
    event.preventDefault();

    const searchTerm = searchInput.value;
    const resultHTML = `<h1>Search results for: ${searchTerm}</h1>` 

    searchResults.innerHTML = resultHTML;
})


