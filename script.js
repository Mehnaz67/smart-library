let books = [ 
  { 
  id: 1,
    title: "Oxford Physics", 
    author: "John Smith", 
    category: "Physics", 
    shelf: "B3", 
    copies: 3,
    available: 2 
  }, 
  { 
    id: 2,
    title: "Cambridge Mathematics", 
    author: "Sarah Brown", 
    category: "Mathematics", 
    shelf: "A2",
    copies: 4, 
    available: 4
  }, 
  { 
    id: 3, 
    title: "Introduction to Computer Science",
    author: "David Wilson", 
    category: "Computer Science", 
    shelf: "C1",
    copies: 3,
    available: 1 
  },
  {
    id: 4,
    title: "Advanced Physics",
    author: "Michael Green",
    category: "Physics",
    shelf: "B4",
    copies: 2,
    available: 0
  },
  { 
    id: 5,
    title: "Shakespeare Collection", 
    author: "William Shakespeare", 
    category: "Literature",
    shelf: "D2",
    copies: 5,
    available: 3
  },
  {
    id: 6,
    title: "Physics for Beginners",
    author: "Emma Taylor",
    category: "Physics",
    shelf: "B2", 
    copies: 3,
    available: 3 
  }
];
function displayBooks(bookList) {
  const container =
    document.getElementById("bookContainer");
  
  container.innerHTML = "";
  
  if (bookList.length === 0) {
    
    container.innerHTML =
      "<p>No books found.</p>";
    return;
  }
  bookList.forEach(book => {
    
    let availabilityText; 
    
    let availabilityClass; 
    if (book.available > 0) {
      availabilityText = 
        `✅ ${book.available} copies available`;
      
      availabilityClass =
        "available";
    
    } else { 
      
      availabilityText =
        "❌ Currently borrowed"; 
      
      availabilityClass = 
        "unavailable";
    } 
    container.innerHTML += `
    
    <div class="book-card">
    
    <h3>📖 ${book.title}</h3>
   
    <p>
    
    ✍️ <strong>Author:</strong>
    ${book.author}
    </p>
    
    <p>
    🏷️ <strong>Category:</strong>
    ${book.category}
    </p>
    
    <p>
    📍 <strong>Shelf:</strong>
    ${book.shelf}
    </p>
    <p class="${availabilityClass}"> 
    ${availabilityText}
    </p>
    
    <button onclick="showRecommendations(${book.id})">
    🧠 Get Recommendations
    </button>
    
    </div>
      `;
  
  }); 

}


function searchBooks() {
  
  const search =
    document
    .getElementById("searchInput") 
    .value 
    .toLowerCase() 
    .trim(); 
  
  if (search === "") {
    
    displayBooks(books);
    
    return;
  
  }
  
  const results =
    books.filter(book =>
      
      book.title 
      .toLowerCase() 
      .includes(search)
      
      ||
      
      book.author
      .toLowerCase() 
      .includes(search) 
      || 
      book.category 
      .toLowerCase()
      .includes(search)
                 );
  
  displayBooks(results);
}

document
  .getElementById("searchInput")
  .addEventListener( 
    "keypress",
    function(event) { 
      
      if (event.key === "Enter") {
        
        searchBooks(); 
      
      }
    
    }
  );

function filterCategory(category) { 
  
  const results =
    books.filter(book =>
      book.category === category
    );
  
  displayBooks(results);
}

function showRecommendations(bookId) {
  const selectedBook = 
    books.find(book => 
      book.id === bookId
    );
  
  const recommendations =
    books.filter(book =>
      
      book.category ===
      selectedBook.category
      
      &&
      
      book.id !== selectedBook.id
  
    );
  
  if (recommendations.length === 0) {
    
    alert(
      "No similar books found."
    
    );
    
    return;
  
  }
  
  let message =
    `🧠 Because you are interested in $
    {selectedBook.category}, you may also like:\n\n`;
  recommendations.forEach(book => {
    
    message +=
      `📖 ${book.title} — Shelf ${book.shelf}\n`;
  
  });
  
  alert(message);
}
