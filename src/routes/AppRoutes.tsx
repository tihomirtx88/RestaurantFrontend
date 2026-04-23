import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomaPage from "../pages/HomePage";

function AppRoutes(){
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomaPage/>} />
            <Route path="/menu" element={<h1>Menu</h1>} />
            <Route path="/login" element={<h1>Login</h1>} />
          </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;