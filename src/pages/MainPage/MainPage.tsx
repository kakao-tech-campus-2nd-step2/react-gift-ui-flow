import { Footer } from "@/components/common/Footer/Footer";
import { Header } from "@/components/common/Header/Header";
import SelectFriend from "@/pages/MainPage/section/SelectFriend";
import Theme from "@/pages/MainPage/section/Theme";

const MainPage = () => {
    return (
        <>
            <Header />
            <SelectFriend />
            <Theme />
            <Footer />
        </>
    )
}

export default MainPage;

