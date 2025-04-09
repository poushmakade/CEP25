document.getElementById('donationForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission behavior

  // Show the thank-you pop-up
  alert("Thank you for your donation!");
});