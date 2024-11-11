import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/yixuan_niu/" element={<Layout/>}>
            <Route index element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
