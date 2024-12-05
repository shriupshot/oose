// Handle payroll form submission and storing in localStorage
document.getElementById("payrollForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const employeeName = document.getElementById("employee").value;
    const payAmount = document.getElementById("payAmount").value;

    // Get employee data from localStorage
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    let employeeData = employees.find(emp => emp.name === employeeName);

    if (!employeeData) {
        alert("Employee not found!");
        return;
    }

    let payroll = JSON.parse(localStorage.getItem("payroll")) || [];
    payroll.push({
        employeeName,
        position: employeeData.position,
        salary: employeeData.salary,
        payAmount
    });

    localStorage.setItem("payroll", JSON.stringify(payroll));

    alert("Payroll generated successfully!");
    window.location.href = 'report.html'; // Redirect after payroll generation
});

// Load employee data into the select dropdown in the payroll form
function loadEmployees() {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    let employeeSelect = document.getElementById("employee");

    employees.forEach(emp => {
        let option = document.createElement("option");
        option.value = emp.name;
        option.textContent = emp.name;
        employeeSelect.appendChild(option);
    });
}

// Load employee data into the table in the viewEmployees.html page
function displayEmployees() {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    let tableBody = document.querySelector("#employeeTable tbody");

    employees.forEach(emp => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${emp.name}</td><td>${emp.position}</td><td>${emp.salary}</td>`;
        tableBody.appendChild(row);
    });
}

// Load payroll data into the report table
function displayPayrollReport() {
    let payroll = JSON.parse(localStorage.getItem("payroll")) || [];
    let reportTableBody = document.querySelector("#reportTable tbody");

    payroll.forEach(record => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${record.employeeName}</td>
            <td>${record.position}</td>
            <td>${record.salary}</td>
            <td>${record.payAmount}</td>
        `;
        reportTableBody.appendChild(row);
    });
}

// Call functions when pages load
if (document.getElementById("payrollForm")) {
    loadEmployees();
}

if (document.getElementById("employeeTable")) {
    displayEmployees();
}

if (document.getElementById("reportTable")) {
    displayPayrollReport();
}
