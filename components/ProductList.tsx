import ProductCard from "./ProductCard";

type Props = {
  products: any;
};

const ProductList = ({ products }: Props) => {
  return (
    <div className="bg-white">
      <div className="py-6">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product: any) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
