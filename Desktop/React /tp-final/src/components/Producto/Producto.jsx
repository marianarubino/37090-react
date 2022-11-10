import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { consultarBDD } from '../../assets/funciones';

const Producto = () => {
    
    const [producto, setProducto] = useState([]);

    useEffect(()=>{
        consultarBDD('./json/productos.json').then(productos=> console.log(productos))
    }, []);

    return (
        <div>
            <h1>Producto</h1>
        </div>
    );
}

export default Producto;
