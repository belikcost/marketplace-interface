import { Item } from "./Item";
import './index.scss';


const Products = ({products, title}) => {

    return (
        <div className="products-container">
            {title && (
                <h1>{title}</h1>
            )}
            <div className="products">
                {products.map(p => (
                    <Item key={p.id} {...p}/>
                ))}
            </div>
        </div>
    )

}

export default Products;