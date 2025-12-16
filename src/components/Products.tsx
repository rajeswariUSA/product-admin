import axios from 'axios';
import React, { useEffect, useState } from 'react'
interface MProduct{
    "title": string,
        "description": string,
        "imgUrl": string,
        "purchasePrice": number,
        "salesPrice": number,
        "category": string,
        "stock": number
}
export default function Products() {

const [allProducts,setAllProducts] = useState<MProduct[]>([]);

useEffect(()=>{

try{
axios.get("https://e-commerce-yv5m.onrender.com/store/get/all")
    .then(
        (res)=>{
            console.log(res.data);
            setAllProducts(res.data);
        }
    );

}catch(err){console.log(err)}
    

},[]);



  return (
    <div>

<nav className="navbar navbar-expand-xl">
      <div className="container h-100">
        <a className="navbar-brand" href="index.html">
          <h1 className="tm-site-title mb-0">Product Admin</h1>
        </a>
        <button
          className="navbar-toggler ml-auto mr-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars tm-nav-icon"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto h-100">
            <li className="nav-item">
              <a className="nav-link" href="/home">
                 Dashboard
                <span className="sr-only">(current)</span>
              </a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link active" href="/products">
                 Products
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/account">
                Accounts
              </a>
            </li>
            
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link d-block" href="/">
                Admin, <b>Logout</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container mt-8">
      <div className="row tm-content-row">
        <div className="col-sm-24 col-md-24 col-lg-8 col-xl-8 tm-block-col">
          <div className="tm-bg-primary-dark tm-block tm-block-products">
            <div className="tm-product-table-container">
              <table className="table table-hover tm-table-small tm-product-table">
                <thead>
                  <tr>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">PRODUCT NAME</th>
                    <th scope="col">Description</th>
                    <th scope="col">STOCK</th>
                    <th scope="col">Purchase Price</th>
                     <th scope="col">Sales Price</th>
                   
                  </tr>
                </thead>
                <tbody>
                {allProducts.map(
                (product)=>(
                 <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td className="tm-product-name">{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.stock}{" "}UNITS</td>
                    <td>${product.purchasePrice}</td>
                   <td>${product.salesPrice}</td>
                  </tr>
                )
                )}
                 
                  
                </tbody>
              </table>
            </div>
            
            <a
              href="/addProduct"
              className="btn btn-primary btn-block text-uppercase mb-3">Add new product</a>
           
          </div>
        </div>
        
      </div>
    </div>


    </div>
  )
}
