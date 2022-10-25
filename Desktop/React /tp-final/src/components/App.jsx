import './app.css'
import FormBusqueda from './FormBusqueda/FormBusqueda';
import Navbar from './Navbar/Navbar';

const App = () => {
    return (
        <>
        <Navbar/>
        <FormBusqueda busqueda ={"Login"} />
        </>

    );
}

export default App;

