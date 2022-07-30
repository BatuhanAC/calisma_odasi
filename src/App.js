import Header from "./components/macros/Header";
import "./index.css";
import Main from "./components/macros/Main";
import Account from "./components/macros/Account";
import Login from "./components/macros/Login";
import Session from "./components/macros/Session";
import { Route, Routes, useLocation } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import PrivateRoute from "./components/controller/PrivateRoute";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient();
  const location = useLocation()
  if(localStorage.getItem('isLogged')) {
    //Gece gece kafam durdu
  } else {
    localStorage.setItem('isLogged', false)
  }
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-slate-100 h-screen justify-center items-center">
      <Toaster position="top-right" />
      {location.pathname !== "/session" && <Header />}
      <Routes>
        <Route path='/' element={<Main />} auth={true} />
        <Route path='account' element={<PrivateRoute><Account/></PrivateRoute>} />
        <Route path='login' element={<Login />} />
        <Route path='session' element={<PrivateRoute><Session/></PrivateRoute>} />
      </Routes>
      </div>
      {/** React Query Devtool */}
    </QueryClientProvider>
  );
}

export default App;
