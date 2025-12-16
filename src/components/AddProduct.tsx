import axios from 'axios';
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {

    const goToProducts = useNavigate();

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [stock,setStock] = useState('');
    const [purchasePrice,setPurchasePrice] = useState('');
    const [salesPrice,setSalesPrice] = useState('');
    
    const setTitleVal = (e:any)=>{
        setTitle(e.target.value);
        //console.log(e.target.value);
    }

    const setDescriptionVal = (e:any)=>{
        //console.log(e.target.value)
        setDescription(e.target.value);
        
    }

    const setStockVal = (e:any)=>{
        //console.log(e.target.value)
        setStock(e.target.value);
    }
    const setPPriceVal = (e:any)=>{
        //console.log(e.target.value)
        setPurchasePrice(e.target.value);
    }
    const setSPriceVal = (e:any)=>{
        //console.log(e.target.value)
        setSalesPrice(e.target.value);
    }

const saveProduct = (e:FormDataEvent)=>{e.preventDefault()
   

    const product = {title,description,stock,salesPrice,purchasePrice};

    axios.post("https://e-commerce-yv5m.onrender.com/store/add/product",product).then(
        (res)=>{
            console.log(res.data);
            goToProducts("/products");
        }
    );
}
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
                <i className="fas fa-shopping-cart"></i> Products
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/account">
                <i className="far fa-user"></i> Accounts
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
    <div className="container tm-mt-big tm-mb-big">
      <div className="row">
        <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <div className="row">
              <div className="col-12">
                <h2 className="tm-block-title d-inline-block">Add Product</h2>
              </div>
            </div>
            <div className="row tm-edit-product-row">
              <div className="col-xl-6 col-lg-6 col-md-12">
               
                  <div className="form-group mb-3">
                    <label
                      >Product Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      onChange={setTitleVal}
                      type="text"
                      className="form-control validate"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label
                      >Description</label
                    >
                    <textarea
                    onChange={setDescriptionVal}
                      className="form-control validate"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group mb-3">
                     <label
                            
                            >Stock
                          </label>
                          <input
                          onChange={setStockVal}
                            id="expire_date"
                            name="expire_date"
                            type="text"
                            className="form-control validate"
                            
                          />
                  </div>
                  <div className="row">
                      <div className="form-group mb-3 col-xs-12 col-sm-6">
                          <label
                            
                            >Purchase Price
                          </label>
                          <input
                          onChange={setPPriceVal}
                            id="expire_date"
                            name="expire_date"
                            type="text"
                            className="form-control validate"
                            data-large-mode="true"
                          />
                        </div>
                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                          <label
                            
                            >Sales Price
                          </label>
                          <input
                          onChange={setSPriceVal}
                            id="stock"
                            name="stock"
                            type="text"
                            className="form-control validate"
                            required
                          />
                        </div>
                  </div>
                  
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                <div className="tm-product-img-dummy mx-auto">
                
                </div>
                <div className="custom-file mt-3 mb-3">
                  <input id="fileInput" type="file"  />
                  <input
                    type="button"
                    className="btn btn-primary btn-block mx-auto"
                    value="UPLOAD PRODUCT IMAGE"
                    
                  />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" 
                onClick={()=>{
                    const product = {title,description,stock,salesPrice,purchasePrice};

    axios.post("https://e-commerce-yv5m.onrender.com/store/add/product",product).then(
        (res)=>{
            console.log(res.data);
            goToProducts("/products");
        }
    ); 
                }}
                className="btn btn-primary btn-block text-uppercase">Add Product Now</button>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}
