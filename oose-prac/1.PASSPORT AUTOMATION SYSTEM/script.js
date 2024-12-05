function submitForm() {
    // Get data from the form fields
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value;
    const passportType = document.getElementById("passportType").value;
    
    // Save the data to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("dob", dob);
    localStorage.setItem("address", address);
    localStorage.setItem("passportType", passportType);
    
    // Redirect to confirmation page
    window.location.href = "confirmation.html";
    }