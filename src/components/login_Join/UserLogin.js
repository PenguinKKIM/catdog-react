import { Link } from "react-router-dom";
import Footer from "../screens/Footer";
import Swal from "sweetalert2";

function UserLogin() {

    const handleAutoLogin =(e)=>{
        e.preventDefault();
    }

    return (
        <>
            {/** 보호자 로그인 페이지 */}
            <div className="web-container">
                <div className="cd-container bg-white bg-dogs">
                    <main className="cd-main">

                        <section className="main-logo">
                            <img src="img/logo/logo_color.png" alt="댕냥꽁냥 로고" />
                            <span className="main-logo-text">보호자 로그인</span>
                        </section>

                        <section className="form-section">
                            <form action="#" method="post" className="form-css">
                                <div className="form-container">
                                    <div className="input-container">

                                        {/** 보호자 로그인 
                                         * id : 보호자 ID
                                         * password : 보호자 패스워드
                                         */}

                                        {/** 보호자 ID */}
                                        <input type="text" id="id" name="id" placeholder="댕냥꽁냥 아이디" className="input-text" />

                                        {/** 보호자 비밀번호 */}
                                        <input type="password" id="password" name="password" placeholder="비밀번호" className="input-text" />

                                        {/** 자동로그인, 회원가입 , 계정찾기, 비밀번호 찾기 */}
                                        <div className="login-tools">
                                            <span onClick={handleAutoLogin}><i className="fas fa-check-circle"></i> 자동 로그인</span>
                                            <div>
                                                <span className="logintool-text"><Link to="/userlogin">회원가입</Link></span>
                                                <span className="logintool-text"><Link to="cl-findid.html">계정찾기</Link></span>
                                                <span className="logintool-text"><Link to="cl-findpassword.html">비밀번호 찾기</Link></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="button-container">
                                        {/** Submit BTN */}
                                        <button type="submit" className="main-btn btn-text magin-t-1"><a href="cl-main.html" className="btn-text">로그인</a></button>
                                        {/** 카카오 로그인 */}
                                        <div className="main-btn kakao-login-btn"><i className="fas fa-comment"></i>카카오톡 로그인</div>
                                    </div>

                                </div>
                            </form>
                        </section>

                    </main>

                    <Footer />
                </div>
            </div>
        </>
    );
}

export default UserLogin;
