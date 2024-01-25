import { BrowserRouter, Route , Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import './index.css'

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          
          <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="contact" element= {<Contact/>} />
            <Route path="favs" element={<Favs/>}/>
            <Route path="*" element={<p className="error">Page not found</p>}/>
            <Route path="" element=""/>
          </Routes>
          </BrowserRouter>
          <Footer/>
      </div>
  );
}

export default App;
