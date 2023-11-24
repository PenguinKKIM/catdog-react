import { Link } from "react-router-dom";

function Popular() {
    return (

        <ul className="shop-list-ul">
            <li className="shpo-list-li">
                <hr className="divide-line" />
                <div className="nearby-shop-container">
                    <div className="nearby-shop-address-container">
                        <div className="nearby-shop-img-container">
                            <div className="nearby-shop-img"></div>
                        </div>

                        <div className="shop-text-container">
                            <h3 className="shop-name">KOSTA 살롱 10km</h3>
                            <div className="shop-adderss">
                                <p className="shop-adderss-text">
                                    서울 금천구 가산 디지털 1로 70
                                    호서대 벤쳐 타워
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link to="num">샵 바로가기</Link>
                </div>
            </li>
        </ul>
    );
}

export default Popular;