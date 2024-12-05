document.addEventListener("DOMContentLoaded", function() {
    // Retrieve data from localStorage
    const name = localStorage.getItem("name");
    const dob = localStorage.getItem("dob");
    const address = localStorage.getItem("address");
    const passportType = localStorage.getItem("passportType");
    
    // Display data on the confirmation page
    document.getElementById("confirmName").textContent = name;
    document.getElementById("confirmDob").textContent = dob;
    document.getElementById("confirmAddress").textContent = address;
    document.getElementById("confirmPassportType").textContent = passportType;
    });
    
    function editForm() {
    // Redirect back to the application form for editing
    window.location.href = "index.html";
    }
    
    function finalSubmit() {
    alert("Passport application submitted successfully!");
    // Clear localStorage after submission
    localStorage.clear();
    // Redirect to a thank-you or landing page
    window.location.href = "thankyou.html";
    }