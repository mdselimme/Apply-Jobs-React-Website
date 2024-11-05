import BannerImage from "../../../assets/images/bannger-photo.png";

const Banner = () => {
    return (
        <div className="grid grid-cols-2 items-center">
            <div className="pb-16">
                <h1 className="text-[5rem] font-extrabold leading-[6.2rem]">One Step <br /> Closer To Your<br /> <span className="active">Dream Job</span></h1>
                <p className="text-lg text-[#757575] leading-[1.9rem] font-normal py-5">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.</p>
                <button className="bg-common rounded-lg text-base">Get Started</button>
            </div>
            <div>
                <img src={BannerImage} className="w-full" alt="Banner-Image" />
            </div>
        </div>
    );
};

export default Banner;