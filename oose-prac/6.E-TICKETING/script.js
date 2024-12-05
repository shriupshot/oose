function bookTicket() {
    // Retrieve input values
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const train = document.getElementById('train').value;
    const travelClass = document.getElementById('class').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    
    // Validate inputs
    if (!origin || !destination || !date || !time || !train || !travelClass || !name || !age || !gender) {
    alert("Please fill out all fields.");
    return;
    }
    
    // Generate ticket details
    const ticketContent = `
    <p><strong>Passenger Name:</strong> ${name}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Origin:</strong> ${origin}</p>
    <p><strong>Destination:</strong> ${destination}</p>
    
    <p><strong>Travel Date:</strong> ${date}</p>
    <p><strong>Travel Time:</strong> ${time}</p>
    <p><strong>Train:</strong> ${train}</p>
    <p><strong>Class:</strong> ${travelClass}</p>
    `;
    
    // Display ticket details
    document.getElementById('ticketContent').innerHTML = ticketContent;
    document.getElementById('reservationForm').style.display = 'none';
    document.getElementById('ticketDetails').style.display = 'block';
    }
    
    function resetForm() {
    // Reset form
    document.getElementById('reservationForm').reset();
    document.getElementById('reservationForm').style.display = 'block';
    document.getElementById('ticketDetails').style.display = 'none';
    }