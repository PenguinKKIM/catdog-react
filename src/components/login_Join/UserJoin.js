import { Link } from "react-router-dom";
import Footer from "../screens/Footer";
import Swal from "sweetalert2";

function UserJoin() {

    {/**모달 창 */}
    const handleSubBtnClick = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "보호자",
            text: '가입 하시겠습니까?',
            iconHtml: '<i class="fa-solid fa-user tx-gray"></i>',
            showCancelButton: true,
            confirmButtonColor: '#F9950F',
            confirmButtonText: "가입하기",
        });
    };

    return (
        <>
            <div className="web-container">

                <div className="cd-container bg-white bg-dogs">
                    <main className="cd-main">

                        <section className="main-logo">
                            <img src="img/logo/logo_color.png" alt="댕냥꽁냥 로고" />
                            <span className="main-logo-text">보호자 회원가입</span>
                        </section>

                        {/**회원가입 폼 */}
                        <section className="form-section">
                            <form action="#" method="post" className="form-css">
                                <div className="form-container">
                                    <div className="input-container">


                                        {/** 보호자 회원가입 Page
                                         * name : 보호자 이름
                                         * id : 보호자 ID
                                         * nickname : 보호자 닉네임
                                         * password : 보호자 패스워드
                                         * passwordCheck : 비밀번호 같은지 확인
                                         * tel : 보호자 전화번호                                         * 
                                         */}

                                        {/** 이름 */}
                                        <input type="text" id="name" name="name" placeholder="이름"
                                            className="input-text" />

                                        {/** 아이디 - 중복체크 */}
                                        <div className="duplication-check">
                                            <input type="text" id="id" name="id" placeholder="아이디"
                                                className="input-text" />
                                            <button className="duplication-btn small-btn">중복확인</button>
                                        </div>

                                        {/** 닉네임 - 중복체크 */}
                                        <div className="duplication-check">
                                            <input type="text" id="nickname" name="nickname" placeholder="닉네임"
                                                className="input-text" />
                                            <button className="duplication-btn small-btn">중복확인</button>
                                        </div>

                                        {/** 비밀번호 */}
                                        <input type="password" id="password" name="password" placeholder="비밀번호"
                                            className="input-text" />

                                        {/** 비밀번호  체크*/}
                                        <input type="password" id="passwordCheck" name="passwordCheck" placeholder="비밀번호 확인"
                                            className="input-text" />
                                        
                                        {/** 전화번호 */}
                                        <input type="text" id="tel" name="tel" placeholder="전화 번호"
                                            className="input-text" />

                                        {/** 로그인 비번/아이디찾기 */}
                                        <div className="login-tools">
                                            <div></div>
                                            <div>
                                                <span className="logintool-text"><Link to="cl-login.html">로그인</Link></span>
                                                <span className="logintool-text"><Link to="cl-findid.html">계정찾기</Link></span>
                                                <span className="logintool-text"><Link to="cl-findpassword.html">비밀번호 찾기</Link></span>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="button-container">
                                        {/** submit */}
                                        <button onClick={handleSubBtnClick} id="submit-btn" type="submit" className="main-btn btn-text magin-t-1">회원 가입</button>
                                        {/** 카카오톡 로그인 */}                                        
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

export default UserJoin;