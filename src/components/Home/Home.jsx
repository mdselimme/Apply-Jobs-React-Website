import { useEffect, useState } from "react";
import FeatureJobs from "../FeatureJobs/FeatureJobs";
import JobCategory from "../JobCategory/JobCategory";
import Header from "../Header/Header";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Banner from "./Banner/Banner";


const Home = () => {

    const [category , setCategory] = useState([]);
    const [jobData, setJobsData] = useState([]);

    const commonTitleData = {
        header_title:"Job Category List",
        header_pargraph:"Explore diverse job categories ranging from technology and healthcare to marketing and finance, offering opportunities for every skill set."
    };

    const commonTitleData2 = {
        header_title:"Featured Jobs",
        header_pargraph:"Featured jobs are high-demand positions highlighted by companies, offering unique career opportunities, competitive salaries, and growth potential in various industries."
    };

    useEffect(()=>{
        fetch('category.json')
        .then(res=>res.json())
        .then(data=> setCategory(data));
    },[]);


    useEffect(()=>{
        fetch('jobs.json')
        .then((res)=>res.json())
        .then((data)=> setJobsData(data));
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
                    category.map((data)=> <JobCategory key={data.id} category={data}></JobCategory>)
                }
                </div>
                <HeaderTitle data={commonTitleData2}></HeaderTitle>
                <div className="container mx-auto grid lg:grid-cols-3 gap-10">
                {
                    jobData.map((data)=> <FeatureJobs key={data.id} jobs={data}></FeatureJobs>)
                }
                </div>
            </>
    );
};

export default Home;