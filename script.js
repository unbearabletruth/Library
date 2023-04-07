let shelf = document.querySelector(".shelf");
const button = document.querySelector(".addbutton");
const inputtitle = document.querySelector("#title");
const inputauthor = document.querySelector("#author");
const inputpages = document.querySelector("#pages");
const inputread = document.querySelector("#read");

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

function removeBookFromLibrary(name) {
    myLibrary = myLibrary.filter((book) => book.name !== name);
}

function update(){
    while (shelf.firstChild) {
        shelf.removeChild(shelf.firstChild);
    }
    printBooks();
}

function printBooks(){
    myLibrary.forEach((book)=>{
        let newItem = document.createElement("div"); 
        newItem.className = "book";
        let newTitle = document.createElement("div");
        let newAuthor = document.createElement("div");
        let newPages = document.createElement("div");
        let newRead = document.createElement("div");
        let remove = document.createElement("button");
        remove.textContent = "remove book"
        remove.addEventListener("click", () => {
            removeBookFromLibrary(newTitle.innerText);
            update();
            console.log(myLibrary)});
        newItem.appendChild(remove);
        newItem.appendChild(newTitle);
        newItem.appendChild(newAuthor);
        newItem.appendChild(newPages);
        newItem.appendChild(newRead);
        newTitle.innerText = `${book.name}`;
        newAuthor.innerText = `${book.author}`;
        newPages.innerText = `Number of pages: ${book.pages}`;
        newRead.innerText = `${book.read}`;
        shelf.appendChild(newItem);
      })
}

const ThePlague = new Book("The Plague", "Albert Camus", 300, "read");
ThePlague 
const NeverLetMeGo = new Book("Never Let Me Go", "Kazuo Ishiguro", 350, "read");
addBookToLibrary(ThePlague);
addBookToLibrary(NeverLetMeGo);


button.addEventListener("click", function handler(e){
    let form = document.createElement("form");
    let titleinput = document.createElement("input");
    titleinput.type = "text";
    let authorinput = document.createElement("input");
    authorinput.type = "text";
    let pagesinput = document.createElement("input");
    pagesinput.type = "number";
    let readinput = document.createElement("input");
    readinput.type = "text";
    let submit = document.createElement("button");
    form.appendChild(titleinput);
    form.appendChild(authorinput);
    form.appendChild(pagesinput);
    form.appendChild(readinput);
    form.appendChild(submit);
    shelf.appendChild(form);
    submit.addEventListener("click", (e) => {
        const newbook = new Book(titleinput.value, authorinput.value, pagesinput.value, readinput.value);
        addBookToLibrary(newbook);
        e.preventDefault();
        printBooks();
        
    })
    e.preventDefault();
}
    );

    