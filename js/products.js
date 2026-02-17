document.getElementById("home").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "index.html";
});

const loadCategory = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((result) => displayCategory(result));
};

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  //   categoryContainer.innerHTML = "";

  for (let category of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
  <button onclick="loadProductsByCategory(\`${category}\`)" class="btn rounded-2xl">
    ${category}
  </button>
`;

    categoryContainer.append(categoryDiv);
  }
};

const loadProduct = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayProduct(data));
};

const displayProduct = (products) => {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  for (let product of products) {
    const div = document.createElement("div");

    div.innerHTML = `
<div class="card bg-base-100 shadow-sm h-full flex flex-col">
  <figure class="bg-base-300 p-8 md:p-14 aspect-square">
    <img
      class="h-full w-full"
      src="${product.image}"
      alt="${product.title}" />
  </figure>
  
  <div class="flex flex-wrap justify-between items-center px-4 md:px-6 pt-4 gap-2">
    <div class="badge badge-primary text-xs md:text-sm">${product.category}</div>
    <div class="flex items-center gap-1 text-sm">
      <i class="fa-solid fa-star text-yellow-400"></i>
      <span>${product.rating.rate} <span class="text-gray-400">(${product.rating.count})</span></span>
    </div>
  </div>

  <div class="card-body p-4 md:p-6 flex-grow">
    <h2 class="font-bold text-sm md:text-base line-clamp-1">${product.title}</h2>
    <p class="font-bold text-lg">$${product.price}</p>
    
    <div class="card-actions mt-auto flex flex-col sm:flex-row gap-2 md:gap-4">
      <button onclick="loadProductDetails(${product.id})" class="btn btn-outline shadow-sm btn-sm flex-1">
        <i class="fa-solid fa-eye"></i> Details
      </button>
      <button class="btn btn-primary btn-sm flex-1">
        <i class="fa-solid fa-cart-arrow-down"></i> Add
      </button>
    </div>
  </div>
</div>
`;

    container.append(div);
  }
};

const loadProductsByCategory = (category) => {
  console.log(category);
  const url = `https://fakestoreapi.com/products/category/${category}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayProduct(data));
};

const loadProductDetails = (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((result) => displayProductDetails(result));
};

const displayProductDetails = (product) => {
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = "Hii";
  document.getElementById("product_details").showModal();
};

loadCategory();
