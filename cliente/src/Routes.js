import {Route} from "react-router-dom"
import InicioPalValle from "./views/InicioPalValle"
import DetalleProducto from "./views/DetalleProducto"
import CarritoDeCompra from "./views/CarritoDeCompra"
import Compra from "./views/Compra"
import Categorias from "./views/Categorias"

function Routes() {
    return (
        <div>
           <Route path="/" exact component={InicioPalValle}/>
           <Route path="/detalle/:id" component={DetalleProducto}/>
           <Route path="/carrito" exact component={CarritoDeCompra} />
           <Route path="/categorias" exact component={Categorias} />
           <Route path='/compra' exact component={Compra} />
        </div>
    )
}

export default Routes