import { Link, Route, Routes } from "react-router-dom";
import Footer from "../screens/Footer";
import Header from "../screens/Header";
import Around from "./Around";

function Main() {
    return (
    <>
    <div className="web-container">
        <div className="cd-container bg-white">
            <Header/>

            <main className="cd-main">

                <section className="client-main-section">
                    <div className="photo-back">
                        <div className="photo-back-content">
                            <p className="photo-back-text">
                                반려동물과<br />
                                보호자와<br />
                                스타일리스트가<br />
                                모두행복한
                            </p>
                            <div className="client-main-logo">
                                <img src="img/logo/logo_color.png" alt="고객 메인 로고"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="client-main-btn-section">
                    {/* 근처 샵 찾기 */}
                    <div className="main-btn-component main-btn">
                        <div className="main-btn-text">
                            <Link to="/around">
                                <h3 className="main-btn-text-title">근처 샵 찾아보기</h3>
                            </Link>
                            <p>근처의 샵을 찾아보세요</p>
                        </div>
                        <i className="fa-solid fa-map"></i>
                    </div>

                    {/* 갤러리 구경하기 */}
                    <div className="main-btn-component main-btn">
                        <div className="main-btn-text">
                            <a href="st-gallery.html">
                                <h3 className="main-btn-text-title">갤러리 구경하기</h3>
                            </a>
                            <p>스타일리스트 들 의 멋진 사진보기</p>
                        </div>
                        <i className="fas fa-camera-retro"></i>
                    </div>

                    {/* 내 정보 확인하고 수정하기 */}
                    <div className="main-btn-component main-btn">
                        <div className="main-btn-text">                            
                            <a href="cl-petregform.html"><h3 className="main-btn-text-title">반려동물 등록하기</h3></a>
                            <p>내정보 확인하고 수정하기</p>
                        </div>
                        <i className="fas fa-paw"></i>
                    </div>

                    {/* 예약 확인 하기 */}
                    <div className="main-btn-component main-btn">
                        <div className="main-btn-text">
                            <a href="cl-reservation.html">
                            <h3 className="main-btn-text-title">예약확인 하기</h3>
                            </a>
                            <p>예약했다면 예약확인은 필수!</p>
                        </div>
                        <i className="fas fa-clipboard-list"></i>
                    </div>

                    {/* 마이 페이지 */}
                    <div className="main-btn-component main-btn">
                        <div className="main-btn-text">
                            <Link to="/usermy">
                                <h3 className="main-btn-text-title">마이 페이지</h3>
                            </Link>
                            <p>정보를 수정해요</p>
                        </div>
                        <i className="fas fa-user"></i>
                    </div>

                </section>
            </main>
        <Footer/>
        </div>
    </div>
    </>  
    );
}

export default Main;