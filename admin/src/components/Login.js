import React from 'react'

function login() {
  
    return (
      
    <div className="col d-flex justify-content-center mt-5">
        <form>
          <h3 className="mb-3 text-center">PallValle</h3>

          <div className="form-group">
          <label>Usuario</label>
            <input type="text" className="form-control" name = "usuario"/>
          </div>

          <div className="form-group">
          <label>Contraseña</label>
            <input type="password" className="form-control" name = "contrasena"/>
          </div>
          <button type="submit" className="btn btn-success btn-block">Ingresar</button>
        </form>

    </div>
    )
}

export default login