let customers = [
{name: "John Smith", email: "js1@gmail.com", purchases: "Sock, Shoe, Shirt"},
{name: "Roonil Wazlib", email: "rw2@gmail.com", purchases: "Broom, Helmet, Robe"},
{name: "Jayden Smith", email: "js2@gmail.com", purchases: "IPhone, Jeans, TV"},
]
customers.forEach(obj => console.log(`Name: ${obj.name}`));
customers.forEach(obj => console.log(obj));

customers.forEach(customer => {
  console.log(`Name: ${customer.name}`);
  console.log(`Email: ${customer.email}`);
  console.log(`Purchases: ${customer.purchases}`);
  console.log("----------");
});