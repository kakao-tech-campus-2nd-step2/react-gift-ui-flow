import Footer from "@components/Footer";
import Header from "@components/Header";
import { Outlet } from "react-router-dom";
import "@styles";

function Home() {
    return (
        <section>
            <Header />
            <div className="layout">
                <Outlet />
            </div>
            <Footer />
        </section>
    );
}

export default Home;
