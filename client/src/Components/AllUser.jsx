import React, { useEffect,useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {styled,Button} from '@mui/material';
import {getUsers,deleteUser} from './service/api'
import {useNavigate} from 'react-router-dom'

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
        width:1000px;
    }
`;

const TBody = styled(TableRow)`
    & > td{
        font-size: 20px
    }
`;



export default function AllUser() {
  const [users,setUsers]=useState([]);
  const navigate =useNavigate();
  useEffect(()=>
  {
      getUserAll();
  },[])

  const getUserAll = async()=>
  {
    let res= await getUsers();
    setUsers(res.data);
    console.log(res.data);
  }

  const deleteUsers = async(id)=>
  {
    await deleteUser(id);
    getUserAll();
  }
  return (
    <div>
      <StyledTable>
        <TableHead>
            <THead>
            <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell></TableCell>
            </THead>
        </TableHead>
        <TableBody >
        {
          users.map(user=>
            (
              <TBody key={user.userId}>
                  <TableCell>{user.userId}</TableCell>
                  <TableCell>{user.Username}</TableCell>
                  <TableCell>{user.Email}</TableCell>
                  <TableCell>{user.Phone}</TableCell>
              <TableCell><Button variant='contained' style = {{margin:20}} onClick={()=>navigate(`/edit/${user.userId}`)}>Edit</Button>
                          <Button variant='contained' color='secondary' onClick={()=>deleteUsers(user.userId)}>Delete</Button>
              </TableCell>
              </TBody>
            ))
        }
        </TableBody>
      </StyledTable>
    </div>
  )
}
