import PropTypes from "prop-types";


const HeaderTitle = ({data}) => {
    const {header_title,header_pargraph} = data;
    return (
        <div className="container mx-auto text-center mt-28 mb-9">
            <h1 className="text-[#1A1919] text-5xl font-extrabold mb-7">{header_title}</h1>
            <p className="text-[#757575] text-base font-medium leading-8 lg:w-3/6 mx-auto">{header_pargraph}</p>
        </div>
    );
};

HeaderTitle.propTypes = {
    data: PropTypes.object.isRequired
}

export default HeaderTitle;