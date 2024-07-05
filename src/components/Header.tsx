// import React from "react";
import "@styles/style.css";

function Header() {
    return (
        <section className="fixed">
            <div className="layout flex alignCenter justifyBetween">
                <img
                    src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
                    alt="선물하기"
                    width={"65px"}
                />
                <p>로그인</p>
            </div>
        </section>
    );
}

export default Header;
