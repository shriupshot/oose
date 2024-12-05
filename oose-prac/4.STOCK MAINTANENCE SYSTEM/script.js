// Mock user data (you can replace this with backend logic)
const validUsername = "admin";
const validPassword = "password123";

// To keep track of the stock items
let stockItems = [];

// Function to log in
function login() {
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

if (username === validUsername && password === validPassword) {
document.getElementById('loginForm').style.display = 'none';
document.getElementById('stockForm').style.display = 'block';
} else {
alert("Invalid username or password");
}
}

// Function to log out
function logout() {

document.getElementById('loginForm').style.display = 'block';
document.getElementById('stockForm').style.display = 'none';
}

// Function to calculate total amount
function calculateTotalAmount() {
const price = parseFloat(document.getElementById('price').value);
const quantity = parseInt(document.getElementById('quantity').value);
const totalAmount = price * quantity;
document.getElementById('totalAmount').value = totalAmount.toFixed(2);
}

// Function to add item to the table
function addItem() {
const itemName = document.getElementById('itemName').value;
const itemType = document.getElementById('itemType').value;
const itemCode = document.getElementById('itemCode').value;
const itemDate = document.getElementById('itemDate').value;
const price = parseFloat(document.getElementById('price').value);
const quantity = parseInt(document.getElementById('quantity').value);
const netWeight = parseFloat(document.getElementById('netWeight').value);
const totalAmount = parseFloat(document.getElementById('totalAmount').value);

const item = {
itemName,
itemType,
itemCode,
itemDate,
price,
quantity,
netWeight,
totalAmount
};

stockItems.push(item);
displayItems();
resetForm();
}

// Function to reset the form fields
function resetForm() {
document.getElementById('itemName').value = '';
document.getElementById('itemType').value = '';
document.getElementById('itemCode').value = '';
document.getElementById('itemDate').value = '';
document.getElementById('price').value = '';
document.getElementById('quantity').value = '';
document.getElementById('netWeight').value = '';
document.getElementById('totalAmount').value = '';
}

// Function to display all items in the table
function displayItems() {
const tbody = document.getElementById('itemTable').getElementsByTagName('tbody')[0];
tbody.innerHTML = '';

stockItems.forEach((item, index) => {
const row = tbody.insertRow();
row.innerHTML = `
<td>${item.itemName}</td>
<td>${item.itemType}</td>
<td>${item.itemCode}</td>
<td>${item.itemDate}</td>
<td>${item.price}</td>
<td>${item.quantity}</td>
<td>${item.netWeight}</td>
<td>${item.totalAmount}</td>
<td>
<button class="update-btn" onclick="updateItem(${index})">Update</button>
<button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
</td>
`;
});
}

// Function to update an item
function updateItem(index) {
const item = stockItems[index];
document.getElementById('itemName').value = item.itemName;
document.getElementById('itemType').value = item.itemType;
document.getElementById('itemCode').value = item.itemCode;
document.getElementById('itemDate').value = item.itemDate;
document.getElementById('price').value = item.price;
document.getElementById('quantity').value = item.quantity;
document.getElementById('netWeight').value = item.netWeight;
document.getElementById('totalAmount').value = item.totalAmount;

stockItems.splice(index, 1); // Remove the item from array (we'll add it again later after edit)
displayItems();
}

// Function to delete an item
function deleteItem(index) {
stockItems.splice(index, 1);
displayItems();
}

// Add event listener for price and quantity inputs to calculate total amount
document.getElementById('price').addEventListener('input', calculateTotalAmount);
document.getElementById('quantity').addEventListener('input', calculateTotalAmount);