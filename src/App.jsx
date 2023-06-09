import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";


import Discord from "./pages/Discord";
import Home from "./pages/Home"
import TwitterSpaces from "./pages/TwitterSpaces";
import About from "./pages/About"
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import NFNContent from "./pages/NFNContent";
import Wallet from "./pages/Wallet"
import Stats from "./pages/Stats";


function App() {
  return (
    <Routes>
      <Route path ="/" element={<Layout />}> 
        <Route index element = {<Home />} />
        <Route path="/nfn" element={<NFNContent/>} />
        <Route path="/twitter" element={<TwitterSpaces />} />
        <Route path="/discord" element={<Discord />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    
    </Routes>
    
  )
}


export default App
