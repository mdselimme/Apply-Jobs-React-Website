import Header from "../Header/Header";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div className="bg-[#F9F9FF]">
            <div className="container mx-auto">
                <Header></Header>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;