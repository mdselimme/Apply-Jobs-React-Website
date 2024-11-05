import { useParams } from "react-router-dom";
import Header from "../Header/Header";


const JobDetails = () => {

    const {jobId} = useParams();
    console.log(jobId)

    return (
        <div>
            <Header></Header>
            <h1>Job Details</h1>
        </div>
    );
};

export default JobDetails;