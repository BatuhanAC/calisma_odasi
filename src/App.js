import Header from './components/macros/Header';
import './index.css';
import Main from './components/macros/Main'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={Main} />
      </Routes>
    </>
  );
}

export default App;
