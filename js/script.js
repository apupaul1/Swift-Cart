document.getElementById("redirect").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "products.html";
});

const loadTrendingProduct = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => filterTrendingProduct(data));
};

const filterTrendingProduct = (data) => {
  const filterProducts = data
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 3);
  displayTrendingProduct(filterProducts);
};

const displayTrendingProduct = (products) => {
  const container = document.getElementById("trending-container");
  container.innerHTML = "";

  for (let product of products) {
    const div = document.createElement("div");

    console.log(div);

    div.innerHTML = `
    <div class="card bg-base-100 shadow-sm h-full">
  <figure class="bg-base-300 p-32 w-100 h-40">
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
    <div class="flex justify-between gap-10">
     <button class="btn btn-outline  shadow-md btn-sm flex-1"><i class="fa-solid fa-eye"></i>Details</button>
      <button class="btn btn-primary btn-sm flex-1"><i class="fa-solid fa-cart-arrow-down"></i>Add</button>
    </div>
  </div>
</div>
    `;

    console.log(div);

    container.appendChild(div);
  }
};

loadTrendingProduct();
