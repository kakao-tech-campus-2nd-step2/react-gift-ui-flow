import { Footer } from "@/components/common/Footer/Footer";
import { Header } from "@/components/common/Header/Header";
import SelectFriend from "@/pages/MainPage/section/SelectFriend";
import Theme from "@/pages/MainPage/section/Theme";
import AIRecommendation from "@/pages/MainPage/section/AIRecommendation";
import LiveRanking from "@/pages/MainPage/section/LiveRanking";

const MainPage = () => {
    return (
        <>
            <Header />
            <SelectFriend />
            <Theme />
            <AIRecommendation />
            <LiveRanking />
            <Footer />
        </>
    )
}

export default MainPage;

