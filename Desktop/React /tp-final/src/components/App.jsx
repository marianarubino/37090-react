import './app.css'
import FormBusqueda from './FormBusqueda/FormBusqueda';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import CartWidget from './CartWidget/CartWidget';
const App = () => {
    return (
        <>
        <Navbar/>
        <ItemListContainer greeting ={"greeting"} />
        <CartWidget/>
        </>

    );
}

export default App;

/* <FormBusqueda busqueda ={"Login"} /> */