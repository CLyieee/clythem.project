
  const continueButton = document.querySelector('input[type="submit"]');
  continueButton.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the form from submitting
    const emailInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const loading = document.getElementById("loading");
    if (emailInput.value === "clythem@email.com" && passwordInput.value === "password123") {
      loading.classList.add("spinner"); // add the spinner class to the loading element
      setTimeout(function() {
        window.location.href = "new.html"; // redirect to new page after 2 seconds
      }, 2000);
    } else {
      loading.classList.add("spinner"); // add the spinner class to the loading element
      setTimeout(function() {
        alert("Incorrect email or password."); // show an error message after 2 seconds
        loading.classList.remove("spinner"); // remove the spinner class from the loading element
      }, 2000);
    }
  });

