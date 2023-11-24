import { Link } from "react-router-dom";
import Footer from "../screens/Footer";
import Swal from "sweetalert2";

function DesLogin() {
    return (
    <div className="web-container">
        <div className="cd-container bg-white bg-dogs">
            <main className="cd-main">

                <section className="main-logo">
                    <img src="img/logo/logo_color.png" alt="댕냥꽁냥 로고" />
                    <span className="main-logo-text">펫 스타일리스트 로그인</span>
                </section>

                <section className="login-form-section">
                    {/** 디자이너 로그인 
                     * id : 디자이너 ID
                     * password : 디자이너 비밀번호
                     * 
                    */}
                    <form action="#" method="post" className="form-css">
                        <div className="form-container">
                            
                            <div className="input-container">
                                {/** 디자이너 ID */}
                                <input type="text" id="id" name="id" placeholder="댕냥꽁냥 아이디" className="input-text" />
                                
                                {/** 디자이너 비밀번호 */}
                                <input type="password" id="password" name="password" placeholder="비밀번호" className="input-text" />
                                
                                {/** 자동로그인, 회원가입 , 계정찾기, 비밀번호 찾기 */}
                                <div className="login-tools">
                                    <span><i className="fas fa-check-circle"></i> 자동 로그인</span>
                                    <div>
                                        <span className="logintool-text"><Link to="/desjoin">회원가입</Link></span>
                                        <span className="logintool-text"><Link to="#">계정찾기</Link></span>
                                        <span className="logintool-text"><Link to="#">비밀번호 찾기</Link></span>
                                    </div>
                                </div>

                            </div>

                            {/** Submit 버튼 , 카카오 로그인 버튼 */}
                            <div className="button-container">
                                <button type="submit" className="main-btn btn-text magin-t-1">로그인</button>
                                <div className="main-btn kakao-login-btn"><i className="fas fa-comment"></i>카카오톡 로그인</div>
                            </div>
                        </div>
                    </form>
                </section>

            </main>

            <Footer />
        </div>
    </div>
    );
}

export default DesLogin;