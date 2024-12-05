// Handling Payment Form Submission and Local Storage
document.getElementById('payment-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    const paymentDetails = {
        cardNumber,
        expiryDate,
        cvv,
        date: new Date().toLocaleString(),
        status: 'Successful'
    };

    // Store the payment details in localStorage
    let transactionHistory = JSON.parse(localStorage.getItem('transactions')) || [];
    transactionHistory.push(paymentDetails);
    localStorage.setItem('transactions', JSON.stringify(transactionHistory));

    // Redirect to confirmation page
    window.location.href = 'confirmation.html';
});

// Displaying Transaction History
window.onload = () => {
    if (document.getElementById('history-table')) {
        const history = JSON.parse(localStorage.getItem('transactions')) || [];
        const tableBody = document.getElementById('history-table').getElementsByTagName('tbody')[0];

        history.forEach(transaction => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = transaction.date;
            row.insertCell(1).textContent = `$${Math.floor(Math.random() * 1000)}`; // Random amount
            row.insertCell(2).textContent = transaction.status;
        });
    }
};

// SQL Query Connectivity (Example with Java)
function getTransactionHistoryFromDatabase() {
    const sql = "SELECT * FROM transactions";
    // Assuming you are using JDBC with a connected database
    const connection = new java.sql.Connection();
    const resultSet = connection.createStatement().executeQuery(sql);
    while (resultSet.next()) {
        console.log(resultSet.getString("transaction_id"), resultSet.getString("amount"));
    }
}
