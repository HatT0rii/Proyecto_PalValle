import React, {useState, useEffect} from 'react'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Productos from '../components/Productos'


function GroupCategories({ 
  productos, 
  categoria, 
  id_categoria, 
  mostrarFiltro, 
  setProductos}) {

    const [checkboxFiltro, setCheckboxFiltro] = useState(false);
    const [filtroNombre, setFiltroNombre] = useState("")

    const GreenCheckbox = withStyles({
        root: {
          color: green[400],
          '&$checked': {
            color: green[600],
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);

      const [state, setState] = React.useState({
        checked: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    const [productosOriginal] = useState(productos)

    useEffect(() => {
        let productosFiltrados = productosOriginal.filter((prod)=>{
          return prod.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
        })
        setProductos(productosFiltrados)  
      },[filtroNombre])

    return (
        <div>
            <div>
        <h2 className="my-3 fw-bold">{categoria}</h2>
      </div>
      {mostrarFiltro ? (
        <div>
          <button className="btn btn-outline-success btn-sm" onClick={() => {setCheckboxFiltro(!checkboxFiltro);}}>
            <i className="fas fa-funnel-dollar me-1"></i>Filtrar Categoria
          </button>
          {checkboxFiltro ? (
            <div className="row p-3">
              <div className="col-12 col-lg-6">
                    <label>Selecciona la categoria</label>
                    
                    <FormControlLabel
                        control={<GreenCheckbox
                        checked={state.checkedG} 
                        value={filtroNombre}
                        onChange={(e) => {setFiltroNombre(e.target.value)}} 
                        name="checkedG"/>}
                        label="Bebidas"
                    />
                    <FormControlLabel
                        control={<GreenCheckbox
                        checked={state.checkedG} 
                        value={filtroNombre}
                        onChange={(e) => {setFiltroNombre(e.target.value)}} 
                        name="checkedG"/>}
                        label="Lacteos"
                    />
                    <FormControlLabel
                        control={<GreenCheckbox
                        checked={state.checkedG} 
                        value={filtroNombre}
                        onChange={(e) => {setFiltroNombre(e.target.value)}} 
                        name="checkedG"/>}
                        label="Frutas"
                    />
                    <FormControlLabel
                        control={<GreenCheckbox
                        checked={state.checkedG} 
                        value={filtroNombre}
                        onChange={(e) => {setFiltroNombre(e.target.value)}} 
                        name="checkedG"/>}
                        label="Abarrotes"
                    />
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
      <div classNameName="col-md-6 mb-3">
        <Productos productos={productos} categoria="Bebidas" id_categoria="1"/>
        <Productos productos={productos} categoria="Lacteos" id_categoria="2"/> 
        <Productos productos={productos} categoria="Frutas" id_categoria="3"/> 
        <Productos productos={productos} categoria="Abarrotes" id_categoria="4"/> 
          
          </div>
        </div>
    )
}

export default GroupCategories