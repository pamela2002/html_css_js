document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.getElementById("popup-container").style.display = "flex";
    }, 10000);
  
    document.getElementById("close-btn").addEventListener("click", function () {
      document.getElementById("popup-container").style.display = "none";
    });
  
    document.getElementById("popup-form").addEventListener("submit", function (event) {
      event.preventDefault();
      // You can add logic here to handle the form submission
      alert("Form submitted!");
      document.getElementById("popup-container").style.display = "none";
    });
  });
  