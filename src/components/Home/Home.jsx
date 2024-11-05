import Header from "../Header/Header";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Banner from "./Banner/Banner";


const Home = () => {

    const commonTitleData = {
        header_title:"Job Category List",
        header_pargraph:"Explore diverse job categories ranging from technology and healthcare to marketing and finance, offering opportunities for every skill set."
    }

    return (
            <>
                <div className="bg-[#F9F9FF]">
                    <div className="container mx-auto">
                        <Header></Header>
                        <Banner></Banner>
                    </div>
                </div>
                <HeaderTitle data={commonTitleData}></HeaderTitle>
            </>
    );
};

export default Home;