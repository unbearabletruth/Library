let shelf = document.querySelector(".wrapper");

let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(newbook) {
    myLibrary.push(newbook);
}

function printBooks(){
    myLibrary.forEach((book)=>{
        let newItem = document.createElement("tr"); 
        newItem.className = "book";
        let newTitle = document.createElement("td");
        let newAuthor = document.createElement("td");
        let newPages = document.createElement("td");
        let newRead = document.createElement("td");
        newItem.appendChild(newTitle);
        newItem.appendChild(newAuthor);
        newItem.appendChild(newPages);
        newItem.appendChild(newRead);
        newTitle.innerText = `${book.name}`;
        newAuthor.innerText = `${book.author}`;
        newPages.innerText = `${book.pages}`;
        newRead.innerText = `${book.read}`;
        shelf.appendChild(newItem);
      })
}

const ThePlague = new Book("The Plague", "Albert Camus", 300, true);
ThePlague 
const NeverLetMeGo = new Book("Never Let Me Go", "Kazuo Ishiguro", 350, true);
addBookToLibrary(ThePlague);
addBookToLibrary(NeverLetMeGo);

printBooks();

