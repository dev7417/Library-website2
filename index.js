console.log("library");
// making a constructor for fetching bookname author name or type
function book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
function Display(){

}
Display.prototype.add = function(Book){
    let tableBody = document.getElementById('tableBody');
    let uiString = `
    <tr>
    
    <td>${Book.name}</td>
    <td>${Book.author}</td>
    <td>${Book.type}</td>
  </tr>
  `
  tableBody.innerHTML += uiString;
}
// Declaring clear prototype
Display.prototype.clear = function(book){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
// Declaring validate prototype
Display.prototype.validate = function(Book){
    if(Book.name.length<=2 || Book.author.length<=2){
        return false;
    }else{
        return true;
    }
}
// Declaring show prototype
Display.prototype.show = function(type, msg){
    let message = document.getElementById('msg');
    message.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong></strong> ${msg}.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
    `
}
// js for fetching data through library form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryformSubmit);

function libraryformSubmit(e) {

    let bookName = document.getElementById('bookName').value;
    let author = document.getElementById('Author').value;
    let Cooking = document.getElementById('cooking');
    let Programming = document.getElementById('programming');
    let Sports = document.getElementById('sports');

    let type;
    if (Cooking.checked) {
        type = Cooking.value;
    } else if (Programming.checked) {
        type = Programming.value;

    } else if (Sports.checked) {
        type = Sports.value;
    }
    e.preventDefault();
    let Book = new book(bookName, author, type);
    console.log(Book);
    console.log(typeof (Book));
    let display = new Display();
    if(display.validate(Book)){
        display.add(Book);
        display.clear();
        display.show('success','Your Book Has been successfully added')

   }else{
    display.show('danger', 'sorry you cannot add this book');
   }
}