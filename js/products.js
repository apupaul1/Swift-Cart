document.getElementById("home").addEventListener("click", function (event) {
    event.preventDefault()
    window.location.href = 'index.html'
});

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

    console.log(div);

    div.innerHTML = `
    <div class="card bg-base-100 shadow-sm h-full">
  <figure class="bg-base-300 p-20 w-72 h-60">
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



loadProduct()