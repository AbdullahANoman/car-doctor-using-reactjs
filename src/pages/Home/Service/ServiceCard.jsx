import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, img, title, price } = service;

  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-[200px]" />
      </figure>
      <div className="flex justify-between items-center">
        <div className="card-body ">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p className="font-semibold text-red-500">Price: ${price}</p>
        </div>
        <div>
          <Link to={`/checkout/${_id}`}><FaArrowRight className="mr-10 text-red-500"></FaArrowRight></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
