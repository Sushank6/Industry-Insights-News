
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  const searchQuery = document.getElementById("search-input").value;

  performSearch(searchQuery);
});

function performSearch(query) {
 

 
  console.log(`Performing search for "${query}"`);
}

const categoryFilter = document.getElementById("categoryimport-filter");
const dateFilter = document.getElementById("date-filter");

categoryFilter.addEventListener("change", applyFilters);
dateFilter.addEventListener("change", applyFilters);

function applyFilters() {
  const selectedCategory = categoryFilter.value;
  const selectedDate = dateFilter.value;

  filterContent(selectedCategory, selectedDate);
}

function filterContent(category, date) {
 

  console.log(`Filtering content by category: ${category}, date: ${date}`);
}

const sortBySelect = document.getElementById("sort-by");
const sortButton = document.getElementById("sort-button");

sortButton.addEventListener("click", sortContent);

function sortContent() {
  const selectedOption = sortBySelect.value;

 
  if (selectedOption === "date") {
    sortByDate();
  } else if (selectedOption === "popularity") {
    sortByPopularity();
  }
}

/
function sortByDate() {
 

 
  console.log("Sorting content by date");
}


function sortByPopularity() {
  

 
  console.log("Sorting content by popularity");
}


const searchInput = document.getElementById("search-input");
const autocompleteList = document.getElementById("autocomplete-list");
searchInput.addEventListener("input", handleAutocomplete);


function handleAutocomplete() {
  const searchQuery = searchInput.value;

 
  autocompleteList.innerHTML = "";

  
  const suggestions = generateAutocompleteSuggestions(searchQuery);
  displayAutocompleteSuggestions(suggestions);
}


function generateAutocompleteSuggestions(query) {
 

  return ["News Article 1", "News Article 2", "News Article 3"];
}

function displayAutocompleteSuggestions(suggestions) {
  for (const suggestion of suggestions) {
    const listItem = document.createElement("li");
    listItem.textContent = suggestion;

    autocompleteList.appendChild(listItem);
  }
}
export default App;

   