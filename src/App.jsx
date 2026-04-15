import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Applayout from "./ui/Applayout"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"
import Account from './features/account/Account';
import Withdraw from './features/withdaw/Withdraw';
import TransferDetail from './features/transfer/TransferDetail';
import LoanDetail from './features/loan/LoanDetail';
import Card from './features/card/Card'
import WithdrawFunds from "./features/withdaw/WithdrawFunds"
import BankManagement from "./pages/BankManagement"
import TransectionDetail from "./features/Manage/TransectionDetail"

const router= createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/withdraw', element: <Withdraw /> },
      {path:'/withdraw/withdrawFunds',element:<WithdrawFunds/>},
      { path: '/transfer', element: <TransferDetail /> },
      { path: '/loan', element: <LoanDetail /> },
      { path: '/orderCard', element: <Card /> },
      { path: '/manage', element: <BankManagement /> },
      { path: '/manage/bankmanagement', element: <Account /> },
      { path: '/manage/transections', element: <TransectionDetail /> },
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