document.getElementById("home").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "index.html";
});

const removeActiveClass = () => {
  const activeBtn = document.getElementsByClassName("active");
  for (let btn of activeBtn) {
    btn.classList.remove("active");
  }
};

const loadCategory = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((result) => {
      const btn = document.getElementById(`btn-category-`);
      displayCategory(result);
    });
};

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  //   categoryContainer.innerHTML = "";

  for (let category of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
  <button id="btn-category-${category}" onclick="loadProductsByCategory(\`${category}\`)" class="btn rounded-2xl">
    ${category}
  </button>
`;

    categoryContainer.append(categoryDiv);
  }
};

const loadProduct = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      removeActiveClass();
      document.getElementById("btn-all").classList.add("active");
      displayProduct(data);
    });
};

const displayAllProduct = (products) => {
  const container = document.getElementById("product-container");
};

const displayProduct = (products) => {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  for (let product of products) {
    const div = document.createElement("div");

    div.innerHTML = `
    <div class="card bg-base-100 shadow-sm h-full">
  <figure class="bg-base-300 p-36 md:p-20 h-60">
    <img
    class=""
      src=${product.image}
      alt="Shoes" />
  </figure>
  <div class="flex justify-between items-center px-6">
  <div class="badge badge-primary mt-4 text-sm">${product.category}</div>
  <div>
    <i class="fa-solid fa-star" style="color: rgba(255, 212, 59, 1);"></i>
    <span>${product.rating.rate} (${product.rating.count})</span>
  </div>
  </div>
  <div class="card-body">
    <h2 class="font-bold">${product.title}</h2>
    <p class="font-bold">$${product.price}</p>
    <div class="flex justify-between gap-5">
     <button onclick="loadProductDetails(${product.id})" class="btn btn-outline  shadow-md btn-sm flex-1"><i class="fa-solid fa-eye"></i>Details</button>
      <button class="btn btn-primary btn-sm flex-1"><i class="fa-solid fa-cart-arrow-down"></i>Add</button>
    </div>
  </div>
</div>
    `;

    container.append(div);
  }
};

const loadProductsByCategory = (category) => {
  const url = `https://fakestoreapi.com/products/category/${category}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActiveClass();
      const btn = document.getElementById(`btn-category-${category}`);
      btn.classList.add("active");
      console.log(btn);
      displayProduct(data);
    });
};

const loadProductDetails = (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((result) => displayProductDetails(result));
};

const displayProductDetails = (product) => {
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
        <div class="flex flex-col md:flex-row gap-5 bg-base-100">
          <figure class="p-20 md:p-12 bg-base-300 lg:flex-1">
            <img
              src=${product.image}
              alt="Movie"
            />
          </figure>
          <div class="lg:flex-2">
            <div>
              <h2 class="text-md md:text-2xl font-bold mb-2">
                ${product.title}
              </h2>
              <p class="badge badge-outline badge-info text-sm">men's clothing</p>
              <p class="mt-3">
                <span><i class="fa-solid fa-star" style="color: rgba(255, 212, 59, 1);"></i>${product.rating.rate} (${product.rating.count} Review)</span>
              </p>
            </div>
            <div>
              <h1 class="text-2xl my-4 font-bold">$${product.price}</h1>
              <p class="text-gray-500 mb-4 text-sm">${product.description}</p>
            </div>
            <div class="flex gap-8">
              <button class="btn btn-outline btn-sm btn-neutral flex-1">
                Buy Now
              </button>
              <button class="btn btn-primary btn-sm flex-1">
                <i class="fa-solid fa-cart-arrow-down"></i>Add
              </button>
            </div>
          </div>
        </div>
  `;
  document.getElementById("product_details").showModal();
};

loadCategory();