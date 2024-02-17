import React from 'react'
import { AppBar, Toolbar} from '@mui/material'
import { styled } from '@mui/material/styles';
import {NavLink} from 'react-router-dom'

const Header= styled(AppBar)`
  background: #111111;
`;

const Tabs= styled(NavLink)`
  font-size:20px;
  margin-right:15px;
  color:white;
  text-decoration:none
`


export default function Navbar() {
  return (
      <Header position='static' >
        <Toolbar>
          <Tabs to = '/alluser'>All Users</Tabs>
          <Tabs to = 'adduser'>Add User</Tabs>
        </Toolbar>
      </Header>

  )
}
