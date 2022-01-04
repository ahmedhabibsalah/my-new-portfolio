import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import Bar from './Pages/Bar';
import ContactPage from './Pages/Contact';
import Home from './Pages/Home';
import ServicesPage from './Pages/ServicesPage';
import Work from './Pages/Work';

function App() {
  return (
    <>
    <BrowserRouter>
     <Bar />
      <Routes >
       <Route element={<Home/>} path="/" exact />
       <Route element={<Work />} path="/projects" />
       <Route element={<ServicesPage />} path="/services" />
       <Route element={<ContactPage />} path="/contact" />
     </Routes>
     </BrowserRouter>
     </>
 
  );
}

export default App;
