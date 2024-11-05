import PropTypes from "prop-types";


const FeatureJobs = ({category}) => {
    
    const {image, title, available_jobs} = category;

    return (
        <div className="bg-[#FAF8FF] rounded-2xl p-10">
            <img className="bg-white p-2 rounded-xl mb-3" src={image} alt="image" />
            <h3 className="text-xl text-[#474747] font-extrabold mb-4">{title}</h3>
            <h3 className="text-base text-[#A3A3A3] font-medium">{available_jobs} Jobs Available</h3>
        </div>
    );
};

FeatureJobs.propTypes = {
    category: PropTypes.object.isRequired
}

export default FeatureJobs;