import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Landing from "./pages/landing";

const App = () => {

  const [num, setNum] = useState(0);

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/about" element={<About/>} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;



//rafce



      