import react from "react"
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"

function Logout(){
  localStorage.clear()
  return <Navigate to ="/login" />
}

function RegisterandLogout(){
  localStorage.clear()
  return <Register />
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = "/"
          element = {
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterandLogout />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
