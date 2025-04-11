document.getElementById('donationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  // Clear previous error messages
  document.querySelectorAll('.error-message').forEach((msg) => (msg.style.display = 'none'));

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const amount = document.getElementById('amount').value.trim();

  let isValid = true;

  // Validate Name
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    document.getElementById('nameError').style.display = 'block';
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    document.getElementById('emailError').style.display = 'block';
    isValid = false;
  }

  // Validate Phone
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
    document.getElementById('phoneError').style.display = 'block';
    isValid = false;
  }

  // Validate Amount
  if (amount === '' || isNaN(amount) || parseInt(amount) <= 0) {
    document.getElementById('amountError').textContent = 'Please enter a valid donation amount.';
    document.getElementById('amountError').style.display = 'block';
    isValid = false;
  }

  // If all fields are valid, redirect to thankyou.html
  if (isValid) {
    window.location.href = 'thankyou.html'; // Redirect to the thank-you page
  }
});