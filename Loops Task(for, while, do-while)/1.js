const products = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"];
const container = document.getElementById("product-container");

const ul = document.createElement('ul');
products.forEach(product => {
  const li = document.createElement('li');
  li.textContent = product;
  ul.appendChild(li);
});
container.appendChild(ul);
