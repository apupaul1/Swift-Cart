document.getElementById("home").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "index.html";
});

const removeActiveClass = () => {
  const activeBtn = document.getElementsByClassName("active");
  for(let btn of activeBtn){
    btn.classList.remove("active")
  }
}

const loadCategory = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((result) => {
      const btn = document.getElementById(`btn-category-`)
      displayCategory(result)
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
      removeActiveClass()
      document.getElementById('btn-all').classList.add("active")
      displayProduct(data)});
};

const displayProduct = (products) => {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  for (let product of products) {
    const div = document.createElement("div");

    div.innerHTML = `
    <div class="card bg-base-100 shadow-sm h-full">
  <figure class="bg-base-300 p-32 md:p-20 w-89 md:w-72 h-60">
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
      removeActiveClass()
      const btn = document.getElementById(`btn-category-${category}`)
      btn.classList.add("active")
      console.log(btn);
      displayProduct(data)
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
  detailsContainer.innerHTML = "Hii";
  document.getElementById("product_details").showModal();
};

loadCategory();
