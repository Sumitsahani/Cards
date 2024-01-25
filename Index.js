document.addEventListener("DOMContentLoaded", () => {
  let result = document.getElementById("container");
  if (result) {
  fetch("https://api.artic.edu/api/v1/artworks/search?q=cats")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const itemsHTML = data.data
        .map(
          (item) => `
                <div class="post">
                    <h2>${item.title}</h2>
                    <img src="${item.thumbnail.alt_text}" alt="${item.thumbnail.alt_text}" width="200">
                </div>
            `
        )
        .join("");
      result.innerHTML = itemsHTML;
    })
    .catch((error) => {
      console.error('Fetch error:', error);
      result.innerHTML = "Error Fetching Data";
    });
} else {
    console.error('Result div not found');
}
    
});
