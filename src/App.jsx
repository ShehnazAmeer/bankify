import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Applayout from "./ui/Applayout"
import Dashboard from "./pages/Dashboard"
import Account from "./pages/Account"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"
const router= createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      {path:'/account',element:<Account/>},
    ]
  },
  { index: true, path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  {path:'*',element:<PageNotFound/>}

])
export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}