function showBook(book) {
    console.log(book.author + " wrote " + book.title);
    if (book.isRead !== undefined) {
        console.log("  I have " + (book.isRead ? "read" : "not read") + " this book");
    }
}
function setPages(book, pages) {
    book.pages = pages;
}
function readBook(book) {
    book.isRead = true;
}
var warAndPeace = {
    author: "Leo Tolstoy",
    title: "War and Peace",
    isRead: false
};
var mobyDick = {
    author: "Herman Melville",
    title: "Mody Dick"
};
setPages(warAndPeace, 1225);
showBook(warAndPeace);
showBook(mobyDick);
readBook(mobyDick);
showBook(mobyDick);
