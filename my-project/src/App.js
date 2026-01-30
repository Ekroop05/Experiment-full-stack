import React from 'react';
import ProductCard from './ProductCard';

function App() {

  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 9900,
      description: "High quality noise-canceling headphones.",
      stockCount: 15,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 3000,
      description: "Tracks your health and fitness goals.",
      stockCount: 0, 
      image: "https://via.placeholder.com/300"
    },
    {
      id: 3,
      title: "Mechanical Keyboard",
      price: 12000,
      description: "RGB backlit mechanical keyboard for gaming.",
      stockCount: 5,
      image: "https://via.placeholder.com/300"
    }
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          stockCount={product.stockCount}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default App;