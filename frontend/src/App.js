import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddExpense from './components/AddExpense';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/add-expense' element={<AddExpense/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
