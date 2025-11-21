const fs = require("fs");

// JSON array of books
const books = [
    { bookid: 1001, name: "Core Java", author: "Cay Horstman", sellingprice: 500 },
    { bookid: 1002, name: "JavaScript Guide", author: "David Flanagan", sellingprice: 600 },
    { bookid: 1003, name: "NodeJS", author: "Andrew Mead", sellingprice: 550 }
];

let result = "Bookid|bookname|author|Sellingprice|finalprice\n";

books.forEach(book => {
    let finalprice = book.sellingprice - (book.sellingprice * 0.10); // 10% discount

    result += `${book.bookid}|${book.name}|${book.author}|${book.sellingprice}|${finalprice}\n`;
});

// write to file
fs.writeFileSync("book.txt", result);

console.log("book.txt created successfully!");
