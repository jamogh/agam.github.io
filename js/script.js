const books = [
  {
    title: { en: "The Great Gatsby", hi: "द ग्रेट गैट्सबी" },
    summary: {
      en: "A novel about the American dream.",
      hi: "अमेरिकन ड्रीम के बारे में एक उपन्यास।"
    },
    image: "images/book1.jpg"
  },
  {
    title: { en: "1984", hi: "1984" },
    summary: {
      en: "A dystopian novel by George Orwell.",
      hi: "जॉर्ज ऑरवेल द्वारा एक डिस्टोपियन उपन्यास।"
    },
    image: "images/book2.jpg"
  },
  {
    title: { en: "To Kill a Mockingbird", hi: "टू किल अ मॉकिंगबर्ड" },
    summary: {
      en: "A novel about racial injustice.",
      hi: "नस्लीय अन्याय के बारे में एक उपन्यास।"
    },
    image: "images/book3.jpg"
  }
];

const translations = {
  en: {
    appTitle: "Books Manager",
    bookListTitle: "List of Books",
    contactTitle: "Contact Details",
    contactInfo: "For inquiries, contact us at: <a href='mailto:info@bookmanager.com'>info@bookmanager.com</a>"
  },
  hi: {
    appTitle: "पुस्तक प्रबंधन",
    bookListTitle: "पुस्तकों की सूची",
    contactTitle: "संपर्क विवरण",
    contactInfo: "जांच के लिए, हमसे संपर्क करें: <a href='mailto:info@bookmanager.com'>info@bookmanager.com</a>"
  }
};

const languageSelector = document.getElementById("languageSelector");
const bookListContainer = document.getElementById("bookList");

function renderBooks(lang) {
  bookListContainer.innerHTML = "";
  books.forEach(book => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
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

function switchLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  renderBooks(lang);
}

languageSelector.addEventListener("change", e => {
  switchLanguage(e.target.value);
});

// Initialize
switchLanguage("en");
