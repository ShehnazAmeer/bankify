import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Applayout from "./ui/Applayout"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"
import AccountDetail from './features/account/AccountDetail';
import Withdraw from './features/withdaw/Withdraw';
import TransferDetail from './features/transfer/TransferDetail';
import LoanDetail from './features/loan/LoanDetail';
import Card from './features/card/Card';
import WithdrawTo from "./features/withdaw/WithdrawTo"

const router= createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/account', element: <AccountDetail /> },
      { path: '/withdraw', element: <Withdraw /> },
      {path:'/withdraw/withdrawto',element:<WithdrawTo/>},
      { path: '/transfer', element: <TransferDetail /> },
      { path: '/loan', element: <LoanDetail /> },
      { path: '/orderCard', element: <Card /> },
      
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