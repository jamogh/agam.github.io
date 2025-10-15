// Books data with title and summary in both languages
const books = [
  {
    title: { en: "SAMYOPDESH PART 1", hi: "साम्योपदेश भाग १" },
    summary: { en: "A novel about the American dream.", hi: "अमेरिकन ड्रीम के बारे में एक उपन्यास।" },
    image: "images/book1.jpg"
  },
  {
    title: { en: "SAMYOPDESH PART 2", hi: "साम्योपदेश भाग २" },
    summary: { en: "A dystopian novel by George Orwell.", hi: "जॉर्ज ऑरवेल द्वारा एक डिस्टोपियन उपन्यास।" },
    image: "images/book2.jpg"
  },
  {
    title: { en: "SAMYOPDESH PART 3", hi: "साम्योपदेश भाग ३" },
    summary: { en: "A novel about racial injustice.", hi: "नस्लीय अन्याय के बारे में एक उपन्यास।" },
    image: "images/book3.jpg"
  },
  {
    title: { en: "SAMYOPDESH PART 4", hi: "साम्योपदेश भाग ४" },
    summary: { en: "A dystopian novel by George Orwell.", hi: "जॉर्ज ऑरवेल द्वारा एक डिस्टोपियन उपन्यास।" },
    image: "images/book2.jpg"
  },
  {
    title: { en: "SAMYOPDESH PART 5", hi: "साम्योपदेश भाग ५" },
    summary: { en: "A dystopian novel by George Orwell.", hi: "जॉर्ज ऑरवेल द्वारा एक डिस्टोपियन उपन्यास।" },
    image: "images/book2.jpg"
  },
  {
    title: { en: "SAMYOPDESH PART 6", hi: "साम्योपदेश भाग ६" },
    summary: { en: "A dystopian novel by George Orwell.", hi: "जॉर्ज ऑरवेल द्वारा एक डिस्टोपियन उपन्यास।" },
    image: "images/book2.jpg"
  },
  {
    title: { en: "SAMYOPDESH PART 7", hi: "साम्योपदेश भाग ७" },
    summary: { en: "A dystopian novel by George Orwell.", hi: "जॉर्ज ऑरवेल द्वारा एक डिस्टोपियन उपन्यास।" },
    image: "images/book2.jpg"
  }
];

// Translations for language switching
const translations = {
  en: {
    appTitle: "AAGAM PRAKASHAN",
    bookListTitle: "COLLECTION",
    contactTitle: "Contact Details",
    contactInfo: "For inquiries, contact us at: <a href='mailto:info@bookmanager.com'>info@bookmanager.com</a>"
  },
  hi: {
    appTitle: "आगम प्रकाशन",
    bookListTitle: "ग्रंथालय",
    contactTitle: "संपर्क विवरण",
    contactInfo: "जांच के लिए, हमसे संपर्क करें: <a href='mailto:info@bookmanager.com'>info@bookmanager.com</a>"
  }
};

const languageSelector = document.getElementById("languageSelector");
const bookListContainer = document.getElementById("bookList");

// Function to render book cards dynamically
function renderBooks(lang) {
  bookListContainer.innerHTML = ""; // Clear the existing book list

  books.forEach(book => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4"; // Bootstrap classes for card layout
    card.innerHTML = `
      <div class="card">
        <img src="${book.image}" class="card-img-top" alt="${book.title[lang]}">
        <div class="card-body">
          <h5 class="card-title">${book.title[lang]}</h5>
          <p class="card-text">${book.summary[lang]}</p>
        </div>
      </div>
    `;
    bookListContainer.appendChild(card);
  });
}

// Function to switch the language and update the UI
function switchLanguage(lang) {
  // Update text content for elements with data-lang attribute
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Render the books with the selected language
  renderBooks(lang);
}

// Event listener for language change
languageSelector.addEventListener("change", e => {
  switchLanguage(e.target.value);
});

// Initialize with the default language (English)
switchLanguage("en");
