const products = [
    {
        name: "Classic Shirt",
        price: 25,
        image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3NpYyUyMHNoaXJ0fGVufDB8fDB8fHww"
    },
    {
        name: "Elegant Jacket",
        price: 60,
        image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fHww"
    },
    {
        name: "Casual Tee",
        price: 18,
        image: "https://images.unsplash.com/photo-1602810318660-d2c46b750f88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsYXNzaWMlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        name: "Classic Shirt",
        price: 25,
        image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3NpYyUyMHNoaXJ0fGVufDB8fDB8fHww"
    },
    {
        name: "Elegant Jacket",
        price: 60,
        image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fHww"
    },
    {
        name: "Casual Tee",
        price: 18,
        image: "https://images.unsplash.com/photo-1602810318660-d2c46b750f88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsYXNzaWMlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Classic Shirt",
        price: 25,
        image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3NpYyUyMHNoaXJ0fGVufDB8fDB8fHww"
    },
    {
        name: "Elegant Jacket",
        price: 60,
        image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fHww"
    },
    {
        name: "Casual Tee",
        price: 18,
        image: "https://images.unsplash.com/photo-1602810318660-d2c46b750f88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsYXNzaWMlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Classic Shirt",
        price: 25,
        image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3NpYyUyMHNoaXJ0fGVufDB8fDB8fHww"
    },
    {
        name: "Elegant Jacket",
        price: 60,
        image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fHww"
    },
    {
        name: "Casual Tee",
        price: 18,
        image: "https://images.unsplash.com/photo-1602810318660-d2c46b750f88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsYXNzaWMlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Classic Shirt",
        price: 25,
        image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3NpYyUyMHNoaXJ0fGVufDB8fDB8fHww"
    },
    {
        name: "Elegant Jacket",
        price: 60,
        image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fHww"
    },
    {
        name: "Casual Tee",
        price: 18,
        image: "https://images.unsplash.com/photo-1602810318660-d2c46b750f88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsYXNzaWMlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Classic Shirt",
        price: 25,
        image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3NpYyUyMHNoaXJ0fGVufDB8fDB8fHww"
    },
    {
        name: "Elegant Jacket",
        price: 60,
        image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fHww"
    },
    {
        name: "Casual Tee",
        price: 18,
        image: "https://images.unsplash.com/photo-1602810318660-d2c46b750f88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsYXNzaWMlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Classic Shirt",
        price: 25,
        image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3NpYyUyMHNoaXJ0fGVufDB8fDB8fHww"
    },
    {
        name: "Elegant Jacket",
        price: 60,
        image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fHww"
    },
    {
        name: "Casual Tee",
        price: 18,
        image: "https://images.unsplash.com/photo-1602810318660-d2c46b750f88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsYXNzaWMlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Classic Shirt",
        price: 25,
        image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3NpYyUyMHNoaXJ0fGVufDB8fDB8fHww"
    },
    {
        name: "Elegant Jacket",
        price: 60,
        image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fHww"
    },
    {
        name: "Casual Tee",
        price: 18,
        image: "https://images.unsplash.com/photo-1602810318660-d2c46b750f88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsYXNzaWMlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Classic Shirt",
        price: 25,
        image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3NpYyUyMHNoaXJ0fGVufDB8fDB8fHww"
    },
    {
        name: "Elegant Jacket",
        price: 60,
        image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fHww"
    },
    {
        name: "Casual Tee",
        price: 18,
        image: "https://images.unsplash.com/photo-1602810318660-d2c46b750f88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsYXNzaWMlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
    }
];

// FEATURED SECTION
function loadFeatured() {
    const featured = document.querySelector("#featured");
    if (!featured) return;

    featured.innerHTML = `
    <div class="card">
      <img src="${products[0].image}" loading="lazy">
      <h3>${products[0].name}</h3>
      <p>$${products[0].price}</p>
    </div>
  `;
}

// ALL PRODUCTS
function loadProducts() {
    const container = document.querySelector("#products");
    if (!container) return;

    container.innerHTML = "";

    products.forEach(item => {
        container.innerHTML += `
      <div class="card">
        <img src="${item.image}" loading="lazy">
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
      </div>
    `;
    });
}

// FORM + LOCALSTORAGE
function handleForm() {
    const form = document.querySelector("#contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        if (!name || !email || !message) {
            document.querySelector("#formMsg").textContent =
                "Please fill all fields.";
            return;
        }

        const user = { name, email, message };

        localStorage.setItem("contactForm", JSON.stringify(user));

        document.querySelector("#formMsg").textContent =
            `Thank you ${name}, we will respond soon!`;

        form.reset();
    });
}

// RUN
loadFeatured();
loadProducts();
handleForm();