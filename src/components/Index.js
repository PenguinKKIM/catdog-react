import { Link } from "react-router-dom";
import Footer from "./screens/Footer";

function Index() {

    return (
    <>
    <div class="web-container">
    <div class="cd-container main-background">
        <main class="cd-main ">
            {/* 인덱스 타이틀 로고 */}
            <section class="main-logo">
                <img src="img/logo/logo_color.png" alt="댕냥꽁냥 로고"/>
                <h3 class="main-logo-text">댕댕이 냐옹이 토탈 미용서비스</h3>
            </section>


            <section class="main-login-join">

                {/* 보호자 회원가입 */}
                <div class="join-container">
                    <span class="main-info-text">강아지/고양이 보호자이신가요 ?</span>
                    <div class="main-btn">
                    <Link to="/userjoin" class="btn-text">회원가입</Link>
                    </div>
                </div>

                {/* 보호자 로그인 */}
                <div class="login-container">
                    <span class="main-info-text">댕냥꽁냥 회원이신가요 ?</span>
                    <div class="main-btn">
                        <Link to="/userlogin" class="btn-text">로그인</Link>
                    </div>
                </div>

            </section>

            <section class="main-login-join-stylelist">

                {/* 디자이너 로그인 */}
                <div class="login-container">
                    <span class="main-info-text">펫 디자이너 이신가요?</span>
                    <div class="main-btn">
                        <Link to="/deslogin" class="btn-text">로그인</Link>
                    </div>
                </div>

            </section>

        </main>

    {/* 푸터입니다 */}
    <Footer/>
    </div>
    </div>
    </>

);
}

export default Index;