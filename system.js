window.onload = () => {
  const custom404File = "Exception/error.html"; // Path to the custom 404 page file

  // Fetch and load the 404 page into the current document
  fetch(custom404File)
    .then((response) => {
      if (!response.ok) throw new Error("404 page not found");
      return response.text();
    })
    .then((html) => {
      document.body.innerHTML = html; // Replace the body content with the 404 page content
    })
    .catch((error) => {
      console.error("Error loading the 404 page:", error);
      document.body.innerHTML = "<h1>Error loading the 404 page</h1>";
    });
};
