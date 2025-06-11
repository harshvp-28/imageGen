import React, { useContext } from 'react'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import {Routes, Route} from 'react-router-dom'
import Nabvar from './components/Nabvar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/Appcontext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const {showLogin} = useContext(AppContext)



  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-100 to bg-orange-200'>
      <ToastContainer position='top-right'></ToastContainer>
      <Nabvar></Nabvar>
      {showLogin &&  <Login></Login>}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/result' element={<Result></Result>}></Route>
        <Route path='/buy' element={<BuyCredit></BuyCredit>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App