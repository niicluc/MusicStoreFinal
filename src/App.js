import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Container/ItemListContainer'
import ItemDetail from './views/ItemDetail'
import {BrowserRouter, Routes, Route} from "react-router-dom" ;
import CartProvider from './Context/CartContext'; 
import PurchaseForm from './components/PurchaseForm/PurchaseForm';


function App() {
  return (
    <div>
        <CartProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer />}> </Route>
                <Route path="/category/:categoria" element={<ItemListContainer />} > </Route>
                <Route path="/purchaseform" element={<PurchaseForm />} > </Route>
                <Route path="/item/:id" element={<ItemDetail />} > </Route>
                <Route path="/item/total" element={<ItemDetail />} > </Route>
                <Route path="/*" element={<div> Pagina erronea</div>}> </Route>
            </Routes>
        </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;

