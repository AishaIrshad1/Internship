const products = [
  {
    name: "iPhone 14",
    category: "Electronics",
    image: "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437105.jpg?uid=R118157882&ga=GA1.1.1744379702.1738929764&semt=ais_items_boosted&w=740"
  },
  {
    name: "Shampoo",
    category: "Beauty",
    image: "https://img.freepik.com/premium-vector/butterfly-pea-flower-hair-care-shampoo-packaging_249011-453.jpg?uid=R118157882&ga=GA1.1.1744379702.1738929764&semt=ais_items_boosted&w=740"
  },
  {
    name: "Laptop",
    category: "Electronics",
    image: "https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?uid=R118157882&ga=GA1.1.1744379702.1738929764&semt=ais_items_boosted&w=740"
  },
  {
    name: "Sneakers",
    category: "Fashion",
    image: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7528.jpg?uid=R118157882&ga=GA1.1.1744379702.1738929764&semt=ais_items_boosted&w=740"
  },
  {
    name: "Lipstick",
    category: "Beauty",
    image: "https://img.freepik.com/free-vector/cosmetology-realistic-products-set_1284-36546.jpg?uid=R118157882&ga=GA1.1.1744379702.1738929764&semt=ais_items_boosted&w=740"
  }
];

function renderProducts(list) {
  const productList = document.getElementById("productList");
  productList.innerHTML = list.map(p => `
    <div class="product-item">
      <img src="${p.image}" alt="${p.name}">
      <div class="product-name">${p.name}</div>
      <div class="product-category">${p.category}</div>
    </div>`).join("");
}

function filterProducts() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword) ||
    p.category.toLowerCase().includes(keyword)
  );
  renderProducts(filtered);
}

renderProducts(products);
