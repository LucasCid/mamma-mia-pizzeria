// import Rea from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PizzaDetailPage from './pages/PizzaDetailPage';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import { PizzaProvider } from './contexts/Pizzacontext';

const App = () => {
  return (
    <PizzaProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<PizzaDetailPage />} />
          <Route path="/carrito" element={<CartPage />} />
        </Routes>
      </Router>
    </PizzaProvider>
  );
};

export default App;

