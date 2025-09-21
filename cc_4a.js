const products = [
  { sku: "E-100", name: "Mouse", category: "electronics", price: 20.00, inventory: 8 },
  { sku: "A-200", name: "shirt", category: "apparel",    price: 30.99, inventory: 15 },
  { sku: "G-300", name: "banana",  category: "groceries", price: 1.00,  inventory: 25 },
  { sku: "H-400", name: "Paper Towels",  category: "household", price: 4.99, inventory: 40 },
  { sku: "E-500", name: "TV", category: "electronics", price: 700.00, inventory: 7 },
];



for (let p of products) {
  let discount = 0;
  switch (p.category) {
    case "electronics": discount = 0.20; break;
    case "apparel":     discount = 0.15; break;
    case "groceries":
    case "household":   discount = 0.10; break;
    default: discount = 0; break;
  }
  p.promoPrice = (p.price * (1 - discount)).toFixed(2);

console.log(`${p.name} promo price: $${p.promoPrice}`);
}
let customerType = "student"