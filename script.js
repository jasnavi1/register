function validateForm() {
 var name = document.getElementById("name").value;
 var email = document.getElementById("email").value;
 var gender = document.querySelector('input[name="gender"]:checked');
 if (name === "" || email === "" || !gender) {
 alert("Please fill out all required fields.");
 return false; // Prevent form submission }
 return true; }