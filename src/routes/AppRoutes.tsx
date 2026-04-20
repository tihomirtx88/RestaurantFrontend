import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes(){
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/menu" element={<h1>Menu</h1>} />
            <Route path="/login" element={<h1>Login</h1>} />
          </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;