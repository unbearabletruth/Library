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

Book.prototype.setRead = function(){
    console.log(this.read);
    if (this.read === "not read!"){
        return this.read = "read it!";
    } else {
        return this.read = "not read!";}
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
        printAdded(book);
    })
}

function printAdded(book){
    let newItem = document.createElement("div"); 
        newItem.className = "book";
        let newTitle = document.createElement("div");
        let newAuthor = document.createElement("div");
        let newPages = document.createElement("div");
        let newRead = document.createElement("div");
        
        let buttonsDiv = document.createElement("div")
        buttonsDiv.className = "buttons";

        let remove = document.createElement("button");
        remove.textContent = "remove";
        remove.addEventListener("click", () => {
            removeBookFromLibrary(newTitle.innerText);
            newItem.remove();
});
        let changeReadLabel = document.createElement("label");
        changeReadLabel.textContent = "Already read?"
        changeReadLabel.id = "readstatuslabel"
        let changeRead = document.createElement("input");
        changeRead.type = "checkbox";
        changeRead.addEventListener("click", () => {
            console.log(book);
            newRead.innerText = book.setRead();
        });
        
        
        newItem.appendChild(newTitle);
        newItem.appendChild(newAuthor);
        newItem.appendChild(newPages);
        newItem.appendChild(newRead);
        newItem.appendChild(buttonsDiv);
        buttonsDiv.appendChild(changeReadLabel);
        buttonsDiv.appendChild(changeRead);
        buttonsDiv.appendChild(remove);
        newTitle.innerText = `${book.name}`;
        newAuthor.innerText = `${book.author}`;
        newPages.innerText = `Number of pages: ${book.pages}`;
        newRead.innerText = `${book.read}`;
        shelf.appendChild(newItem);
      }


const ThePlague = new Book("The Plague", "Albert Camus", 300, "read it!");
const NeverLetMeGo = new Book("Never Let Me Go", "Kazuo Ishiguro", 350, "read it!");
const CrimeAndPunishment = new Book("Crime and Punishment", "Fyodor Dostoevsky", 650, "read it!")
addBookToLibrary(ThePlague);
addBookToLibrary(NeverLetMeGo);
addBookToLibrary(CrimeAndPunishment);


button.addEventListener("click", function formHandler(e){
    let form = document.createElement("form");

    let titlelabel = document.createElement("label");
    titlelabel.textContent = "Title";
    let titleinput = document.createElement("input");
    titleinput.type = "text";

    let authorlabel = document.createElement("label");
    authorlabel.textContent = "Author";
    let authorinput = document.createElement("input");
    authorinput.type = "text";

    let pageslabel = document.createElement("label");
    pageslabel.textContent = "Pages";
    let pagesinput = document.createElement("input");
    pagesinput.type = "number";
   
    let readlabel = document.createElement("label");
    readlabel.textContent = "Read status";
    let readinput = document.createElement("input");
    readinput.type = "text";

    let submit = document.createElement("button");
    submit.innerText = "Submit";

    form.appendChild(titlelabel);
    form.appendChild(titleinput);

    form.appendChild(authorlabel);
    form.appendChild(authorinput);
    
    form.appendChild(pageslabel);
    form.appendChild(pagesinput);

    form.appendChild(readlabel);
    form.appendChild(readinput);

    form.appendChild(submit);

    shelf.appendChild(form);
    submit.addEventListener("click", (e) => {
        const newbook = new Book(titleinput.value, authorinput.value, pagesinput.value, readinput.value);
        addBookToLibrary(newbook);
        e.preventDefault();
        form.remove();
        printAdded(newbook);
    })
    e.preventDefault();
}
    );

    
printBooks();