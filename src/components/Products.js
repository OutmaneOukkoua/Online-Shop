import { useEffect, useState } from "react";
import Product from "./Product";

function Products(){
    const [products,setProducts] = useState([]);
    const [categories,setCategories] = useState([]);

    const URL_API = "https://fakestoreapi.com/products";
    const getProducts = () => {
        fetch(URL_API).then((res)=>res.json()).then((data)=>setProducts(data));

    }
    const getCategories= () => {
        fetch(`${URL_API}/categories`).then((res)=>res.json()).then((data)=>setCategories(data));

    }
    const getProductInCategory = (catName) =>{
        fetch(`${URL_API}/category/${catName}`).then((res)=>res.json()).then((data)=>setProducts(data));

    }
    useEffect(()=>{
        getProducts();
        getCategories();
    },[])
    return(
        <>
  <h2 className="text-center">Our Products</h2>
  <div className="container">
  <button style={{marginRight: '10px'}} className="btn btn-primary"  onClick={()=>{getProducts()}}>All</button>
    {categories.map((cat) => {
      return <button style={{marginRight: '10px'}} className="btn btn-primary" key={cat} onClick={()=>{getProductInCategory(cat)}}>{cat}</button>;
    })}
    <div style={{ marginTop: '20px' }}></div>
    <div className="row">
      {products.map((product) => {
        return (
          <div className="col-3" key={product.id}>
            <Product product={product} showButton={true} />
          </div>
        );
      })}
    </div>
  </div>
</>

    )
}export default Products;