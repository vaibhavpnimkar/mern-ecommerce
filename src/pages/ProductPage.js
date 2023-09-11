import Products from "../features/product-list/components/Products";
import Navbar from "../features/navbar/Navbar";

function ProductPage() {
    return ( 
        <div>
        <Navbar>
           <Products></Products>
        </Navbar>
        </div>
     );
}

export default ProductPage;