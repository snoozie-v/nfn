import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";


import Discord from "./pages/Discord";
import Home from "./pages/Home"
import TwitterSpaces from "./pages/TwitterSpaces";
import About from "./pages/About"
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path ="/" element={<Layout />}> 
        <Route index element = {<Home />} />
        <Route path="twitter" element={<TwitterSpaces />} />
        <Route path="discord" element={<Discord />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        
      </Route>
    
    </Routes>
    
  )
}


export default App
