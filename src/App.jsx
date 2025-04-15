import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Pages';
import Books from './Pages/books';
import Contact from './Pages/contact';
import Teams from './Pages/team';
import Login from './Pages/auth/login';

const App = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            {/* bisa diganti path itu ke index aja */}
            {/* Buat manggil pages Home yang telah dibuat nanti akan ada books juga */}
            <Route path="/books" element={<Books/>} />
            <Route path="/team" element={<Teams/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
