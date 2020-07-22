function fetchBooks() {
  const configObj = {
    mode: "cors",
    headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
  }
  return fetch('https://anapioficeandfire.com/api/books', configObj)
    .then(res => res.json())
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
