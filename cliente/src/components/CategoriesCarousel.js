import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom"
import foto1 from '../assets/foto01.jpg'
import foto2 from '../assets/foto02.jpg'
import foto3 from '../assets/foto03.jpg'
import foto4 from '../assets/foto04.jpg'

function CategoriesCarousel() {


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
            <Link to="/detalle/1">
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src={foto1} />
                        </div>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fa"></i></a></li>
                        </ul>
                        <div className="details">
                            <h2>Emoliente<span className="job-title">Hoy con %25 de descuento</span></h2>

                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/detalle/2">
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={foto2} />
                        </div>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fa"></i></a></li>
                        </ul>
                        <div className="details">
                            <h2>Yogurt<span className="job-title">Hoy con %10 de descuento</span></h2>

                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/detalle/3">
            <div className="card-wrapper">
                <div className="card ">
                    <div className="card-image">
                        <img src={foto3} />
                        </div>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fa"></i></a></li>
                        </ul>
                        <div className="details">
                            <h2>Miel de abeja<span className="job-title">Hoy con %15 de descuento</span></h2>

                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/detalle/4">
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image w-100">
                            <img  src={foto4} />
                            </div>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fa"></i></a></li>
                        </ul>
                        <div className="details">
                            <h2>Arroz Integral<span className="job-title">Hoy con 2x1</span></h2>

                        </div>
                    </div>
                </div>
            </Link>
        </Slider>
    )
}

export default CategoriesCarousel