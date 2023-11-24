import { useState } from "react";
import { Link } from "react-router-dom";

function UserHeader() {
    {/* User 헤더 네비 */}
    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };
    const hideNav = () => {
        setIsNavVisible(false);
    };
    return (
        <header className="cd-header">
        <div className="logo-icon-container">
            <div className="header-logo">
                <Link to=""><img src="img/logo/logo_color.png" alt="로고 이미지" className="header-logo"/></Link>
            </div>

            <div className="icon-container">
                <button className="header-btn header-btn-text">로그아웃</button>
                <i className="fa-solid fa-bars nav-icon" id="navIconBar" onClick={toggleNav}></i>
            </div>
        </div>
        <nav id="cdNavDropDown" className={`cd-nav ${isNavVisible ? '' : 'hidden'}`} onMouseLeave={hideNav}>
            <ul className="nav-ul">
                <li className="nav-li"><Link to="around">근처 샵 보기</Link><i className="fa-solid fa-map"></i></li>
                <li className="nav-li"><Link to="#">갤러리 구경하기</Link><i className="fas fa-camera-retro"></i></li>
                <li className="nav-li"><Link to="#">반려동물 등록하기</Link><i className="fas fa-paw"></i></li>
                <li className="nav-li"><Link to="#">예약 확인하기</Link><i className="fas fa-clipboard-list"></i></li>
                <li className="nav-li"><Link to="/usermy">마이 페이지</Link><i className="fas fa-user"></i></li>
            </ul>
        </nav>
    </header>
    );
}

export default UserHeader;