import axios from "axios"

const URL = `${process.env.REACT_APP_URL_API_1}/Producto`

const obtenerProductos = async() => {
  try {
    let { data } = await axios.get(URL)
    return data
  } catch (error) {
    throw error
  }
}

const productoId = async (id) => {
  try {
    let { data } = await axios.get(`${URL}/${id}`)
    return data
  } catch (error) {
    throw error
  }
}

export {
  obtenerProductos,
  productoId
}