/* =======================
   20-PRODUCT ARRAY
======================= */

const products = [
    {
        id: 1,
        name: "Classic Shirt",
        price: 25,
        category: "shirts",
        image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        name: "Elegant Jacket",
        price: 60,
        category: "jackets",
        image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        name: "Casual Tee",
        price: 18,
        category: "shirts",
        image: "https://images.unsplash.com/photo-1602810318660-d2c46b750f88?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 4,
        name: "Formal Shirt",
        price: 28,
        category: "shirts",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 5,
        name: "Denim Jacket",
        price: 55,
        category: "jackets",
        image: "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 6,
        name: "Leather Jacket",
        price: 120,
        category: "jackets",
        image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 7,
        name: "Hoodie Black",
        price: 45,
        category: "hoodies",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 8,
        name: "Grey Hoodie",
        price: 42,
        category: "hoodies",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 9,
        name: "Zip Hoodie",
        price: 48,
        category: "hoodies",
        image: "https://images.unsplash.com/photo-1647771746277-eac927afab2c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8emlwJTIwaG9vZGllfGVufDB8fDB8fHww"
    },
    {
        id: 10,
        name: "White Sneakers",
        price: 70,
        category: "shoes",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 11,
        name: "Running Shoes",
        price: 65,
        category: "shoes",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww"
    },
    {
        id: 12,
        name: "Luxury Loafers",
        price: 90,
        category: "shoes",
        image: "https://images.unsplash.com/photo-1675947258177-aa8120ddefa3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGx1eHVyeSUyMGxvYWZlcnN8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 13,
        name: "Gold Watch",
        price: 150,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 14,
        name: "Sunglasses",
        price: 40,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 15,
        name: "Leather Belt",
        price: 35,
        category: "accessories",
        image: "https://plus.unsplash.com/premium_photo-1770512677042-c127be4555a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhZGVyJTIwYmVsdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 16,
        name: "Street Tee",
        price: 20,
        category: "shirts",
        image: "https://plus.unsplash.com/premium_photo-1755994149662-14c6a33cfcb1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RyZWV0JTIwdGVlfGVufDB8fDB8fHww"
    },
    {
        id: 17,
        name: "Oversized Tee",
        price: 22,
        category: "shirts",
        image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3ZlcnNpemVkJTIwdGVlfGVufDB8fDB8fHww"
    },
    {
        id: 18,
        name: "Sport Hoodie",
        price: 50,
        category: "hoodies",
        image: "https://images.unsplash.com/photo-1609885654455-f81e5a682c87?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnQlMjBob29kaWV8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 19,
        name: "High-top Sneakers",
        price: 80,
        category: "shoes",
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 20,
        name: "Beanie Cap",
        price: 15,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1612887726773-e64e20cf08fe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhbmllJTIwY2FwfGVufDB8fDB8fHww"
    }
];

/* =======================
   DISPLAY FEATURED (HOME)
======================= */

function loadFeatured() {
    const container = document.querySelector("#featuredProducts");
    if (!container) return;

    const featured = products.slice(0, 6);

    container.innerHTML = "";

    featured.forEach(item => {
        container.innerHTML += `
      <div class="card">
        <img src="${item.image}" loading="lazy" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
      </div>
    `;
    });
}

/* =======================
   DISPLAY ALL PRODUCTS
======================= */

function loadProducts(filter = "all") {
    const container = document.querySelector("#productContainer");
    if (!container) return;

    container.innerHTML = "";

    const filtered = filter === "all"
        ? products
        : products.filter(p => p.category === filter);

    filtered.forEach(item => {
        container.innerHTML += `
      <div class="card">
        <img src="${item.image}" loading="lazy" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
        <button onclick="addFavorite(${item.id})">❤️ Save</button>
      </div>
    `;
    });
}

/* =======================
   FILTER BUTTONS
======================= */

function setupFilters() {
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            loadProducts(btn.dataset.category);
        });
    });
}

/* =======================
   FAVORITES (LOCALSTORAGE)
======================= */

function addFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const product = products.find(p => p.id === id);

    if (!favorites.some(f => f.id === id)) {
        favorites.push(product);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    displayFavorites();
}

function displayFavorites() {
    const container = document.querySelector("#favoritesContainer");
    if (!container) return;

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    container.innerHTML = "";

    favorites.forEach(item => {
        container.innerHTML += `
      <div class="card">
        <img src="${item.image}" loading="lazy" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
      </div>
    `;
    });
}

/* =======================
   NEWSLETTER FORM (HOME)
======================= */

function setupNewsletter() {
    const form = document.querySelector("#newsletterForm");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#subscriberName").value;

        if (name === "") return;

        localStorage.setItem("subscriber", name);

        document.querySelector("#subscriptionMessage").textContent =
            `Welcome ${name}, thanks for subscribing!`;
    });
}

/* =======================
   CONTACT FORM
======================= */

function setupContactForm() {
    const form = document.querySelector("#contactForm");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.querySelector("#fullName").value;

        if (name === "") return;

        document.querySelector("#formMessage").textContent =
            `Thanks ${name}, we will contact you soon!`;
    });
}

/* =======================
   INIT
======================= */

document.addEventListener("DOMContentLoaded", () => {
    loadFeatured();
    loadProducts();
    setupFilters();
    displayFavorites();
    setupNewsletter();
    setupContactForm();
});