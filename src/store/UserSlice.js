import {createSlice} from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import AppSettings from '../AppSettings.json'
import  axios  from 'axios';
import { useNavigate  } from 'react-router-dom';

const url = AppSettings.api + 'User';
export const userLogin = createAsyncThunk('user/Login',async(data,{dispatch,getState})=>{
    debugger;

    var LogData = new FormData();
       LogData.append('Email',data.email);
       LogData.append('PassWord',data.password);
    try {
        const response = await axios.post(url, LogData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        const _data = await response.data;
        if(_data){
            data.successCallback();
            return _data;
        }
        else{
            alert("SomeThing Went wrong");
        }
    }
    catch(err){
      console.log(err);
    }

});

export const registerUser =createAsyncThunk('user/Register',async(data,{dispatch,getState})=>{
    const navigate = useNavigate();

   var UserData = {
    FirstName : data.FirstName,
    LastName : data.LastName,
    UserName : data.UserName,
    Email : data.Email,
    PassWord : data.PassWord,
   }
   const RegisterUrl = url+"/Register"
   var response =await axios.post(RegisterUrl,UserData,{
        headers:{
            'Content-Type':'application/json',
        }
   });
   debugger;
   if(response.status == 200){
         alert(response.data);
         navigate('/');
   }
   else{
    alert("Something Went Wrong");
   }
});

const userSlice = createSlice({
    name:'user',
    initialState:{
        customers:[],
    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.fulfilled, (state, action) => {
                state.customers = action.payload;
            });
        },
});
export default userSlice.reducer;
