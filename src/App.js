import { Route, Routes } from 'react-router-dom';
import './App.css';
import ConfirmPurchage from './components/ConfirmPurchage/ConfirmPurchage';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import Portfolio from './components/Portfolio/Portfolio';
import Products from './components/Products/Products';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import NotFound from './components/Shared/NotFound/NotFound';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<RequireAuth>
          <Products/>
        </RequireAuth>}></Route>
        
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/confirmPurchage/:id' element={<RequireAuth><ConfirmPurchage/></RequireAuth>}></Route>


        
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
