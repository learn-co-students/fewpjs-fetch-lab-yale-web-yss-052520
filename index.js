function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => renderBooks(json))
}

function renderBooks(books){
  const body = document.querySelector("body")
    books.forEach(book => {
      const bookName = document.createElement("p")
      bookName.innerHTML = book.name 
      body.appendChild(bookName)
    })
}

document.addEventListener("DOMContentLoaded", function() { fetchBooks() })
