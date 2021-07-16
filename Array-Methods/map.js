const product = [
  {
    name: "Watch",
    price: 1500,
    count: 10,
  },
  {
    name: "Mobile",
    price: 25500,
    count: 2,
  },
  {
    name: "Bag",
    price: 500,
    count: 4,
  },
  {
    name: "Mouse",
    price: 300,
    count: 10,
  },
];

const total = product.map((pd) => ({
  Product_Name: pd.name,
  SIngle_Price: pd.price,
  Quantity: pd.count,
  totalPrice: pd.price * pd.count,
}));
console.table(total);
// ==================

// Second Example
// String To Numbers
const Str = ['1', 'Joydip', '3', '4', '5'];
const num = Str.map(Number);
console.log(num);
