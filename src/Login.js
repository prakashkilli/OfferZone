import React, { useState } from "react";
import { Button,  TextField } from "@mui/material";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { userLogin } from "./store/UserSlice";

const Login = () => {
  const [userName, SetUserName] = useState("");
  const [PassWord, setPassWord] = useState("");
  const user = useSelector(({user})=>user.customers);
  const dispatch = useDispatch();
  const handleLogin = (username,passWord) => {
       var data ={
        email:username,
        password : passWord,
        successCallback : SuccessCallback
       }
       dispatch(userLogin(data));
  };
  const SuccessCallback =()=>{
    console.log(user);
    alert("Login successfully");
    window.location.replace(window.location.origin+"/Dashboard");
  }
  return (
    <div className=" h-100" style={{backgroundColor : 'black'}}>
      <div className="container d-flex justify-content-center " style={{height:'1000px'}}>
         <div className="card m-32 p-16 w-50 h-50" style={{alignItems: 'center' ,marginTop:'8rem'}}>
          <h1>Login</h1>
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            Email :{" "}
            <TextField
              size="small"
              onChange={(e) => SetUserName(e.target.value)}
              value={userName}
            />
            PassWord :{" "}
            <TextField
              size="small"
              type="password"
              onChange={(e) => setPassWord(e.target.value)}
              value={PassWord}
            />
            <Button
              color="primary"
              style={{ backgroundColor: "aquamarine", marginTop:'1rem'}}
              onClick={()=>handleLogin(userName,PassWord)}
            >
              Login
            </Button>
            <span className="mt-4">
              If You Don't Have Account Click{" "}
              <Link to="/Register">Regester</Link>
            </span>
            <p></p>
          </div>
        
         </div>
       
      </div>
    </div>
  );
};

export default Login;
