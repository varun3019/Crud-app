
import Navbar from './Components/Navbar';
import AddUser from './Components/AddUser';
import AllUser from './Components/AllUser';
import EditUser from './Components/EditUser';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter >
    <Navbar/>
    <Routes>
    <Route path='/adduser'   element = {<AddUser/>}/>
    <Route path='/alluser' element = {<AllUser/>}/>
    <Route path='/edit/:id' element = {<EditUser/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
