function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then(res => res.json())
  // .then(function(books){
  //   return renderBooks(books)
  // })
  .then(books => renderBooks(books))
  return fetch("https://anapioficeandfire.com/api/books")
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
