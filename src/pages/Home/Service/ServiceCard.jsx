import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;

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
          <FaArrowRight className="mr-10 text-red-500"></FaArrowRight>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
