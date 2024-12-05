// Function to handle form submission and save data to localStorage
function submitSymptoms() {
    const symptomsInput = document.getElementById("symptomsInput").value;
    localStorage.setItem('patientSymptoms', symptomsInput);
    window.location.href = "treatment.html"; // Redirect to treatment page
}

// Function to compare symptoms and suggest treatment
function suggestTreatment() {
    const symptoms = localStorage.getItem('patientSymptoms');
    const treatments = {
        "fever": "Take rest, drink fluids, and use fever-reducing medications.",
        "cough": "Drink warm tea, take cough syrup, and rest.",
        "headache": "Use painkillers, stay hydrated, and get enough sleep."
    };

    let treatmentMessage = "No treatment found for the given symptoms.";
    if (symptoms.includes("fever")) {
        treatmentMessage = treatments["fever"];
    } else if (symptoms.includes("cough")) {
        treatmentMessage = treatments["cough"];
    } else if (symptoms.includes("headache")) {
        treatmentMessage = treatments["headache"];
    }

    document.getElementById("treatmentOptions").innerHTML = `
        <h3>Suggested Treatment:</h3>
        <p>${treatmentMessage}</p>
    `;
}

// Function to go back to patient input page
function goBack() {
    window.history.back();
}

// Call the function to suggest treatment on page load
if (document.getElementById("treatmentOptions")) {
    suggestTreatment();
}
