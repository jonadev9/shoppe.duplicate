document.addEventListener("DOMContentLoaded", function () {
  // Sample data for demonstration
  const sampleData = [
    { id: 1, name: "Baju" },
    { id: 2, name: "Celana" },
    { id: 3, name: "Kaos Kaki" },
    { id: 4, name: "Pistol" },
    { id: 5, name: "Mainan" },
    // Add more sample data as needed
  ];

  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  if (searchInput && searchResults) {
    searchInput.addEventListener("input", function () {
      const query = searchInput.value.toLowerCase();
      searchResults.innerHTML = ""; // Clear previous results

      if (query.length === 0) {
        return; // No query, no results
      }

      const results = sampleData.filter((item) => item.name.toLowerCase().includes(query) || item.name.toLowerCase().includes(query));

      if (results.length > 0) {
        results.forEach((item) => {
          const resultDiv = document.createElement("div");
          resultDiv.className = "result-item";
          resultDiv.innerHTML = `<strong>${item.name}</strong>`;
          searchResults.appendChild(resultDiv);
        });
      } else {
        searchResults.innerHTML = "<p>Tidak ada hasil ditemukan.</p>";
      }
    });
  }
});
