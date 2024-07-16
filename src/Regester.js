import { Button, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import {useSelector,useDispatch} from 'react-redux';
import axios from "axios";
import App_setting from "./AppSettings.json";
import { registerUser } from "./store/UserSlice";

const Regester = () => {

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      UserName: "",
      Email: "",
      PassWord: "",
    },
  });
  const url = App_setting.api;
  const handleSubmit = (values) => {
    let data = {
      FirstName: formik.values.FirstName,
      LastName: formik.values.LastName,
      UserName: formik.values.UserName,
      Email: formik.values.Email,
      PassWord: formik.values.PassWord,
    };
    dispatch(registerUser(data));
  };
  return (
    <div className="bg-secondary h-100">
      <div
        className="container d-flex justify-content-center "
        style={{ height: "1000px" }}
      >
        <div
          className="card m-32 p-4 w-50 h-50"
          style={{ marginTop: "8rem" }}
        >
          <h1> Regester Page</h1>
         
            FirstName :{" "}
            <TextField
              size="small"
              name="FirstName"
              value={formik.values.FirstName}
              onChange={formik.handleChange}
              onBlur={formik.handleSubmit}
            />
            LastName :{" "}
            <TextField
              size="small"
              name="LastName"
              value={formik.values.LastName}
              onChange={formik.handleChange}
              onBlur={formik.handleSubmit}
            />
            UserName :{" "}
            <TextField
              size="small"
              name="UserName"
              value={formik.values.UserName}
              onChange={formik.handleChange}
              onBlur={formik.handleSubmit}
            />
            Email :{" "}
            <TextField
              size="small"
              name="Email"
              value={formik.values.Email}
              onChange={formik.handleChange}
              onBlur={formik.handleSubmit}
            />
            password :{" "}
            <TextField
              size="small"
              name="PassWord"
              value={formik.values.PassWord}
              onChange={formik.handleChange}
              onBlur={formik.handleSubmit}
            />
            <Button
              style={{ backgroundColor: "tomato", width: "50%", marginLeft:'130px',marginTop:'50px', color:'white'}}
              onClick={()=>handleSubmit(formik.values)}
            >
              Register
            </Button>
          
        </div>
      </div>
    </div>
  );
};

export default Regester;
