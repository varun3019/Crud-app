import { Button, FormControl, FormGroup, Input, InputLabel, Typography,styled } from '@mui/material'
import React, { useState,useEffect } from 'react'
import { editUser ,getUser} from './service/api';
import {useNavigate,useParams} from 'react-router-dom'

const Container = styled(FormGroup)`
              width:50%;
              margin:5% auto 0 auto;
              & > div{
                margin-top:10px;
              }
`;

const defaultValue = {
    Username:"",
    Email:"",
    Phone:""
}

export default function EditUser() {

  const [user,setUser]=useState(defaultValue);
  const navigate =useNavigate();
  const {id}=useParams();
  const loadUserDetails = async () => {
    try {
      const res = await getUser(id);
      const userData = res.data;
      if(userData.length > 0) {
        setUser(userData[0]); 
      } else {
        console.log("No user data found for the given ID");
      }
    } catch (error) {
      console.error("Error fetching user details: ", error);
    }
  }
  
  


  useEffect(()=>
  {
    loadUserDetails();
  },[]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  }

  const editUserDetails = async ()=>
  {
      await editUser(user,id);
      navigate("/alluser");
  }
  return (
      <Container>
        <Typography variant='h4'>Edit  User</Typography>
        <FormControl>
        <InputLabel>Username</InputLabel>
        <Input name='Username' onChange={handleInputChange}  value={user.Username}/>
        {console.log(user)}
        </FormControl>
        <FormControl>
        <InputLabel>Email</InputLabel>
        <Input name='Email'  onChange={handleInputChange} value={user.Email}/>
        </FormControl>
        <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input  name='Phone'onChange={handleInputChange}  value={user.Phone} />
        </FormControl>
        <FormControl>
        <Button variant='contained' onClick={()=>editUserDetails() }>Edit User</Button>
        </FormControl>
      </Container>
  )
}
