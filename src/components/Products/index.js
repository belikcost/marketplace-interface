import { Item } from "./Item";
import './index.scss';


const Products = ({products}) => {

    return (
        <div className="products">
            {products.map(p => (
                <Item key={p.id} {...p}/>
            ))}
        </div>
    )

}

export default Products;