// function fetchBooks() {
//   fetch("https://anapioficeandfire.com/api/books")
//   .then(res => res.json())
//   .then(books => renderBooks(books))
// }

// function renderBooks(books) {
//   const main = document.querySelector('main')
//   books.forEach(book => {
//     const h2 = document.createElement('h2')
//     h2.innerHTML = book.name
//     main.appendChild(h2)
//   })
// }

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks()
// })

// Above is my code and below is solution; only solution works although they are essentially the same code

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
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