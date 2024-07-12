import './styles/Header.css';
import './styles/Home.css';
import './styles/Footer.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
  );
}

export default App;
