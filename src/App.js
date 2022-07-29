import Header from "./components/macros/Header";
import "./index.css";
import Main from "./components/macros/Main";
import Account from "./components/macros/Account";
import Login from "./components/macros/Login";
import Signup from "./components/macros/Signup";
import Session from "./components/macros/Session";
import { Route, Routes, useLocation } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
  const queryClient = new QueryClient();
  const location = useLocation()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-slate-100 h-screen">
      {location.pathname !== "/Session" && <Header />}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='Account' element={<Account />} />
        <Route path='Login' element={<Login />} />
        <Route path='Signup' element={<Signup />} />
        <Route path='Session' element={<Session />} />
      </Routes>
      </div>
      {/** React Query Devtool */}
      <ReactQueryDevtools initialIsOpen={false} position='top-right' />
    </QueryClientProvider>
  );
}

export default App;
