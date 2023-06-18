import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
          <Route path='/item/:idItem' element = { <ItemDetailContainer/> } />
          <Route exact path="/carrito" element={<Cart />} />
        </Routes>
      </CartProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
