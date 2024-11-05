import { useEffect, useState } from "react";
import FeatureJobs from "../FeatureJobs/FeatureJobs";
import Header from "../Header/Header";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Banner from "./Banner/Banner";


const Home = () => {

    const [category , setCategory] = useState([]);

    const commonTitleData = {
        header_title:"Job Category List",
        header_pargraph:"Explore diverse job categories ranging from technology and healthcare to marketing and finance, offering opportunities for every skill set."
    };

    useEffect(()=>{
        fetch('category.json')
        .then(res=>res.json())
        .then(data=> setCategory(data));
    },[])

    return (
            <>
                <div className="bg-[#F9F9FF]">
                    <div className="container mx-auto">
                        <Header></Header>
                        <Banner></Banner>
                    </div>
                </div>
                <HeaderTitle data={commonTitleData}></HeaderTitle>
                <div className="container mx-auto grid grid-cols-4 gap-8 mb-16">
                {
                    category.map((data)=> <FeatureJobs key={data.id} category={data}></FeatureJobs>)
                }
                </div>
            </>
    );
};

export default Home;