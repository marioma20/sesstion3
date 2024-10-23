

import Product_data from "../Product_data";
import Product from "./Product";
import "./Productlist.css";
function Productlist(){

    console.log(Product_data.price)
 
    return(

        <div className="product-list">
           <div className="row">
         
             {
               Product_data.map((product) =>{
                return product.price > 100 ? 
               (<div className="card" key={product.id}>
                <img src={product.image}/>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>price: {product.price}</p>
                <button onClick={()=>{
                    console.log("prise is")
                }}> click here</button>  
            </div> ) : null;
            //   <Product Product={product} key={product.id}/>  : null ;      
        })
             }

           </div>
        </div>
    );
}
export default Productlist;