import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, img, name, brandName,type, price,shortDescription,rating,button } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{shortDescription}</p>
               
                <div className="mt-4 flex">
                    {/* <h2 className="flex mr-4"><MdLocationOn className="text-2xl mr-2"></MdLocationOn> {location}</h2> */}
                    <h2 className="flex"> <AiOutlineDollar className="text-2xl"></AiOutlineDollar> {price}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;