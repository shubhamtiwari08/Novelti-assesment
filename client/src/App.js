 
import './App.css';
import SingleUser from './Pages/SingleUser/SingleUser';
import Users from './Pages/Users/Users';
import UserForm from './Pages/usereform/UserForm';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/userform' element={<UserForm/>}/>
    <Route path='/userform/:name' element={<UserForm/>}/>
    <Route path='/' element={<Users/>}/>
    <Route path='/users/:name' element={<SingleUser/>}/>

    </Routes>
    </div>
  );
}

export default App;
