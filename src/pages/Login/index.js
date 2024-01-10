import {React, useState} from 'react'
import './login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const Login = () => {
  const navigate=useNavigate()
  const [email, setEmail]=useState();
  const [password, setPassword]=useState();
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email, password})
    .then(result=>{
        console.log(result)
        if(result.data==="Success"){
        navigate('/add-expense')
    }
    })
    .catch(err=>console.log(err))
  }
  return (
    <form onSubmit={handleSubmit}>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Sign in</h2>
          
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' onChange={(e) => setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' onChange={(e) => setPassword(e.target.value)}/>
          
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Log in</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </form>
  )
}

export default Login