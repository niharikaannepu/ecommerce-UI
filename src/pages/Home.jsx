import { useState } from "react";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = productsData.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Products</h2>

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
