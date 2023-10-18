import { data } from "../utils/data";
import ProductItem from "../components/ProductItem";
import Carti from "../components/Carti";
import { useState } from "react";
export default function index(props) {
  const { products } = data;
  const { onAdd } = props;
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
}
