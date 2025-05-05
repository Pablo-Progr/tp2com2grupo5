import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { home, sobreNosotros } from './routes/path'
import Home from './pages/Home'
import SobreNosotros from './pages/SobreNosotros'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={sobreNosotros} element={<SobreNosotros/>} />
        </Routes>  
      </BrowserRouter>
    </>
  )
}

export default App
