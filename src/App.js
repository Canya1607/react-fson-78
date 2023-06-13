import { Product } from ".";
import "./App.css";

const products = [
  {
    id: "p-1",
    showTitle: false,
    imageUrl: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
    price: 10.99,
  },
  {
    id: "p-2",
    showTitle: true,
    imageUrl: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
    price: 10.99,
  },
  {
    id: "p-3",
    showTitle: true,
    imageUrl: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
    price: 100.11,
  },
];

function App() {
  return (
    <div className="App">
      {products.map((product, index) => (
        <Product
          key={product.id}
          showTitle={product.showTitle}
          imageUrl={product.imageUrl}
          productPrice={product.price && product.price} // undefined null '' 0
        />
      ))}
    </div>
  );
}

export default App;
