import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Home from "./pages/Home"
import Applayout from "./ui/Applayout"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"
import Withdraw from './features/withdaw/Withdraw';
import TransferDetail from './features/transfer/TransferDetail';
import LoanDetail from './features/loan/LoanDetail';
import WithdrawFunds from "./features/withdaw/WithdrawFunds"
import BankManagement from "./pages/BankManagement"
import TransectionDetail from "./features/Manage/TransectionDetail"
import ProtectedRoute from "./ui/ProtectedRoute";
import AddNewBankAccount from "./features/Manage/AddNewBankAccount";
import BankAccountOverview from "./features/Manage/BankAccountOverview";
import AddNewAccount from './features/account/AddNewAccount'

import { Toaster } from "react-hot-toast";

const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    }
  }
});

const router = createBrowserRouter([
  {
    element: <ProtectedRoute> <Applayout /> </ProtectedRoute>,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/withdraw', element: <Withdraw /> },
      { path: '/newaccount', element: <AddNewAccount/>},
      { path: '/withdraw/withdrawFunds', element: <WithdrawFunds /> },
      { path: '/transfer', element: <TransferDetail /> },
      { path: '/loan', element: <LoanDetail /> },
      { path: '/manage', element: <BankManagement /> },
      { path: '/manage/bankmanagement', element: <BankAccountOverview /> },
      {path:'/manage/newBankAccount',element:<AddNewBankAccount/>},
      { path: '/manage/transections', element: <TransectionDetail /> },
    ]
  },
  { index: true, path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '*', element: <PageNotFound /> }

])
export default function App() {
  return (
    <QueryClientProvider client={queryClinet}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <Toaster
      position='top-center'
      gutter={12}
      toastOptions={{
        success:{
          duration:3000,
        },
        error:{
          duration:3000,
        },
        styles:{
          fontSize:'16px',
          maxWidth:'500px',
          padding:'16px 24px'
        }
      }}
      />
    </QueryClientProvider>

  )
}