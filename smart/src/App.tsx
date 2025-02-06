import './App.css'
import { Route, Routes, BrowserRouter, Router } from 'react-router-dom'
import {Home} from './Home/home'
import { Add } from './Cart/add'
import { Add_cloth } from './Cart/add_cloth'
import { CartPage } from './Cart/cart'
import { Form } from 'react-router-dom'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Add' element={<Add/>}/>
      <Route path='/Add_cloth' element={<Add_cloth/>}/>
      <Route path='/CartPage' element={<CartPage/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
