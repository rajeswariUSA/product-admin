import  { useState } from 'react'
import '../css/bootstrap.min.css'
import '../css/fontawesome.min.css'
import '../css/templatemo-style.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Login() {

    const goToHome = useNavigate('');
const [userName,setUserName] = useState('');
const [password,setPassword] = useState('');

const setUserNameVal = (e:any)=>{setUserName(e.target.value)}

const setPasswordVal = (e:any)=>{setPassword(e.target.value)}


const checkUser = (e:FormDataEvent)=>{
    console.log("hello")
    e.preventDefault();
    console.log("username--->"+userName);
    console.log("password--->"+password);
    axios.get("https://e-commerce-yv5m.onrender.com/store/users/check?name="+userName
        +"&password="+password).then(
        (res)=>{
            console.log(res.data);
            goToHome("/home")
        }
    );

}


  return (
    <div>



    <div className="container tm-mt-big tm-mb-big">
      <div className="row">
        <div className="col-12 mx-auto tm-login-col">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="tm-block-title mb-4">Product Admin Dashboard</h2>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
               
                  <div className="form-group">
                    <label>Username</label>
                    <input
                    onChange={setUserNameVal}
                      name="username"
                      type="text"
                      className="form-control validate"
                      id="username"
                      
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                    onChange={setPasswordVal}
                      name="password"
                      type="password"
                      className="form-control validate"
                      id="password"
                      
                      required
                    />
                  </div>
                  <div className="form-group mt-4">
                    <button
                     
                      onClick={()=>{
                         console.log("hello")
    
    console.log("username--->"+userName);
    console.log("password--->"+password);
    axios.get("https://e-commerce-yv5m.onrender.com/store/users/check?name="+userName
        +"&password="+password).then(
        (res)=>{
            console.log(res.data);
            goToHome("/home")
        }
    );
                      }}
                      className="btn btn-primary btn-block text-uppercase"
                    >
                      Login
                    </button>
                  </div>
                  <button className="mt-5 btn btn-primary btn-block text-uppercase">
                    Forgot your password?
                  </button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    </div>
  )
}
