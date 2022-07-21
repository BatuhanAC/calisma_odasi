import Header from './components/macros/Header';
import './index.css';
import Main from './components/macros/Main'
import Account from './components/macros/Account'
import Login from './components/macros/Login'
import Signup from './components/macros/Signup'
import Session from './components/macros/Session'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='Account' element={<Account/>} />
        <Route path='Login' element={<Login/>} />
        <Route path='Signup' element={<Signup/>} />
        <Route path='Session' element={<Session/>} />
      </Routes>
    </>
  );
}

export default App;
