document.addEventListener("DOMContentLoaded", function () {

    // Function to load books from localStorage
    function loadBooks() {
        const books = JSON.parse(localStorage.getItem("books")) || [];
        const tableBody = document.getElementById("booksTable").querySelector("tbody");
        tableBody.innerHTML = ""; // Clear the table

        books.forEach(book => {
            const row = document.createElement("tr");

            const titleCell = document.createElement("td");
            titleCell.textContent = book.title;

            const authorCell = document.createElement("td");
            authorCell.textContent = book.author;

            const isbnCell = document.createElement("td");
            isbnCell.textContent = book.isbn;

            row.appendChild(titleCell);
            row.appendChild(authorCell);
            row.appendChild(isbnCell);
            tableBody.appendChild(row);
        });
    }

    // Add book form submission
    const addBookForm = document.getElementById("addBookForm");
    if (addBookForm) {
        addBookForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const title = document.getElementById("bookTitle").value;
            const author = document.getElementById("author").value;
            const isbn = document.getElementById("isbn").value;

            let books = JSON.parse(localStorage.getItem("books")) || [];
            books.push({ title, author, isbn });
            localStorage.setItem("books", JSON.stringify(books));

            document.getElementById("message").textContent = "Book added successfully!";
            addBookForm.reset();
        });
    }

    // Borrow book form submission
    const borrowBookForm = document.getElementById("borrowBookForm");
    if (borrowBookForm) {
        borrowBookForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const isbn = document.getElementById("borrowISBN").value;

            let books = JSON.parse(localStorage.getItem("books")) || [];
            const bookIndex = books.findIndex(book => book.isbn === isbn);

            if (bookIndex !== -1) {
                books.splice(bookIndex, 1); // Remove the borrowed book
                localStorage.setItem("books", JSON.stringify(books));
                document.getElementById("borrowMessage").textContent = "Book borrowed successfully!";
            } else {
                document.getElementById("borrowMessage").textContent = "Book not found!";
            }
        });
    }

    // Return book form submission
    const returnBookForm = document.getElementById("returnBookForm");
    if (returnBookForm) {
        returnBookForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const isbn = document.getElementById("returnISBN").value;

            let books = JSON.parse(localStorage.getItem("books")) || [];
            // You can modify the logic for returning books if needed

            document.getElementById("returnMessage").textContent = "Book returned successfully!";
        });
    }

    // Load books on page load
    loadBooks();
});
document.addEventListener("DOMContentLoaded", function () {

    // Function to load books from localStorage
    function loadBooks() {
        const books = JSON.parse(localStorage.getItem("books")) || [];
        return books;
    }

    // Search for the book in Borrow Book page
    const searchBookForm = document.getElementById("searchBookForm");
    if (searchBookForm) {
        searchBookForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const isbn = document.getElementById("borrowISBN").value;
            const books = loadBooks();
            const book = books.find(b => b.isbn === isbn);

            const bookDetailsDiv = document.getElementById("bookDetails");
            const borrowButton = document.getElementById("borrowButton");
            const borrowMessage = document.getElementById("borrowMessage");

            if (book) {
                bookDetailsDiv.innerHTML = `
                    <p><strong>Title:</strong> ${book.title}</p>
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p><strong>ISBN:</strong> ${book.isbn}</p>
                `;
                borrowButton.style.display = 'inline-block'; // Show borrow button
                borrowMessage.textContent = ''; // Clear any previous messages
                borrowButton.addEventListener("click", function () {
                    borrowBook(isbn, books);
                });
            } else {
                bookDetailsDiv.innerHTML = `<p>Book not found.</p>`;
                borrowButton.style.display = 'none'; // Hide borrow button
                borrowMessage.textContent = "No book found with this ISBN.";
            }
        });
    }

    // Borrow Book functionality
    function borrowBook(isbn, books) {
        const bookIndex = books.findIndex(b => b.isbn === isbn);
        if (bookIndex !== -1) {
            books.splice(bookIndex, 1); // Remove the borrowed book
            localStorage.setItem("books", JSON.stringify(books));
            document.getElementById("borrowMessage").textContent = "Book borrowed successfully!";
            document.getElementById("bookDetails").innerHTML = ""; // Clear book details
            document.getElementById("borrowButton").style.display = "none"; // Hide button
        }
    }

    // Return Book functionality
    const returnBookForm = document.getElementById("returnBookForm");
    if (returnBookForm) {
        returnBookForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const isbn = document.getElementById("returnISBN").value;
            let books = loadBooks();

            const returnedBook = {
                title: "Returned Book", // You can modify this based on your needs
                author: "Unknown", // You can modify this based on your needs
                isbn: isbn
            };

            books.push(returnedBook); // Add the returned book to the books list
            localStorage.setItem("books", JSON.stringify(books));
            document.getElementById("returnMessage").textContent = "Book returned successfully!";
        });
    }
});
