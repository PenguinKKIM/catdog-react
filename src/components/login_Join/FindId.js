import Footer from "../screens/Footer";

function FindId() {
    return (<>

        <div className="web-container">
            <div className="cd-container bg-white bg-dogs">
                <main className="cd-main">

                    <section className="main-logo">
                        <img src="img/logo/logo_color.png" alt="댕냥꽁냥 로고" />
                        <span className="main-logo-text">계정 찾기</span>
                    </section>


                    <section className="form-section">
                        <form action="#" method="post" className="form-css">
                            <div className="form-container">
                                <div className="input-container">
                                    <input type="text" id="clPhoneNumber" name="cl-phone-number" placeholder="핸드폰 번호를 입력하세요"
                                        className="input-text" />
                                    <input type="password" id="clPassword" name="cl-password" placeholder="비밀번호 를 입력하세요"
                                        className="input-text" />
                                    <div className="login-tools">
                                        <span></span>
                                        <div>
                                            <span className="logintool-text"><Link to="cl-join.html">회원가입</Link></span>
                                            <span className="logintool-text"><Link to="cl-findpassword.html">비밀번호 찾기</Link></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="button-container">
                                    <button type="submit" className="main-btn magin-t-1"><Link to="cl-idresult.html" className="btn-text">아이디 찾기</Link></button>
                                </div>

                            </div>
                        </form>
                    </section>

                </main>
                <Footer />
            </div>
        </div>

    </>);
}

export default FindId;