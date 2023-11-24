import { Link, Route, Routes } from "react-router-dom";
import Footer from "../screens/Footer";
import Header from "../screens/Header";
import Popular from "./Popular";
import Distance from "./Distance";

function Around() {
    return (
        <div className="web-container">
            <div className="cd-container bg-white">
                <Header />

                <main className="cd-main dis-center po-re">
                    {/* 맵 API */}
                    <section className="map-section">
                        <div className="map-api">
                            {/* 맵 API 가 들어오는 곳 */}
                        </div>
                    </section>

                    {/* 근처 샵 보기 서브 네비 */}
                    <section className="shop-main-section bg-white nearby-container">
                        <nav className="main-nav">
                            <ul className="main-nav-list">
                                {/* 인기순 */}
                                <li className="main-nav-list-text"><Link to="popular">인기순</Link></li>
                                {/* 거리순 */}
                                <li className="main-nav-list-text"><Link to="distance">가까운순</Link></li>
                            </ul>
                        </nav>

                    {/* 다중 라우터 */}
                    <Routes>
                        <Route path="popular" element={<Popular/>}/>
                        <Route path="distance" element={<Distance/>}/>
                    </Routes>

                    </section>


                </main>

                <Footer />
            </div>
        </div>
    );
}

export default Around;