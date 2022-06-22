// import Basic from "./Basic"
// import Airtable from "./Airtable"
import Home from './Home';
import SingleProduct from './SingleProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return  <BrowserRouter>
      <Routes>
        <Route path='/' >
            <Route index element={<Home/>}/>          
            
            <Route path=':id' element={<SingleProduct/>}/>
                
            
        </Route>
      </Routes>
    </BrowserRouter>
}

export default App
