import Header from "./components/macros/Header";
import "./index.css";
import Main from "./components/macros/Main";
import Account from "./components/macros/Account";
import Login from "./components/macros/Login";
import Signup from "./components/macros/Signup";
import Session from "./components/macros/Session";
import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='Account' element={<Account />} />
        <Route path='Login' element={<Login />} />
        <Route path='Signup' element={<Signup />} />
        <Route path='Session' element={<Session />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
