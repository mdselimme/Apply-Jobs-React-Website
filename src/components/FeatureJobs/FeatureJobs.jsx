import PropTypes from "prop-types";


const FeatureJobs = ({jobs}) => {
    
    const {company_logo, job_title, company_name, location, salary, job_type, job_location_type} = jobs;

    return (
        <div className="rounded-2xl p-10">
            <img className="bg-white p-2 rounded-xl mb-3" src={company_logo} alt="image" />
            <h3 className="text-xl text-[#474747] font-extrabold mb-4">{job_title}</h3>
            <h4 className="text-base text-[#A3A3A3] font-medium">{company_name} Jobs Available</h4>
            <div>
                <span>{job_type}</span>
                <span>{job_location_type}</span>
            </div>
            <div>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
        </div>
    );
};

FeatureJobs.propTypes = {
    jobs: PropTypes.object.isRequired
}

export default FeatureJobs;