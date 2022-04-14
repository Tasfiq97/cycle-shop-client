import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/SignIn/Register';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import AuthProvider from './AuthProvider/AuthProvider';
import ProductDetails from './Pages/Products/ProductDetails';
import AllProducts from './Pages/AllProducts/AllProducts';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
     <Header></Header>
    <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/product/:productId' element={<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>}></Route>
       <Route path='/allProducts' element={<AllProducts></AllProducts>}></Route>
       <Route path='/dashboard/*' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
