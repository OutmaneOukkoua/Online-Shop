import { Link } from "react-router-dom";
function Product (props){
    const {product,showButton} = props;
    return(
        <>
        <div className="card" >
        <img className="card-img-top" src={product.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">{product.price}$</p>
          {showButton &&  <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>
        }
        </div>
      </div>        
        </>
        );
}export default Product;