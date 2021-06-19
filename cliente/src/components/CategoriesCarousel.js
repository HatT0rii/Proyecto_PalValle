import {useState, useEffect} from 'react'
import {obtenerProductos} from "../services/productoService"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Productos from './Productos';
import {Link} from "react-router-dom"
import foto1 from '../assets/foto01.jpg'
import foto2 from '../assets/foto02.jpg'
import foto3 from '../assets/foto03.jpg'
import foto4 from '../assets/foto04.jpg'

function CategoriesCarousel({ productos, categoria, id_categoria }) {


    let configuracion ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }

    return (
        <Slider {...configuracion}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    {/* <img className="card-img-top" src={fotos[0]} alt="" /> */}
                    </div>
                    <ul className="social-icons">
                        <li><a href="/"><i className="fa"></i></a></li>
                    </ul>
                    <div className="details">
                        <a className="btn btn-success" href="/">Comprar</a>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    {/* <Productos productos={productos} categoria="Bebidas" id_categoria="1"/> */}
                    </div>
                    <ul className="social-icons">
                        <li><a href="/"><i className="fa"></i></a></li>
                    </ul>
                    <div className="details">
                        <a className="btn btn-success" href="/">Comprar</a>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    {/* <Productos productos={productos} categoria="Bebidas" id_categoria="1"/> */}
                    </div>
                    <ul className="social-icons">
                        <li><a href="/"><i className="fa"></i></a></li>
                    </ul>
                    <div className="details">
                        <a className="btn btn-success" href="/">Comprar</a>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={foto4} alt="..."/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="/"><i className="fa"></i></a></li>
                    </ul>
                    <div className="details">
                        <a className="btn btn-success" href="/">Comprar</a>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default CategoriesCarousel