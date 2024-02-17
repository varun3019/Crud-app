import { Button, FormControl, FormGroup, Input, InputLabel, Typography,styled } from '@mui/material'
import React, { useState } from 'react'
import { addUser } from './service/api';
import {useNavigate} from 'react-router-dom'

const Container = styled(FormGroup)`
              width:50%;
              margin:5% auto 0 auto;
              & > div{
                margin-top:10px;
              }
`;

const defaultValue = {
    username:"",
    email:"",
    phone:""
}

export default function AddUser() {

  const [user,setUser]=useState(defaultValue);
  const navigate =useNavigate()

  const onValueChange = (e)=>
  {
    setUser({...user,[e.target.name]:e.target.value})
  }

  const addUserDetails = async ()=>
  {
      await addUser(user);
      navigate("/alluser");
  }
  return (
      <Container>
        <Typography variant='h4'>Add User</Typography>
        <FormControl>
        <InputLabel>Username</InputLabel>
        <Input name='username' onChange={(e)=>onValueChange(e)}/>
        </FormControl>
        <FormControl>
        <InputLabel>Email</InputLabel>
        <Input name='email' onChange={(e)=>onValueChange(e)}/>
        </FormControl>
        <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input name='phone' onChange={(e)=>onValueChange(e)}/>
        </FormControl>
        <FormControl>
        <Button variant='contained' onClick={()=>addUserDetails() }>Add User</Button>
        </FormControl>
      </Container>
  )
}
