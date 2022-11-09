import './app.css'
import FormBusqueda from './FormBusqueda/FormBusqueda';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import CartWidget from './CartWidget/CartWidget';
import ItemCount from './ItemCount/ItemCount';
import Home from './Home/Home';
import Dolar from './Dolar/Dolar';
import Producto from './Producto/Producto';
import Carrito from './Carrito/Carrito';

const App = () => {
    return (
        <>
        <Navbar/>
        <Home/>
        <Producto/>
        <Carrito/>
        <ItemCount/>
        <CartWidget/>
        <ItemListContainer/>
        </>

    );
}


export default App;

/* 
<ItemCount/>     ej, clase 5 
<FormBusqueda busqueda ={"Login"} />   ejemplo de la clase 4
<CartWidget/>
<ItemListContainer greeting ={"greeting"} />    ej. clase 
<Dolar/> .  ejemplo consumo API clase 7*/
