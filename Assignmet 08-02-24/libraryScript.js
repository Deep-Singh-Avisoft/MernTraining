//library array to store the books
let library = [];

//constructor function for book object
    function Book(id, title, author, isBorrowed){
        this.id = id;
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
    };

    //main menu function
    const menu = () => {
        let choice = prompt("Welcome to library \n Choose any option below : \n 1. Add a book \n 2. Borrow a book \n 3. Return a book \n 4.List of available books \n 5. Search for a book", );
        choice = parseInt(choice);
        let id;
        switch(choice){
            case 1:
                id = prompt("Enter book id : ", );
                id = parseInt(id);
                var title = prompt("Enter title of the book : ", );
                var author = prompt("Enter author of the book : ", )
                addBook(id, title, author);
                break;
            case 2:
                id = prompt("Enter book id : ", );
                id = parseInt(id);
                borrowBook(id);
                break;
            case 3:
                id = prompt("Enter book id : ", );
                id = parseInt(id);
                returnBook(id);
                break;
            case 4:
                availableBooks();
                break;
            case 5:
                var title = prompt("Enter title of the book : ", );
                searchBook(title);
                break;
            default:
                alert("Invalid Choice...!!");
                menu();
        }
        // menu();
    }

    //function to add a book
const addBook = (id, title, author) =>{
    const book = library.find(book => book.id === id);
    const newbook = new Book(id, title, author);
    library.push(newbook);
    console.log(library);
    // menu();
}

//function to borrow a book
const borrowBook = (id) =>{
    const book = library.find(book => book.id === id);

    if(book){
        if(!book.isBorrowed){
            book.isBorrowed = true;
            console.log(`Book with book id : ${book.id} has been borrowed now...!!`);
        }
        else{
            console.log(`Book with book id : ${book.id} is already borrowed...!!`);
        }
    }
    else{
        console.log(`No book found with book id : ${book.id}`)
    }
};

// function to return a book
const returnBook = (id) =>{
    const book = library.find(book => book.id === id);

    if(book){
        if(book.isBorrowed){
            book.isBorrowed = false;
            console.log(`Book with book id : ${book.id} has been returned now...!!`);
        }
        else{
            console.log(`Book with book id : ${book.id} is already available...!!`);
        }
    }
    else{
        console.log(`No book found with book id : ${book.id}`)
    }
};

//function to display available books
const availableBooks = () =>{
    let flag = false;
    library.forEach(book => {
        if(!book.isBorrowed){
            flag = true;
            console.log(`${book.title} by ${book.author} is available..!!`);
        }
    })
}

//function to search a book
const searchBook = (title) => {

    library.forEach(book =>{
        if(book.title === title){
             return book;
        }
    })
 return null;
}

//calling main menu function
menu();