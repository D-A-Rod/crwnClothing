//import SHOP_DATA from '../../shop-data.json'
//import { UserContext } from "../../components/context/user.context";
import { ProductsContext } from "../../components/context/products.context";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss'

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
