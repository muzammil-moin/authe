import React    from 'react';
import { Link , useNavigate} from 'react-router-dom';

import InnerRegister from './RegisterStyle';
import {Form, Input , message  } from 'antd';
import Axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  
  



  
    const HandleSubmit = async(e)=>{
           let {email , password } = e 
           let fdata = new FormData();
           fdata.append("email" , email);
           fdata.append("password" , password);
           await Axios.post("https://vistadesigners.com/vista2/api/login" , fdata).then(function (response) {
            
           const res = response;
           const role = res.data.role.type
           if(res.data.message === "Invalid"){
                return message.error('User Invalid')
           };
           if(res.data.role === "Admin"){
            navigate('/dashboard' , {state : role } )
         
              
           }

           

          }).catch(function (error) {
            console.log("Error Server" + error );
          });

          
         
      

    
  }
  
 



  return (
    <>
    <div style={{

        backgroundImage : `url('./bg.png')`,
        backgroundSize : "150% 200%"


      }} className='container-fluid vh-100 overflow-hidden  ' >


<div className='vw-100 vh-100 d-flex justify-content-center align-items-center' >

<InnerRegister className='shadow-lg'>
<div className='row' >
 <div className='col-12'>
 <h1 className='text-center py-4 text-danger'>Login </h1>
 </div>

 <Form
  className='row py-5 px-5'
  name="basic"
  labelCol={{ span: 0 }}
  onFinish = {HandleSubmit}
  wrapperCol={{ span: 0  }}
  initialValues={{ remember: true }}
  encType = {'multipart/form-data'}
      
  autoComplete="off"
  
  
  >
  
  
  <Form.Item
  className='col-12 p-2 '
  name={'email'}
  rules={[{ required : true ,message: 'Please input your email !' }]}
>
  <Input className='border-0 border-bottom'  type={'email'} placeholder='Email'  />
  
</Form.Item>
  <Form.Item
  className='col-12 p-2 '
  name={'password'}
  rules={[{ required : true  ,message: 'Please input your Password !' }]}
>
  <Input.Password className='border-0 border-bottom'   placeholder='password'   />
  
</Form.Item>
  



<div className='col-12 mt-2 d-flex justify-content-center flex-column align-items-center' >
<button type='submit' className='btn btn-outline-success btn-lg'>Submit</button>
<Link to={'/register'} className='text-danger btn-lg mt-2'  >Create Account</Link>
</div>

    
 </Form>
 
 </div>

      
</InnerRegister>
      
</div>
      
</div>
    
    </>
  )
}

export default Login