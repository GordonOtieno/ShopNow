import React from 'react';
import data from './data';
function App() {
  return (
    
        <div className="grid-container">
        <header className="row">
           <div>
               <a className="brand" href="/">ShopNow</a>
           </div>
           <div>
               <a href="/cart">Add To Cart</a>
               <a href="/signin">Sign In</a>
           </div>
        </header>
        <main>
          
          <div className="row centre">
             {
                data.products.map(product=>(
                <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                    <img className="medium" src={product.image} alt ='product'/>
                </a>
                <div className="card-body">
                    <a href={`product/${product._id}`}>
                        <h2>{product.name}</h2>
                    </a>
                    <div className="rating">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                    </div>
                    <div className="price">Ksh. {product.price}</div>
                </div>
            </div>)
                )
             }  
           
            

          
          </div>
        </main>

        <footer className="row centre"> All ights reserved 2021</footer>

    </div>

   
  );
}

export default App;
