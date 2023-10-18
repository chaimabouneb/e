import ProductItem from "../components/ProductItem";
import { data } from "../utils/data";

export default function page(props) {
  const { products } = data;
  const { onAdd } = props;
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        //<div key={product.id}>{product.name}</div>
        <ProductItem key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
}
